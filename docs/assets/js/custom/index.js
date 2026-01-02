function main() {
  redirectToNewDocsSite();
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function redirectToNewDocsSite() {
  const currentHost = window.location.host;
  const newDocsHost = "qccs.pages.dev";

  if (currentHost === newDocsHost) return;

  const { protocol, pathname, search, hash } = window.location;
  const newUrl = `${protocol}//${newDocsHost}${pathname}${search}${hash}`;

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
