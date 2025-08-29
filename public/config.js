// config.js
export async function loadConfig() {
  try {
    const response = await fetch("./config.json");
    return await response.json();
  } catch (e) {
    console.error("Failed to load config:", e);
    return { reward: 5, currency: "AED" }; // fallback
  }
}
