import "../../styles/majors-footer.css";
import footerLogo from "../../assets/images/footer-logo.png";

function MajorsFooter() {
  return (
    <footer className="majors-footer">
      <div className="majors-footer-container">
        {/* LEFT */}
        <div className="majors-footer-left">
          <img
            src={footerLogo}
            alt="شعار حركة الشبيبة الطلابية"
            className="majors-footer-logo-image"
          />

          <span className="majors-footer-organization">
            حركة الشبيبة الطلابية
          </span>
        </div>

        {/* CENTER */}
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

        {/* RIGHT */}
        <div className="majors-footer-developer">
          <span className="majors-footer-developer-label">DESIGNED & DEVELOPED BY </span>

          <strong>ماجد حنيني</strong>
        </div>
      </div>

      <div className="majors-footer-bottom">
        <span>© 2026–2027 IT & AI Freshman Hub</span>
      </div>
    </footer>
  );
}

export default MajorsFooter;
