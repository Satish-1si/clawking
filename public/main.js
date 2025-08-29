// main.js
import { loadConfig } from "./config.js";

document.addEventListener("DOMContentLoaded", async () => {
  const storedResult = localStorage.getItem("gameResult");
  const isWin = storedResult ? JSON.parse(storedResult) : false;

  if (isWin) {
    const config = await loadConfig();

    if (config) {
      const rewardTag = document.getElementById("rewardTag");
      if (rewardTag) {
        rewardTag.textContent = `🎉 You won ${config.reward} ${config.currency}!`;
      }
    }
  }
});
