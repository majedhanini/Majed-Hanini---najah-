import "../../styles/majors-footer.css";
import footerLogo from "../../assets/images/shabiba-logo.png";

function MajorsFooter() {
  return (
    <footer className="majors-footer">
      <div className="majors-footer-container">
        {/* =====================================================
            LEFT - SHABIBA
        ===================================================== */}

        <div className="majors-footer-left">
          <img
            src={footerLogo}
            alt="شعار حركة الشبيبة الطلابية"
            className="majors-footer-logo-image"
          />

          <div className="majors-footer-left-info">
            <span className="majors-footer-organization">
              حركة الشبيبة الطلابية
            </span>

            <div className="majors-footer-social">
              {/* FACEBOOK PAGE */}
              <a
                href="https://www.facebook.com/share/1DksD9K1Qe/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="majors-footer-social-link"
                aria-label="صفحة حركة الشبيبة على فيسبوك"
                title="صفحة فيسبوك"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V11H8v3h2.3v8h3.2Z" />
                </svg>
              </a>

              {/* FACEBOOK GROUP */}
              <a
                href="https://www.facebook.com/share/g/1CPwpVLBqD/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="majors-footer-social-link"
                aria-label="مجموعة حركة الشبيبة على فيسبوك"
                title="جروب فيسبوك"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3Zm-8 0c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3Zm0 2c-2.3 0-7 1.2-7 3.5V19h14v-2.5C15 14.2 10.3 13 8 13Zm8 .2c-.3 0-.6 0-.9.1 1.2.8 1.9 1.9 1.9 3.2V19h6v-2.2c0-2.1-4-3.6-7-3.6Z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/shabiba.nnu?igsi=MWxkaWU0dTljZHZtYQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="majors-footer-social-link"
                aria-label="حركة الشبيبة على إنستغرام"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.8A4.2 4.2 0 1 1 7.8 12 4.2 4.2 0 0 1 12 7.8Zm0 2A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8ZM17.5 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            CENTER
        ===================================================== */}

        <div className="majors-footer-center">
          <div className="majors-footer-brand">
            <span className="majors-footer-logo-text">IT & AI</span>

            <span className="majors-footer-divider">|</span>

            <span className="majors-footer-name">Freshman Hub</span>
          </div>

          <p className="majors-footer-text">
            دليلك الأكاديمي لبداية جامعية أوضح.
          </p>
        </div>

        {/* =====================================================
            RIGHT - DEVELOPER
        ===================================================== */}

        <div className="majors-footer-developer">
          <span className="majors-footer-developer-label">
            DESIGNED & DEVELOPED BY
          </span>

          <strong className="majors-footer-developer-name">Majed Hanini</strong>
        </div>
      </div>

      {/* =====================================================
          BOTTOM
      ===================================================== */}

      <div className="majors-footer-bottom">
        <span>© 2026–2027 IT & AI Freshman Hub</span>
      </div>
    </footer>
  );
}

export default MajorsFooter;
