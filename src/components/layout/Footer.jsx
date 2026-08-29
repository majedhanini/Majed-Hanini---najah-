import "../../styles/footer.css";
import footerLogo from "../../assets/images/footer-logo.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-background" aria-hidden="true">
        <div className="footer-glow footer-glow-left"></div>
        <div className="footer-glow footer-glow-right"></div>
      </div>

      <div className="footer-shell">
        <div className="footer-main">
          {/* LEFT */}
          <div className="footer-shabiba">
            <div className="footer-logo-box">
              <img
                src={footerLogo}
                alt="شعار حركة الشبيبة الطلابية"
                className="footer-logo-image"
              />
            </div>

            <div className="footer-shabiba-text">
              <span className="footer-small-label">SHABIBA AL-NAJAH</span>

              <strong>حركة الشبيبة الطلابية</strong>
            </div>
          </div>

          {/* CENTER */}
          <div className="footer-center">
            <div className="footer-brand">
              <span className="footer-brand-main">IT & AI</span>

              <span className="footer-brand-divider">|</span>

              <span className="footer-brand-sub">Freshman Hub</span>
            </div>

            <p>
              دليلك الرقمي للطلاب الجدد في كلية تكنولوجيا المعلومات والذكاء
              الاصطناعي.
            </p>

            <span className="footer-year">Academic Year 2026 — 2027</span>
          </div>

          {/* RIGHT */}
          <div className="footer-developer">
            <span className="footer-developer-label">
              DESIGNED & DEVELOPED BY
            </span>

            <strong>ماجد حنيني</strong>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026–2027 IT & AI Freshman Hub</span>

          <span className="footer-bottom-dot">•</span>

          <span>Shabiba Al-Najah</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
