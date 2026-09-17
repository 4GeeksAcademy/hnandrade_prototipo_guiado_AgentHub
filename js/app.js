(function () {
  const THEME_KEY = "agenthub-theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    const isDark = theme === "dark";
    root.classList.toggle("dark", isDark);

    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Activar modo claro" : "Activar modo oscuro");
    themeToggle.querySelector("[data-theme-icon='sun']")?.classList.toggle("hidden", !isDark);
    themeToggle.querySelector("[data-theme-icon='moon']")?.classList.toggle("hidden", isDark);
  }

  function setActiveNavigationLink() {
    const currentFile = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("[data-nav-link]").forEach((link) => {
      const isActive = link.getAttribute("href") === currentFile;
      link.classList.toggle("bg-gray-200", isActive);
      link.classList.toggle("text-gray-950", isActive);
      link.classList.toggle("dark:bg-gray-700", isActive);
      link.classList.toggle("dark:text-white", isActive);
      link.classList.toggle("font-semibold", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  applyTheme(localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light");

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light");
    setActiveNavigationLink();

    document.getElementById("theme-toggle")?.addEventListener("click", () => {
      const nextTheme = root.classList.contains("dark") ? "light" : "dark";
      localStorage.setItem(THEME_KEY, nextTheme);
      applyTheme(nextTheme);
    });
  });

  document.addEventListener("click", (event) => {
    document.querySelectorAll(".action-dropdown").forEach((dropdown) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.add("hidden");
      }
    });

    const backdrop = event.target.closest(".modal-backdrop");
    if (backdrop && event.target === backdrop) {
      backdrop.classList.add("hidden");
    }
  });
})();