import "../styles/home.css";
import heroImage from "../assets/images/hero-main.png";

function Home({ navigate }) {
  return (
    <main className="home-page">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="home-background" aria-hidden="true">
        <div className="home-grid"></div>

        <div className="home-glow glow-one"></div>
        <div className="home-glow glow-two"></div>

        <span className="background-code code-one">&lt;/&gt;</span>

        <span className="background-code code-two">AI</span>

        <span className="background-code code-three">{"{ }"}</span>
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="hero-section" id="home">
        <div className="hero-container">
          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="hero-content">
            <div className="hero-badge">An-Najah National University</div>

            <span className="hero-college">
              Faculty of Information Technology & Artificial Intelligence
            </span>

            <h1 className="hero-title">
              <span className="hero-title-ar">أهلاً بك في</span>

              <span className="hero-title-en">
                <span>IT & AI</span>

                <span>Freshman Hub</span>
              </span>
            </h1>

            <p className="hero-description">
              دليلك الرقمي كبداية لحياتك الجامعية في كلية تكنولوجيا المعلومات
              والذكاء الاصطناعي.
              <br />
              استكشف تخصصك، تعرّف على خطتك، ووصل إلى مساقاتك ومصادرك الدراسية
              بسهولة.
            </p>

            {/* =========================
                BUTTONS
            ========================== */}
            <div className="hero-actions">
              <button
                type="button"
                className="hero-button hero-button-primary"
                onClick={() => navigate("/majors")}
              >
                <span>استكشف التخصصات</span>

                <span className="button-arrow">←</span>
              </button>

              <a
                href="#about-college"
                className="hero-button hero-button-secondary"
              >
                تعرف على الكلية
              </a>
            </div>

            {/* =========================
                STATS
            ========================== */}
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>5</strong>

                <span>تخصصات</span>
              </div>

              <div className="hero-stat">
                <strong>2026</strong>

                <span>دفعة جديدة</span>
              </div>

              <div className="hero-stat">
                <strong>1st</strong>

                <span>Year Hub</span>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT VISUAL
          ========================== */}
          <div className="hero-visual">
            <div className="hero-orbit hero-orbit-one"></div>
            <div className="hero-orbit hero-orbit-two"></div>

            <div className="hero-image-glow"></div>

            <div className="hero-image-card">
              <img
                src={heroImage}
                alt="Faculty of Information Technology"
                className="hero-building-image"
              />

              <div className="hero-image-overlay"></div>

              <div className="hero-image-top-line"></div>

              <div className="hero-image-label">
                <div className="hero-image-label-main">
                  <small>An-Najah National University</small>

                  <span>IT & AI</span>
                </div>

                <span className="hero-image-label-sub">Freshman Hub</span>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="floating-tech floating-ai">AI</div>

            <div className="floating-tech floating-code">&lt;/&gt;</div>

            <div className="floating-tech floating-data">DATA</div>
          </div>
        </div>

        {/* =========================
            SCROLL
        ========================== */}
        <a
          href="#about-college"
          className="hero-scroll"
          aria-label="Scroll down"
        >
          <span>▼ </span>

          <div className="scroll-line">
            <div></div>
          </div>
        </a>
      </section>

      {/* =====================================================
          ABOUT COLLEGE
      ====================================================== */}
      <section className="about-college-section" id="about-college">
        <div className="about-college-container">
          <div className="about-college-heading">
            <div className="about-college-kicker">
              <span></span>
              ABOUT THE FACULTY
              <span></span>
            </div>

            <h2>نبذة عن الكلية</h2>

            <p>
              كلية تكنولوجيا المعلومات والذكاء الاصطناعي في جامعة النجاح الوطنية
              توفّر بيئة أكاديمية حديثة تجمع بين المعرفة النظرية، المهارات
              العملية، والتقنيات المتقدمة، وتهدف إلى إعداد طلبة قادرين على
              مواكبة متطلبات سوق العمل والتطور السريع في مجالات التكنولوجيا
              والذكاء الاصطناعي.
            </p>
          </div>

          {/* =========================
              ABOUT CARDS
          ========================== */}
          <div className="about-college-grid">
            <article className="about-college-card">
              <div className="about-card-top">
                <div className="about-card-icon">&lt;/&gt;</div>

                <span className="about-card-number">01</span>
              </div>

              <h3>تعليم تقني حديث</h3>

              <p>
                مساقات وبرامج أكاديمية تجمع بين الأساس النظري والتطبيق العملي،
                وتساعد الطالب على بناء قاعدة تقنية قوية منذ بداية مشواره
                الجامعي.
              </p>
            </article>

            <article className="about-college-card about-college-card-featured">
              <div className="about-card-top">
                <div className="about-card-icon">AI</div>

                <span className="about-card-number">02</span>
              </div>

              <h3>تخصصات متنوعة</h3>

              <p>
                مجموعة من التخصصات في مجالات تكنولوجيا المعلومات والذكاء
                الاصطناعي، تمنح الطالب خيارات أكاديمية ومهنية متعددة وفق
                اهتماماته وطموحاته.
              </p>
            </article>

            <article className="about-college-card">
              <div className="about-card-top">
                <div className="about-card-icon">↗</div>

                <span className="about-card-number">03</span>
              </div>

              <h3>مهارات وسوق العمل</h3>

              <p>
                اهتمام بالمشاريع والمهارات العملية والعمل الجماعي، لبناء خبرة
                تساعد الطالب على الاستعداد للمراحل الأكاديمية والمهنية القادمة.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
