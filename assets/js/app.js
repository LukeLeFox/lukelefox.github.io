function setActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a => {
    const href = a.getAttribute("href");
    if ((path === "" && href === "index.html") || href === path) a.classList.add("active");
  });
}

function nowISO() {
  const d = new Date();
  return d.toISOString().replace("T"," ").slice(0,19) + "Z";
}

function renderUpdatedAt() {
  const el = document.querySelector("[data-updated-at]");
  if (el) el.textContent = nowISO();
}

setActiveNav();
renderUpdatedAt();
