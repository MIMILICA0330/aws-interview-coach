/* 公開ページへの簡易な合言葉ゲート。静的サイトのため、本格的な認証ではありません。 */
(() => {
  const accessKey = "interview-coach-access-v1";
  const accessCodeHash = "2d9d2cfd3e9cc2f12f1a881d810e745a3655fda825b9cef1b77c21bcdccadbf5";

  async function hash(value) {
    const bytes = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  function unlock() {
    document.body.classList.remove("access-pending");
    document.getElementById("access-gate")?.setAttribute("hidden", "");
  }

  if (sessionStorage.getItem(accessKey) === "granted") {
    unlock();
    return;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("access-form");
    const input = document.getElementById("access-code");
    const error = document.getElementById("access-error");
    form?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submittedHash = await hash(input.value);
      if (submittedHash !== accessCodeHash) {
        error.hidden = false;
        input.select();
        return;
      }
      sessionStorage.setItem(accessKey, "granted");
      unlock();
    });
    input?.focus();
  });
})();
