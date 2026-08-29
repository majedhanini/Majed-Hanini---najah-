import { useEffect, useState } from "react";

import "../../styles/navbar.css";

function Navbar({ navigate, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("itai-theme");

    const initialTheme = savedTheme === "light" ? "light" : "dark";

    setTheme(initialTheme);

    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("itai-theme", newTheme);
  };

  const goHome = () => {
    setMenuOpen(false);

    navigate("/");
  };

  const goMajors = () => {
    setMenuOpen(false);

    navigate("/majors");
  };

  const goFaculty = () => {
    setMenuOpen(false);

    navigate("/faculty");
  };

  const goAbout = () => {
    setMenuOpen(false);

    if (currentPage !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById("about-college")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);

      return;
    }

    document.getElementById("about-college")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="site-navbar">
      <div className="navbar-container">
        {/* LOGO */}

        <button
          type="button"
          className="navbar-logo navbar-logo-button"
          onClick={goHome}
        >
          <span className="navbar-logo-main">IT & AI</span>

          <span className="navbar-logo-line">|</span>

          <span className="navbar-logo-text">Freshman Hub</span>
        </button>

        {/* NAVIGATION */}

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <button
            type="button"
            className={currentPage === "/" ? "active" : ""}
            onClick={goHome}
          >
            الرئيسية
          </button>

          <button
            type="button"
            className={currentPage.startsWith("/majors") ? "active" : ""}
            onClick={goMajors}
          >
            التخصصات
          </button>

          <button
            type="button"
            className={currentPage === "/faculty" ? "active" : ""}
            onClick={goFaculty}
          >
            دليل الكلية
          </button>

          <button type="button" onClick={goAbout}>
            عن الكلية
          </button>
        </nav>

        {/* ACTIONS */}

        <div className="navbar-actions">
          {/* THEME BUTTON */}

          <button
            type="button"
            className="navbar-theme-button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"
            }
            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
          >
            <span className="theme-icon">{theme === "dark" ? "☀" : "☾"}</span>
          </button>

          <div className="navbar-year">2026 — 2027</div>

          <button
            type="button"
            className={`navbar-menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="فتح القائمة"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
