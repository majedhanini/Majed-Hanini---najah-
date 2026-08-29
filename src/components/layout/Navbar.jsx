import { useState } from "react";

import "../../styles/navbar.css";

function Navbar({ navigate, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const goHome = () => {
    setMenuOpen(false);

    navigate("/");
  };

  const goMajors = () => {
    setMenuOpen(false);

    navigate("/majors");
  };

  const goAbout = () => {
    setMenuOpen(false);

    if (currentPage !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById("about-college")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);

      return;
    }

    document.getElementById("about-college")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="site-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <button
          type="button"
          className="navbar-logo navbar-logo-button"
          onClick={goHome}
        >
          <span className="navbar-logo-main">IT & AI</span>

          <span className="navbar-logo-line">|</span>

          <span className="navbar-logo-text">Freshman Hub</span>
        </button>

        {/* Navigation */}
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
            className={currentPage === "/majors" ? "active" : ""}
            onClick={goMajors}
          >
            التخصصات
          </button>

          <button type="button" onClick={goAbout}>
            عن الكلية
          </button>
        </nav>

        <div className="navbar-actions">
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
