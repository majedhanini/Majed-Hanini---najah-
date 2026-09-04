import { useEffect, useState } from "react";

import "../../styles/navbar.css";

function Navbar({ navigate, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pendingSection, setPendingSection] = useState(null);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("itai-theme") || "dark";
  });

  /* THEME */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("itai-theme", theme);
  }, [theme]);

  /* CLOSE MOBILE MENU AFTER PAGE CHANGE */
  useEffect(() => {
    setMenuOpen(false);
  }, [currentPage]);

  /* SCROLL TO HOME SECTION AFTER HOME IS RENDERED */
  useEffect(() => {
    if (currentPage !== "/" || !pendingSection) {
      return;
    }

    let frameId;

    const scrollToSection = () => {
      const section = document.getElementById(pendingSection);

      if (!section) {
        frameId = requestAnimationFrame(scrollToSection);
        return;
      }

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setPendingSection(null);
    };

    frameId = requestAnimationFrame(scrollToSection);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [currentPage, pendingSection]);

  const handleNavigate = (path) => {
    setMenuOpen(false);
    setPendingSection(null);
    navigate(path);
  };

  const scrollToHomeSection = (sectionId) => {
    setMenuOpen(false);

    /* IF WE ARE ALREADY ON HOME */
    if (currentPage === "/") {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    /* GO HOME FIRST, THEN SCROLL */
    setPendingSection(sectionId);
    navigate("/");
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <header className="site-navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <button
          type="button"
          className="navbar-logo"
          onClick={() => handleNavigate("/")}
          aria-label="العودة إلى الرئيسية"
        >
          <span className="navbar-logo-main">IT & AI</span>

          <span className="navbar-logo-divider">|</span>

          <span className="navbar-logo-sub">Freshman Hub</span>
        </button>

        {/* NAVIGATION */}
        <nav
          className={`navbar-links ${menuOpen ? "open" : ""}`}
          aria-label="القائمة الرئيسية"
        >
          {/* HOME */}
          <button
            type="button"
            className={`navbar-link ${currentPage === "/" ? "active" : ""}`}
            onClick={() => handleNavigate("/")}
          >
            الرئيسية
          </button>

          {/* MAJORS */}
          <button
            type="button"
            className={`navbar-link ${
              currentPage?.startsWith("/majors") ? "active" : ""
            }`}
            onClick={() => handleNavigate("/majors")}
          >
            التخصصات
          </button>

          {/* REQUIRED UNIVERSITY COURSES */}
          <button
            type="button"
            className="navbar-link"
            onClick={() => scrollToHomeSection("required-courses")}
          >
            مساقات اجباري الجامعة
          </button>

          {/* FACULTY */}
          <button
            type="button"
            className={`navbar-link ${
              currentPage === "/faculty" ? "active" : ""
            }`}
            onClick={() => handleNavigate("/faculty")}
          >
            دليل الكلية
          </button>

          {/* GPA */}
          <button
            type="button"
            className={`navbar-link ${
              currentPage === "/gpa-calculator" ? "active" : ""
            }`}
            onClick={() => handleNavigate("/gpa-calculator")}
          >
            حاسبة المعدل
          </button>

          {/* ROOMS */}
          <button
            type="button"
            className={`navbar-link ${
              currentPage === "/rooms-guide" ? "active" : ""
            }`}
            onClick={() => handleNavigate("/rooms-guide")}
          >
            دليل القاعات
          </button>

          {/* STUDENT GUIDE */}
          <button
            type="button"
            className={`navbar-link ${
              currentPage === "/student-guide" ? "active" : ""
            }`}
            onClick={() => handleNavigate("/student-guide")}
          >
            دليل الطالب
          </button>
        </nav>

        {/* RIGHT SIDE */}
        <div className="navbar-actions">
          {/* THEME */}
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

          <span className="navbar-year">2026 — 2027</span>

          {/* MOBILE MENU */}
          <button
            type="button"
            className={`navbar-menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
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
