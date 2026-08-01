(function () {
  // Your Base44 app URL
  const APP_URL = "https://snobbish-print-quote-flow.base44.app";

  // Initialize the viewer embed
  function initViewer() {
    let container = document.getElementById("mm3d-viewer");

    // If Squarespace didn't include the div, create it automatically
    if (!container) {
      container = document.createElement("div");
      container.id = "mm3d-viewer";
      document.body.appendChild(container);
    }

    // Create the iframe that loads your Base44 app
    const iframe = document.createElement("iframe");
    iframe.src = APP_URL;
    iframe.style.width = "100%";
    iframe.style.height = "800px";
    iframe.style.border = "none";
    iframe.allow = "fullscreen";

    container.appendChild(iframe);

    // Optional: listen for messages from your Base44 app
    window.addEventListener("message", (event) => {
      if (event.origin !== APP_URL) return;

      // Example: receiving a quote from Base44
      if (event.data.type === "quote") {
        console.log("Received quote:", event.data.quote);
      }
    });
  }

  // Run when the page is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initViewer);
  } else {
    initViewer();
  }
})();
