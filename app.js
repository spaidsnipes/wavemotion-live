// The Wavemotion app runs on Cloudflare; this GitHub Pages site is its public front door.
window.WAVEMOTION_APP = "https://wavemotion.dhill5711.workers.dev";
document.querySelectorAll("[data-app]").forEach((a) => { a.href = window.WAVEMOTION_APP + (a.getAttribute("data-app") || "/"); });
