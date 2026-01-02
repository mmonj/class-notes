function main() {
  redirectToNewDocsSite();
}

function getNewUrl(currentUrl, newHost) {
  const url = new URL(currentUrl);
  url.host = newHost;
  return url.toString();
}

// Return a cleaned pathname for redirecting to the projected URL.
// Accepts projectedUrl (string) and removeSegment (string) and returns the cleaned pathname (string).
function getCleanedPathname(projectedUrl, removeSegment) {
  const url = new URL(projectedUrl);

  const cleanedSegments = url.pathname
    .split("/")
    .filter(Boolean)
    .filter((segment) => segment !== removeSegment);

  url.pathname = "/" + cleanedSegments.join("/");

  return url.toString();
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function redirectToNewDocsSite() {
  const { host, href } = window.location;
  const newHost = "qccs.pages.dev";

  if (host === newHost) return;

  const newUrl = getNewUrl(getCleanedPathname(href, "class-notes"), newHost);
  console.log(`Redirecting to new docs site: ${newUrl}`);

  // If the path is /404.html then redirect immediately (no banner)
  if (document.getElementById("404---page-not-found")) {
    window.location.href = newUrl;
    return;
  }

  // Create a centered banner saying 'Redirecting...'
  const banner = document.createElement("div");
  banner.textContent = "New host available. Redirecting";
  Object.assign(banner.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0,0,0,0.85)",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "6px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    zIndex: 9999,
    fontFamily: "sans-serif",
    fontSize: "16px",
    textAlign: "center",
    whiteSpace: "nowrap",
  });
  document.documentElement.appendChild(banner);

  // Animate ellipses: '', '.', '..', '...'
  const ellipses = ["", ".", "..", "..."];
  let idx = 0;
  const interval = setInterval(() => {
    banner.textContent = `New host available. Redirecting${
      ellipses[idx % ellipses.length]
    }`;
    idx++;
  }, 400);

  // Wait 2 seconds before redirecting
  await sleep(2000);

  // Stop animation and navigate
  clearInterval(interval);
  banner.textContent = "New host available. Redirecting...";
  banner.remove();
  window.location.href = newUrl;
}

main();
