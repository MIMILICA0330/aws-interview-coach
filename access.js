/* 公開ページへの簡易な合言葉ゲート。静的サイトのため、本格的な認証ではありません。 */
(() => {
  const accessKey = "interview-coach-access-v1";
  // iPhoneのPWAでも確実に動作するよう、複雑な暗号化処理は使いません。
  // この画面は本格認証ではなく、誤って開かないための簡易ゲートです。
  const accessCode = "practice-2026";

  function unlock() {
    document.body.classList.remove("access-pending");
    document.getElementById("access-gate")?.setAttribute("hidden", "");
  }

  function bindAccessForm() {
    if (sessionStorage.getItem(accessKey) === "granted") {
      unlock();
      return;
    }
    const form = document.getElementById("access-form");
    const input = document.getElementById("access-code");
    const error = document.getElementById("access-error");
    form?.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (input.value !== accessCode) {
        error.hidden = false;
        input.select();
        return;
      }
      sessionStorage.setItem(accessKey, "granted");
      unlock();
    });
    input?.focus();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bindAccessForm, { once: true });
  else bindAccessForm();
})();
