(function () {
  "use strict";

  const CUSTOM_KEY = "aws-interview-coach-custom-cards";
  const PROGRESS_KEY = "aws-interview-coach-progress";
  const SPEECH_KEY = "aws-interview-coach-speech-settings";
  const FONT_SIZE_KEY = "aws-interview-coach-font-size";
  const SPEED_OPTIONS = [
    { value: "0.65", label: "0.65x かなりゆっくり" },
    { value: "0.78", label: "0.78x ゆっくり" },
    { value: "0.95", label: "0.95x 標準" },
    { value: "1.10", label: "1.10x やや速い" },
    { value: "1.25", label: "1.25x 速い" }
  ];
  const screens = [...document.querySelectorAll(".screen")];
  const toast = document.getElementById("toast");
  let currentScreen = "home-screen";
  let currentFilter = "All";
  let selectedCardId = null;
  let practiceCards = [];
  let practiceIndex = 0;
  let mediaRecorder = null;
  let recordingChunks = [];
  let recordingStartedAt = 0;
  let recordingTimer = null;
  let recordingStream = null;
  let installPrompt = null;
  let speechRun = 0;
let speechSettings = readSpeechSettings();
let activeSpeechBlock = null;
let activeSpeechMode = "english";
let speechStartTimer = null;

  const getCustomCards = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(CUSTOM_KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  };

  const normalizeCategory = (category) => ({
    STAR: "成功体験",
    Logistics: "先方からの質問",
    Basics: "先方からの質問"
  }[category] || category || "先方からの質問");
  const getCards = () => [...window.DEFAULT_CARDS, ...getCustomCards()].map((card) => ({ ...card, category: normalizeCategory(card.category) }));
  const getCard = (id) => getCards().find((card) => card.id === id);
  const getCardContent = (card) => ({ ...card, ...(window.TRANSLATIONS?.[card.id] || {}) });
  const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2400);
  };

  function readSpeechSettings() {
    try {
      const saved = JSON.parse(localStorage.getItem(SPEECH_KEY) || "{}");
      const rate = Number(saved.rate);
      return { voiceName: typeof saved.voiceName === "string" ? saved.voiceName : "", japaneseVoiceName: typeof saved.japaneseVoiceName === "string" ? saved.japaneseVoiceName : "", rate: rate >= 0.65 && rate <= 1.3 ? rate : 0.78, sentencePause: saved.sentencePause === true };
    } catch (_) {
      return { voiceName: "", japaneseVoiceName: "", rate: 0.78, sentencePause: false };
    }
  }

  function readFontSize() {
    const saved = localStorage.getItem(FONT_SIZE_KEY);
    return ["normal", "large", "xlarge", "xxlarge"].includes(saved) ? saved : "normal";
  }

  function applyFontSize(size) {
    const value = ["normal", "large", "xlarge", "xxlarge"].includes(size) ? size : "normal";
    document.body.dataset.fontSize = value;
    const select = document.getElementById("font-size");
    if (select) select.value = value;
  }

  function getEnglishVoices() {
    if (!("speechSynthesis" in window)) return [];
    const seen = new Set();
    return window.speechSynthesis.getVoices().filter((voice) => /^en[-_]/i.test(voice.lang)).filter((voice) => {
      const key = `${voice.name}|${voice.lang}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function voiceScore(voice) {
    const name = voice.name.toLowerCase();
    let score = voice.localService ? 20 : 0;
    if (/en[-_]us/i.test(voice.lang)) score += 8;
    if (/samantha|ava|alex|daniel|karen|moira|jenny|aria|guy|google us english|google uk english/i.test(name)) score += 12;
    if (/compact|novelty|whisper|festival/i.test(name)) score -= 8;
    return score;
  }

  function chooseEnglishVoice(voices = getEnglishVoices()) {
    if (speechSettings.voiceName) {
      const selected = voices.find((voice) => voice.name === speechSettings.voiceName);
      if (selected) return selected;
    }
    return [...voices].sort((a, b) => voiceScore(b) - voiceScore(a))[0] || null;
  }

  function getJapaneseVoices() {
    if (!("speechSynthesis" in window)) return [];
    return window.speechSynthesis.getVoices().filter((voice) => /^ja[-_]/i.test(voice.lang));
  }

  function isFemaleJapaneseVoice(voice) {
    return /kyoko|nanami|haruka|sayaka|ayumi|sakura|ichika|hana|mizuki|google japanese|google 日本語|microsoft (haruka|nanami|sayaka|ayumi)/i.test(voice.name);
  }

  function isLikelyMaleJapaneseVoice(voice) {
    return /otoya|ichiro|keita|daichi|takumi|\bmale\b|男性/i.test(voice.name);
  }

  function preferredJapaneseVoices(voices = getJapaneseVoices()) {
    const femaleVoices = voices.filter(isFemaleJapaneseVoice);
    if (femaleVoices.length) return femaleVoices;
    return voices.filter((voice) => !isLikelyMaleJapaneseVoice(voice));
  }

  function japaneseVoiceScore(voice) {
    let score = voice.localService ? 20 : 0;
    if (/ja[-_]jp/i.test(voice.lang)) score += 8;
    if (isFemaleJapaneseVoice(voice)) score += 100;
    if (/natural|premium|enhanced/i.test(voice.name)) score += 8;
    return score;
  }

  function chooseJapaneseVoice(voices = getJapaneseVoices()) {
    const candidates = preferredJapaneseVoices(voices);
    if (speechSettings.japaneseVoiceName) {
      const selected = candidates.find((voice) => voice.name === speechSettings.japaneseVoiceName);
      if (selected) return selected;
    }
    return [...candidates].sort((a, b) => japaneseVoiceScore(b) - japaneseVoiceScore(a))[0] || null;
  }

  function refreshVoiceOptions() {
    const englishSelect = document.getElementById("voice-select");
    const japaneseSelect = document.getElementById("japanese-voice-select");
    const englishStatus = document.getElementById("voice-status");
    const japaneseStatus = document.getElementById("japanese-voice-status");
    if (!englishSelect && !japaneseSelect) return;
    const englishVoices = getEnglishVoices();
    if (englishSelect) {
      englishSelect.innerHTML = `<option value="">自動選択（おすすめ）</option>${englishVoices.map((voice) => `<option value="${escapeHtml(voice.name)}">${escapeHtml(voice.name)} (${escapeHtml(voice.lang)})</option>`).join("")}`;
      englishSelect.value = speechSettings.voiceName;
    }
    const japaneseVoices = preferredJapaneseVoices();
    if (japaneseSelect) {
      japaneseSelect.innerHTML = `<option value="">女性音声を自動選択（おすすめ）</option>${japaneseVoices.map((voice) => `<option value="${escapeHtml(voice.name)}">${escapeHtml(voice.name)} (${escapeHtml(voice.lang)})</option>`).join("")}`;
      japaneseSelect.value = speechSettings.japaneseVoiceName;
    }
    const rateSelect = document.getElementById("speech-rate");
    if (rateSelect) rateSelect.value = nearestSpeedValue(speechSettings.rate);
    const chosenEnglish = chooseEnglishVoice(englishVoices);
    const chosenJapanese = chooseJapaneseVoice();
    if (englishStatus) englishStatus.textContent = chosenEnglish ? `使用中の英語音声: ${chosenEnglish.name} (${chosenEnglish.lang})` : "端末の英語音声を読み込み中...";
    if (japaneseStatus) japaneseStatus.textContent = chosenJapanese ? `使用中の日本語音声（女性候補）: ${chosenJapanese.name} (${chosenJapanese.lang})` : "女性の日本語音声が見つかりません。端末設定で日本語の女性音声を追加してください。";
  }

  function saveSpeechSettings() {
    localStorage.setItem(SPEECH_KEY, JSON.stringify(speechSettings));
    refreshVoiceOptions();
  }

  function nearestSpeedValue(rate) {
    return SPEED_OPTIONS.reduce((best, option) => Math.abs(Number(option.value) - rate) < Math.abs(Number(best.value) - rate) ? option : best, SPEED_OPTIONS[0]).value;
  }

  function speedOptionsMarkup() {
    return SPEED_OPTIONS.map((option) => `<option value="${option.value}">${option.label}</option>`).join("");
  }

  function updateSpeechControls(block, playing) {
    if (!block) return;
    const playButton = block.querySelector(".speech-play-button");
    const translationPlayButton = block.querySelector(".translation-speak-button");
    const stopButton = block.querySelector(".speech-stop-button");
    if (playButton) {
      const englishPlaying = playing && activeSpeechMode === "english";
      playButton.classList.toggle("is-playing", englishPlaying);
      playButton.innerHTML = `<span>${englishPlaying ? "❚❚" : "◉"}</span> ${englishPlaying ? "再生中..." : playButton.dataset.label}`;
    }
    if (translationPlayButton) {
      const japanesePlaying = playing && activeSpeechMode === "japanese";
      translationPlayButton.classList.toggle("is-playing", japanesePlaying);
      translationPlayButton.innerHTML = `<span>${japanesePlaying ? "❚❚" : "◉"}</span> ${japanesePlaying ? "再生中..." : translationPlayButton.dataset.label}`;
    }
    if (stopButton) stopButton.disabled = !playing;
  }

function stopSpeech() {
  speechRun += 1;
  if (speechStartTimer) {
    window.clearTimeout(speechStartTimer);
    speechStartTimer = null;
  }
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (activeSpeechBlock) updateSpeechControls(activeSpeechBlock, false);
  activeSpeechBlock = null;
  }

  function navigate(screenId, options = {}) {
    stopSpeech();
    currentScreen = screenId;
    screens.forEach((screen) => screen.classList.toggle("active", screen.id === screenId));
    document.querySelectorAll(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.go === screenId || (screenId !== "home-screen" && button.dataset.go === "library-screen" && ["detail-screen", "editor-screen"].includes(screenId))));
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (screenId === "library-screen") renderLibrary(options.filter || currentFilter);
    if (screenId === "practice-screen") startPractice(options.mode || "daily");
    if (screenId === "detail-screen" && selectedCardId) renderDetail(selectedCardId);
    if (screenId === "home-screen") renderStats();
  }

  function renderStats() {
    const progress = readProgress();
    document.getElementById("content-count").textContent = getCards().length;
    document.getElementById("session-count").textContent = progress.sessions;
    document.getElementById("streak-count").textContent = progress.streak;
  }

  function readProgress() {
    try {
      return { sessions: 0, streak: 0, lastDate: "", ...JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}") };
    } catch (_) {
      return { sessions: 0, streak: 0, lastDate: "" };
    }
  }

  function recordSession() {
    const progress = readProgress();
    const today = new Date().toISOString().slice(0, 10);
    const previous = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (progress.lastDate !== today) progress.streak = progress.lastDate === previous ? progress.streak + 1 : 1;
    progress.lastDate = today;
    progress.sessions += 1;
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    renderStats();
  }

  function renderLibrary(filter = "All") {
    currentFilter = filter;
    document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("selected", chip.dataset.filter === filter));
    const list = document.getElementById("card-list");
    const empty = document.getElementById("library-empty");
    const cards = getCards().filter((card) => filter === "All" || card.category === filter);
    list.innerHTML = cards.map((card) => {
      const hasAnswer = Boolean(card.answer);
      return `<button class="library-card" data-card-id="${escapeHtml(card.id)}"><div class="card-meta"><span class="tag">${escapeHtml(card.category)}</span><span class="tag lp">${escapeHtml(card.lp || "Personal")}</span></div><h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.question)}</p><div class="card-footer"><span>${hasAnswer ? "英語回答あり" : "回答を追加できます"}</span><strong>練習する&nbsp;›</strong></div></button>`;
    }).join("");
    empty.hidden = cards.length !== 0;
    list.querySelectorAll("[data-card-id]").forEach((button) => button.addEventListener("click", () => {
      selectedCardId = button.dataset.cardId;
      navigate("detail-screen");
    }));
  }

  function starMarkup(card) {
    const rows = [["S", card.situation], ["T", card.task], ["A", card.action], ["R", card.result]].filter((row) => row[1]);
    if (!rows.length) return "";
    return `<div class="star-grid">${rows.map(([label, value]) => `<div class="star-row"><span class="star-label">${label}</span><p>${escapeHtml(value)}</p></div>`).join("")}</div>`;
  }

  function splitSpeechChunks(text, language) {
    const normalized = String(text).replace(/\s+/g, " ").trim();
    const pattern = language === "japanese" ? /[^。！？!?]+[。！？!?]+|[^。！？!?]+$/g : /[^.!?]+[.!?]+|[^.!?]+$/g;
    return normalized.match(pattern)?.map((chunk) => chunk.trim()).filter(Boolean) || [normalized];
  }

  function speak(text, block = null, language = "english") {
    if (!("speechSynthesis" in window)) return showToast("このブラウザは音声再生に対応していません");
    if (!String(text).trim()) return showToast("音読する文章がありません");
    stopSpeech();
    const run = speechRun;
    const isJapanese = language === "japanese";
    const voice = isJapanese ? chooseJapaneseVoice() : chooseEnglishVoice();
    if (isJapanese && !voice) return showToast("女性の日本語音声が見つかりません。端末設定で追加してください");
    const chunks = splitSpeechChunks(text, language);
    let index = 0;
    activeSpeechBlock = block;
    activeSpeechMode = language;
    updateSpeechControls(block, true);
    const finish = () => {
      if (run !== speechRun) return;
      updateSpeechControls(block, false);
      activeSpeechBlock = null;
    };
    const playNext = () => {
      if (run !== speechRun) return;
      if (index >= chunks.length) return finish();
      const utterance = new SpeechSynthesisUtterance(chunks[index++]);
      utterance.voice = voice;
      utterance.lang = voice?.lang || (isJapanese ? "ja-JP" : "en-US");
      utterance.rate = speechSettings.rate;
      utterance.pitch = 1;
      utterance.volume = 1;
      const pause = !isJapanese && speechSettings.sentencePause ? 5000 : 90;
      utterance.onend = () => window.setTimeout(playNext, pause);
      utterance.onerror = () => {
        if (run === speechRun) {
          finish();
          showToast("音声を再生できませんでした");
        }
      };
      window.speechSynthesis.speak(utterance);
    };
    // Some browsers clip the beginning when speak() is called immediately
    // after cancel(). Give the speech engine a moment to become ready.
    speechStartTimer = window.setTimeout(() => {
      speechStartTimer = null;
      if (run !== speechRun) return;
      if (window.speechSynthesis.paused) window.speechSynthesis.resume();
      playNext();
    }, 260);
  }

  function speechBlockMarkup(id, label, translation) {
    const hasTranslation = Boolean(translation);
    const japanese = translation || "日本語訳が未入力です。カード編集から追加できます。";
    return `<div class="speech-block" data-speech-block="${escapeHtml(id)}"><div class="speech-row"><button class="audio-button speech-play-button" type="button" data-label="${escapeHtml(label)}"><span>◉</span> ${escapeHtml(label)}</button><button class="speech-stop-button" type="button" disabled>■ 停止</button></div><div class="speech-options"><label class="speech-speed-label">速度<select class="speech-speed-select">${speedOptionsMarkup()}</select></label><label class="pause-mode-label"><input class="speech-pause-toggle" type="checkbox" ${speechSettings.sentencePause ? "checked" : ""} /> 文ごとに5秒ポーズ</label><button class="translation-button" type="button">日本語訳を表示</button></div><div class="translation-panel" hidden><div class="translation-label">日本語</div><p>${escapeHtml(japanese)}</p><button class="translation-speak-button" type="button" data-label="日本語訳を音読" ${hasTranslation ? "" : "disabled"}><span>◉</span> 日本語訳を音読</button></div></div>`;
  }

  function bindSpeechBlock(block, text) {
    if (!block) return;
    const speedSelect = block.querySelector(".speech-speed-select");
    if (speedSelect) speedSelect.value = nearestSpeedValue(speechSettings.rate);
    block.querySelector(".speech-play-button")?.addEventListener("click", () => speak(text, block));
    block.querySelector(".translation-speak-button")?.addEventListener("click", () => {
      const translationText = block.querySelector(".translation-panel p")?.textContent || "";
      speak(translationText, block, "japanese");
    });
    block.querySelector(".speech-stop-button")?.addEventListener("click", stopSpeech);
    speedSelect?.addEventListener("change", (event) => {
      stopSpeech();
      speechSettings.rate = Number(event.target.value);
      saveSpeechSettings();
      showToast("再生速度を設定しました");
    });
    block.querySelector(".speech-pause-toggle")?.addEventListener("change", (event) => {
      stopSpeech();
      speechSettings.sentencePause = event.target.checked;
      saveSpeechSettings();
      showToast(event.target.checked ? "文ごと5秒ポーズを設定しました" : "文ごと5秒ポーズを解除しました");
    });
    block.querySelector(".translation-button")?.addEventListener("click", (event) => {
      const panel = block.querySelector(".translation-panel");
      const visible = panel.hidden;
      panel.hidden = !visible;
      event.currentTarget.textContent = visible ? "日本語訳を隠す" : "日本語訳を表示";
    });
  }

  function renderPracticeCard() {
    const card = getCardContent(practiceCards[practiceIndex]);
    if (!card) return;
    document.getElementById("session-progress").textContent = `${practiceIndex + 1} / ${practiceCards.length}`;
    document.getElementById("progress-fill").style.width = `${((practiceIndex + 1) / practiceCards.length) * 100}%`;
    document.getElementById("practice-card").innerHTML = `<div class="question-label">${escapeHtml(card.category)} · ${escapeHtml(card.lp || "PRACTICE")}</div><h3 class="practice-question">${escapeHtml(card.question)}</h3>${speechBlockMarkup("practice-question", "質問を英語で聞く", card.questionJa)}${card.answer ? `<div class="answer-box"><h3>YOUR KEY POINTS</h3><p>${escapeHtml(card.answer)}</p>${speechBlockMarkup("practice-answer", "模範回答を英語で聞く", card.answerJa)}</div>` : `<div class="answer-box"><h3>STARで話すメモ</h3>${starMarkup(card) || "<p>回答を自分の言葉で話してみましょう。</p>"}</div>`}`;
    const practiceCard = document.getElementById("practice-card");
    bindSpeechBlock(practiceCard.querySelector('[data-speech-block="practice-question"]'), card.question);
    bindSpeechBlock(practiceCard.querySelector('[data-speech-block="practice-answer"]'), card.answer);
    appendSavedAudio(practiceCard, card.id);
  }

  function startPractice(mode) {
    const cards = getCards();
    if (!cards.length) return;
    practiceCards = mode === "daily" ? [...cards].sort(() => Math.random() - 0.5).slice(0, Math.min(3, cards.length)) : cards;
    practiceIndex = 0;
    renderPracticeCard();
    recordSession();
  }

  function nextPracticeCard() {
    if (practiceIndex < practiceCards.length - 1) {
      practiceIndex += 1;
      renderPracticeCard();
      return;
    }
    showToast("今日の練習が完了しました");
    navigate("home-screen");
  }

  function renderDetail(id) {
    const rawCard = getCard(id);
    if (!rawCard) return;
    const card = getCardContent(rawCard);
    document.getElementById("detail-card").innerHTML = `<div class="card-meta"><span class="tag">${escapeHtml(card.category)}</span><span class="tag lp">${escapeHtml(card.lp || "Personal")}</span></div><h3>${escapeHtml(card.title)}</h3><div class="detail-section"><div class="section-label">QUESTION</div><p class="practice-question" style="font-size:19px;margin:0;color:var(--ink)">${escapeHtml(card.question)}</p>${speechBlockMarkup("detail-question", "質問を英語で聞く", card.questionJa)}</div>${card.answer ? `<div class="detail-section"><div class="section-label">ENGLISH ANSWER</div><p>${escapeHtml(card.answer)}</p>${speechBlockMarkup("detail-answer", "模範回答を英語で聞く", card.answerJa)}</div>` : ""}${starMarkup(card) ? `<div class="detail-section"><div class="section-label">STAR NOTES</div>${starMarkup(card)}</div>` : ""}${card.followUps?.length ? `<div class="detail-section"><div class="section-label">FOLLOW-UP QUESTIONS</div><ul class="followup-list">${card.followUps.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}</ul></div>` : ""}<button class="primary-button" id="detail-record-button"><span class="button-icon">●</span>このカードで録音する</button>`;
    const detailCard = document.getElementById("detail-card");
    bindSpeechBlock(detailCard.querySelector('[data-speech-block="detail-question"]'), card.question);
    bindSpeechBlock(detailCard.querySelector('[data-speech-block="detail-answer"]'), card.answer);
    document.getElementById("detail-record-button").addEventListener("click", () => openRecorder(card.id));
    appendSavedAudio(document.getElementById("detail-card"), card.id);
    document.getElementById("delete-card-button").style.visibility = getCustomCards().some((item) => item.id === id) ? "visible" : "hidden";
  }

  function saveCustomCard(card) {
    const custom = getCustomCards().filter((item) => item.id !== card.id);
    custom.push(card);
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(custom));
  }

  function saveFormCard(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const card = { id: `custom-${Date.now()}`, title: data.get("title").trim(), question: data.get("question").trim(), questionJa: data.get("questionJa")?.trim() || "", category: data.get("category"), lp: data.get("lp").trim() || "Personal", situation: data.get("situation").trim(), task: data.get("task").trim(), action: data.get("action").trim(), result: data.get("result").trim(), answer: data.get("answer").trim(), answerJa: data.get("answerJa")?.trim() || "", followUps: data.get("followUps").split("\n").map((line) => line.trim()).filter(Boolean) };
    saveCustomCard(card);
    form.reset();
    renderStats();
    showToast("カードを保存しました");
    navigate("library-screen");
  }

  function deleteSelectedCard() {
    if (!selectedCardId || !getCustomCards().some((card) => card.id === selectedCardId)) return;
    if (!window.confirm("この追加カードを削除しますか？")) return;
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(getCustomCards().filter((card) => card.id !== selectedCardId)));
    selectedCardId = null;
    showToast("カードを削除しました");
    navigate("library-screen");
  }

  function openAudioDb() {
    return new Promise((resolve, reject) => {
      if (!("indexedDB" in window)) return resolve(null);
      const request = indexedDB.open("aws-interview-coach-audio", 1);
      request.onupgradeneeded = () => request.result.createObjectStore("recordings");
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async function saveRecording(cardId, blob) {
    const db = await openAudioDb();
    if (!db) return;
    await new Promise((resolve, reject) => { const tx = db.transaction("recordings", "readwrite"); tx.objectStore("recordings").put(blob, cardId); tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); });
  }

  async function getRecording(cardId) {
    const db = await openAudioDb();
    if (!db) return null;
    return new Promise((resolve, reject) => { const tx = db.transaction("recordings", "readonly"); const request = tx.objectStore("recordings").get(cardId); request.onsuccess = () => resolve(request.result || null); request.onerror = () => reject(request.error); });
  }

  async function appendSavedAudio(container, cardId) {
    try {
      const blob = await getRecording(cardId);
      if (!blob || !container.isConnected) return;
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.className = "saved-audio";
      audio.src = URL.createObjectURL(blob);
      const label = document.createElement("p");
      label.className = "saved-audio-label";
      label.textContent = "あなたの録音";
      container.append(label, audio);
    } catch (_) { /* 録音再生は補助機能のため、失敗しても練習を続けられます。 */ }
  }

  async function openRecorder(cardId) {
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) return showToast("このブラウザでは録音が使えません");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      recordingStream = stream;
      mediaRecorder = new MediaRecorder(stream);
      recordingChunks = [];
      recordingStartedAt = Date.now();
      document.getElementById("recording-modal").hidden = false;
      document.getElementById("recording-status").textContent = "話し終わったら「録音を終了」を押してください";
      document.getElementById("recording-timer").textContent = "00:00";
      recordingTimer = window.setInterval(() => {
        const seconds = Math.floor((Date.now() - recordingStartedAt) / 1000);
        document.getElementById("recording-timer").textContent = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
      }, 250);
      mediaRecorder.ondataavailable = (event) => { if (event.data.size) recordingChunks.push(event.data); };
      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach((track) => track.stop());
        window.clearInterval(recordingTimer);
        const blob = new Blob(recordingChunks, { type: mediaRecorder.mimeType || "audio/webm" });
        await saveRecording(cardId, blob);
        document.getElementById("recording-modal").hidden = true;
        showToast("録音を保存しました");
        if (currentScreen === "practice-screen") renderPracticeCard();
        if (currentScreen === "detail-screen") renderDetail(cardId);
      };
      mediaRecorder.start();
    } catch (error) {
      showToast(error.name === "NotAllowedError" ? "マイクの使用を許可してください" : "録音を開始できませんでした");
    }
  }

  function stopRecorder(cancel = false) {
    if (!mediaRecorder) return;
    if (cancel) { mediaRecorder.onstop = () => {}; mediaRecorder.stop(); recordingStream?.getTracks().forEach((track) => track.stop()); recordingStream = null; mediaRecorder = null; document.getElementById("recording-modal").hidden = true; window.clearInterval(recordingTimer); return; }
    mediaRecorder.stop();
    mediaRecorder = null;
  }

  function exportCards() {
    const data = JSON.stringify(getCustomCards(), null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `aws-interview-coach-cards-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(link.href);
    showToast("追加カードを書き出しました");
  }

  function importCards(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const cards = JSON.parse(reader.result);
        if (!Array.isArray(cards) || cards.some((card) => !card.id || !card.title || !card.question)) throw new Error("invalid");
        const defaults = new Set(window.DEFAULT_CARDS.map((card) => card.id));
        localStorage.setItem(CUSTOM_KEY, JSON.stringify(cards.filter((card) => !defaults.has(card.id))));
        renderStats();
        renderLibrary(currentFilter);
        showToast(`${cards.length}件のカードを読み込みました`);
      } catch (_) { showToast("JSONの形式を確認してください"); }
      event.target.value = "";
    };
    reader.readAsText(file);
  }

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-go]");
    if (!target) return;
    event.preventDefault();
    navigate(target.dataset.go, { filter: target.dataset.filter || undefined, mode: target.dataset.mode || undefined });
  });
  document.getElementById("filter-row").addEventListener("click", (event) => { const chip = event.target.closest("[data-filter]"); if (chip) renderLibrary(chip.dataset.filter); });
  document.getElementById("skip-button").addEventListener("click", nextPracticeCard);
  document.getElementById("start-answer-button").addEventListener("click", () => openRecorder(practiceCards[practiceIndex]?.id));
  document.getElementById("editor-form").addEventListener("submit", saveFormCard);
  document.getElementById("delete-card-button").addEventListener("click", deleteSelectedCard);
  document.getElementById("export-button").addEventListener("click", exportCards);
  document.getElementById("import-input").addEventListener("change", importCards);
  document.getElementById("cancel-recording").addEventListener("click", () => stopRecorder(true));
  document.getElementById("stop-recording").addEventListener("click", () => stopRecorder(false));
  document.getElementById("reset-progress-button").addEventListener("click", () => { if (window.confirm("練習履歴をリセットしますか？")) { localStorage.removeItem(PROGRESS_KEY); renderStats(); showToast("練習履歴をリセットしました"); } });
  document.getElementById("voice-select")?.addEventListener("change", (event) => { speechSettings.voiceName = event.target.value; saveSpeechSettings(); showToast("英語音声を設定しました"); });
  document.getElementById("japanese-voice-select")?.addEventListener("change", (event) => { speechSettings.japaneseVoiceName = event.target.value; saveSpeechSettings(); showToast("女性の日本語音声を設定しました"); });
  document.getElementById("speech-rate")?.addEventListener("change", (event) => { stopSpeech(); speechSettings.rate = Number(event.target.value); saveSpeechSettings(); showToast("再生速度を設定しました"); });
  document.getElementById("font-size")?.addEventListener("change", (event) => { applyFontSize(event.target.value); localStorage.setItem(FONT_SIZE_KEY, event.target.value); showToast("文字サイズを変更しました"); });
  window.addEventListener("beforeinstallprompt", (event) => { event.preventDefault(); installPrompt = event; document.getElementById("install-button").hidden = false; });
  document.getElementById("install-button").addEventListener("click", async () => { if (!installPrompt) return; installPrompt.prompt(); await installPrompt.userChoice; installPrompt = null; document.getElementById("install-button").hidden = true; });
  applyFontSize(readFontSize());
  if ("serviceWorker" in navigator && location.protocol !== "file:") navigator.serviceWorker.register("sw.js?v=20").catch(() => {});
  if ("speechSynthesis" in window) { window.speechSynthesis.addEventListener("voiceschanged", refreshVoiceOptions); refreshVoiceOptions(); }
  renderStats();
  renderLibrary();
})();
