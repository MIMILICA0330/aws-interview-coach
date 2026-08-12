(function () {
  "use strict";

  const CUSTOM_KEY = "aws-interview-coach-custom-cards";
  const PROGRESS_KEY = "aws-interview-coach-progress";
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

  const getCustomCards = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(CUSTOM_KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  };

  const getCards = () => [...window.DEFAULT_CARDS, ...getCustomCards()];
  const getCard = (id) => getCards().find((card) => card.id === id);
  const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2400);
  };

  function navigate(screenId, options = {}) {
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
    const cards = getCards().filter((card) => filter === "All" || card.category === filter || (filter === "STAR" && card.category === "STAR"));
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

  function speak(text) {
    if (!("speechSynthesis" in window)) return showToast("このブラウザは音声再生に対応していません");
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.88;
    window.speechSynthesis.speak(utterance);
  }

  function renderPracticeCard() {
    const card = practiceCards[practiceIndex];
    if (!card) return;
    document.getElementById("session-progress").textContent = `${practiceIndex + 1} / ${practiceCards.length}`;
    document.getElementById("progress-fill").style.width = `${((practiceIndex + 1) / practiceCards.length) * 100}%`;
    document.getElementById("practice-card").innerHTML = `<div class="question-label">${escapeHtml(card.category)} · ${escapeHtml(card.lp || "PRACTICE")}</div><h3 class="practice-question">${escapeHtml(card.question)}</h3><button class="audio-button" id="speak-question"><span>◉</span> 質問を英語で聞く</button>${card.answer ? `<div class="answer-box"><h3>YOUR KEY POINTS</h3><p>${escapeHtml(card.answer)}</p></div>` : `<div class="answer-box"><h3>STARで話すメモ</h3>${starMarkup(card) || "<p>回答を自分の言葉で話してみましょう。</p>"}</div>`}`;
    document.getElementById("speak-question").addEventListener("click", () => speak(card.question));
    appendSavedAudio(document.getElementById("practice-card"), card.id);
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
    const card = getCard(id);
    if (!card) return;
    document.getElementById("detail-card").innerHTML = `<div class="card-meta"><span class="tag">${escapeHtml(card.category)}</span><span class="tag lp">${escapeHtml(card.lp || "Personal")}</span></div><h3>${escapeHtml(card.title)}</h3><div class="detail-section"><div class="section-label">QUESTION</div><p class="practice-question" style="font-size:19px;margin:0;color:var(--ink)">${escapeHtml(card.question)}</p><button class="audio-button" id="speak-detail" style="margin-top:14px"><span>◉</span> 質問を英語で聞く</button></div>${card.answer ? `<div class="detail-section"><div class="section-label">ENGLISH ANSWER</div><p>${escapeHtml(card.answer)}</p></div>` : ""}${starMarkup(card) ? `<div class="detail-section"><div class="section-label">STAR NOTES</div>${starMarkup(card)}</div>` : ""}${card.followUps?.length ? `<div class="detail-section"><div class="section-label">FOLLOW-UP QUESTIONS</div><ul class="followup-list">${card.followUps.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}</ul></div>` : ""}<button class="primary-button" id="detail-record-button"><span class="button-icon">●</span>このカードで録音する</button>`;
    document.getElementById("speak-detail").addEventListener("click", () => speak(card.question));
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
    const card = { id: `custom-${Date.now()}`, title: data.get("title").trim(), question: data.get("question").trim(), category: data.get("category"), lp: data.get("lp").trim() || "Personal", situation: data.get("situation").trim(), task: data.get("task").trim(), action: data.get("action").trim(), result: data.get("result").trim(), answer: data.get("answer").trim(), followUps: data.get("followUps").split("\n").map((line) => line.trim()).filter(Boolean) };
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
  window.addEventListener("beforeinstallprompt", (event) => { event.preventDefault(); installPrompt = event; document.getElementById("install-button").hidden = false; });
  document.getElementById("install-button").addEventListener("click", async () => { if (!installPrompt) return; installPrompt.prompt(); await installPrompt.userChoice; installPrompt = null; document.getElementById("install-button").hidden = true; });
  if ("serviceWorker" in navigator && location.protocol !== "file:") navigator.serviceWorker.register("sw.js").catch(() => {});
  renderStats();
  renderLibrary();
})();
