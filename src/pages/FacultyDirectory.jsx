import "../styles/faculty-directory.css";

const leadership = [
  {
    name: "د. منار قمحية",
    role: "عميد كلية تكنولوجيا المعلومات والذكاء الاصطناعي",
    email: "m.qamhieh@najah.edu",
    badge: "DEAN",
  },

  {
    name: "د. مهند الحاج حسين",
    role: "عميد كلية الهندسة",
    email: "haj_mj@najah.edu",
    badge: "DEAN",
  },

  {
    name: "د. معن شتيوي",
    role: "مساعد النائب الأكاديمي",
    email: "m.ishtaiwi@najah.edu",
    badge: "ACADEMIC",
  },

  {
    name: "د. ربى عوايص",
    role: "منسقة الكاب ورئيسة القسم",
    email: "ruba.awayes@najah.edu",
    badge: "COORDINATOR",
  },

  {
    name: "د. سهاد دراغمة",
    role: "رئيسة قسم علم الحاسوب والأمن السيبراني والشبكات",
    email: "suhad@najah.edu",
    badge: "HEAD",
  },

  {
    name: "د. ماهر أبو بكر",
    role: "رئيس قسم أنظمة المعلومات الإدارية",
    email: "abubaker@najah.edu",
    badge: "HEAD",
  },

  {
    name: "د. يحيى جعافرة",
    role: "رئيس قسم الرياضيات",
    email: "yjaafra@najah.edu",
    badge: "HEAD",
  },

  {
    name: "د. إياد سعد الدين",
    role: "رئيس قسم الفيزياء",
    email: "iyads@najah.edu",
    badge: "HEAD",
  },
];

const labStaff = [
  {
    name: "أ. محمد عدس",
    role: "مشرف المختبرات",
    email: "m.adas@najah.edu",
  },

  {
    name: "أ. محمد سوالمة",
    role: "طاقم المختبرات",
    email: "mohammad_s@najah.edu",
  },

  {
    name: "أ. إبراهيم عمرية",
    role: "طاقم المختبرات",
    email: "iamryeh@najah.edu",
  },

  {
    name: "أ. فاطمة البرق",
    role: "طاقم المختبرات",
    email: "fbarq@najah.edu",
  },

  {
    name: "أ. دعاء عيساوي",
    role: "طاقم المختبرات",
    email: "duaa.eisawi@najah.edu",
  },

  {
    name: "أ. منى العبد",
    role: "طاقم المختبرات",
    email: "munaab@najah.edu",
  },
];

function FacultyDirectory({ navigate }) {
  const copyEmail = async (email) => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textArea = document.createElement("textarea");

      textArea.value = email;

      document.body.appendChild(textArea);

      textArea.select();

      document.execCommand("copy");

      document.body.removeChild(textArea);
    }
  };

  const openOfficialWebsite = () => {
    window.open(
      "https://it.najah.edu/ar/home-%d8%a7%d9%84%d8%b9%d8%b1%d8%a8%d9%8a%d8%a9/",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const renderPerson = (person, index) => {
    const initials = person.name
      .replace("د.", "")
      .replace("أ.", "")
      .trim()
      .split(" ")
      .slice(0, 2)
      .map((word) => word.charAt(0))
      .join("");

    return (
      <article className="faculty-card" key={`${person.email}-${index}`}>
        <div className="faculty-card-top">
          <div className="faculty-avatar">{initials}</div>

          {person.badge && (
            <span className="faculty-badge">{person.badge}</span>
          )}
        </div>

        <div className="faculty-info">
          <h3>{person.name}</h3>

          <p className="faculty-role">{person.role}</p>

          <a className="faculty-email" href={`mailto:${person.email}`}>
            {person.email}
          </a>
        </div>

        <div className="faculty-actions">
          <button
            type="button"
            className="faculty-action-button faculty-copy-button"
            onClick={() => copyEmail(person.email)}
          >
            <span>نسخ الإيميل</span>

            <span>⧉</span>
          </button>

          <a
            className="faculty-action-button faculty-mail-button"
            href={`mailto:${person.email}`}
          >
            <span>إرسال بريد</span>

            <span>↗</span>
          </a>
        </div>
      </article>
    );
  };

  return (
    <main className="faculty-page">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="faculty-background" aria-hidden="true">
        <div className="faculty-grid-bg"></div>

        <div className="faculty-glow faculty-glow-one"></div>

        <div className="faculty-glow faculty-glow-two"></div>

        <span className="faculty-code faculty-code-one">@</span>

        <span className="faculty-code faculty-code-two">{"{ }"}</span>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="faculty-section">
        <div className="faculty-container">
          {/* BACK BUTTON */}

          <button
            type="button"
            className="faculty-back-button"
            onClick={() => navigate("/")}
          >
            <span>→</span>

            <span>العودة إلى الرئيسية</span>
          </button>

          {/* =================================================
              HEADING
          ================================================= */}

          <div className="faculty-heading">
            <span className="faculty-kicker">FACULTY DIRECTORY</span>

            <h1>دليل الكلية</h1>

            <p>
              وصول سريع إلى أهم جهات الاتصال في كلية تكنولوجيا المعلومات والذكاء
              الاصطناعي.
            </p>
          </div>

          {/* =================================================
              OFFICIAL WEBSITE
          ================================================= */}

          <div className="faculty-official-banner">
            <div className="faculty-official-icon">IT</div>

            <div className="faculty-official-content">
              <span className="faculty-official-label">OFFICIAL SOURCE</span>

              <h2>الموقع الرسمي للكلية</h2>

              <p>
                للحصول على معلومات رسمية ومحدثة عن الكلية والبرامج الأكاديمية
                والهيئة التدريسية، يمكنك زيارة الموقع الرسمي للكلية.
              </p>
            </div>

            <button
              type="button"
              className="faculty-official-button"
              onClick={openOfficialWebsite}
            >
              <span>فتح الموقع الرسمي</span>

              <span>↗</span>
            </button>
          </div>

          {/* =================================================
              LEADERSHIP
          ================================================= */}

          <div className="faculty-group-heading">
            <div>
              <span className="faculty-section-number">01</span>

              <h2>إدارة الكلية ورؤساء الأقسام</h2>
            </div>

            <p>جهات الاتصال الأكاديمية والإدارية الأكثر أهمية للطالب.</p>
          </div>

          <div className="faculty-grid">{leadership.map(renderPerson)}</div>

          {/* =================================================
              LAB STAFF
          ================================================= */}

          <div className="faculty-group-heading faculty-labs-heading">
            <div>
              <span className="faculty-section-number">02</span>

              <h2>مشرفو وأساتذة المختبرات</h2>
            </div>

            <p>للتواصل بخصوص المختبرات والجوانب العملية.</p>
          </div>

          <div className="faculty-grid">{labStaff.map(renderPerson)}</div>
        </div>
      </section>
    </main>
  );
}

export default FacultyDirectory;
