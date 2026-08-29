import "../styles/semester-one.css";

const majorsCourses = {
  "cs-job-market": {
    majorName: "علم الحاسوب في سوق العمل",

    courses: [
      {
        id: "programming-principles-1",
        name: "مبادئ برمجة 1",
        englishName: "Programming Principles 1",
        available: true,
      },
      {
        id: "discrete-mathematics",
        name: "الرياضيات المنفصلة",
        englishName: "Discrete Mathematics",
        available: true,
      },
      {
        id: "calculus-1",
        name: "تفاضل وتكامل 1",
        englishName: "Calculus 1",
        available: true,
      },
      {
        id: "physics-for-it",
        name: "فيزياء لتكنولوجيا المعلومات",
        englishName: "Physics for Information Technology",
        available: true,
      },
    ],
  },

  "computer-science": {
    majorName: "علم الحاسوب",

    courses: [
      {
        id: "programming-principles-1",
        name: "مبادئ برمجة 1",
        englishName: "Programming Principles 1",
        available: true,
      },
      {
        id: "calculus-1",
        name: "تفاضل وتكامل 1",
        englishName: "Calculus 1",
        available: true,
      },
      {
        id: "physics-1",
        name: "فيزياء 1",
        englishName: "Physics 1",
        available: true,
      },
      {
        id: "course-4",
        name: "Course 4",
        englishName: "COURSE 04",
        available: false,
      },
      {
        id: "course-5",
        name: "Course 5",
        englishName: "COURSE 05",
        available: false,
      },
    ],
  },

  cybersecurity: {
    majorName: "الأمن السيبراني",

    courses: [
      {
        id: "programming-principles-1",
        name: "مبادئ برمجة 1",
        englishName: "Programming Principles 1",
        available: true,
      },
      {
        id: "mathematics-for-it",
        name: "رياضيات لتكنولوجيا المعلومات",
        englishName: "Mathematics for Information Technology",
        available: true,
      },
      {
        id: "physics-for-it",
        name: "فيزياء لتكنولوجيا المعلومات",
        englishName: "Physics for Information Technology",
        available: true,
      },
      {
        id: "course-4",
        name: "Course 4",
        englishName: "COURSE 04",
        available: false,
      },
      {
        id: "course-5",
        name: "Course 5",
        englishName: "COURSE 05",
        available: false,
      },
    ],
  },

  mis: {
    majorName: "أنظمة المعلومات الإدارية",

    courses: [
      {
        id: "management-principles-1",
        name: "مبادئ إدارة 1",
        englishName: "Management Principles 1",
        available: true,
      },
      {
        id: "business-programming-1",
        name: "برمجة للأعمال 1 مع مختبرها",
        englishName: "Business Programming 1 + Lab",
        available: true,
      },
      {
        id: "introduction-to-it",
        name: "مقدمة في تكنولوجيا المعلومات",
        englishName: "Introduction to Information Technology",
        available: true,
      },
      {
        id: "course-4",
        name: "Course 4",
        englishName: "COURSE 04",
        available: false,
      },
      {
        id: "course-5",
        name: "Course 5",
        englishName: "COURSE 05",
        available: false,
      },
    ],
  },

  /* =====================================================
     AI & DATA SCIENCE
     نفس مساقات علم الحاسوب في سوق العمل حاليًا
  ===================================================== */

  "ai-data-science": {
    majorName: "الذكاء الاصطناعي وعلم البيانات",
    isNewMajor: true,

    courses: [
      {
        id: "programming-principles-1",
        name: "مبادئ برمجة 1",
        englishName: "Programming Principles 1",
        available: true,
      },
      {
        id: "discrete-mathematics",
        name: "الرياضيات المنفصلة",
        englishName: "Discrete Mathematics",
        available: true,
      },
      {
        id: "calculus-1",
        name: "تفاضل وتكامل 1",
        englishName: "Calculus 1",
        available: true,
      },
      {
        id: "physics-for-it",
        name: "فيزياء لتكنولوجيا المعلومات",
        englishName: "Physics for Information Technology",
        available: true,
      },
    ],
  },
};

function SemesterOne({ navigate, majorId }) {
  const major = majorsCourses[majorId];

  if (!major) {
    return (
      <main className="semester-one-page">
        <section className="semester-one-section">
          <div className="semester-one-container">
            <div className="semester-error">
              <h1>التخصص غير موجود</h1>

              <button
                type="button"
                className="semester-back-button"
                onClick={() => navigate("/majors")}
              >
                العودة إلى التخصصات
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const openCourse = (course) => {
    if (!course.available) return;

    navigate(`/majors/${majorId}/semester-1/${course.id}`);
  };

  return (
    <main className="semester-one-page">
      {/* BACKGROUND */}

      <div className="semester-one-background" aria-hidden="true">
        <div className="semester-one-grid-bg"></div>

        <div className="semester-one-glow semester-one-glow-one"></div>

        <div className="semester-one-glow semester-one-glow-two"></div>

        <span className="semester-one-code semester-one-code-one">{"{ }"}</span>

        <span className="semester-one-code semester-one-code-two">
          &lt;/&gt;
        </span>
      </div>

      <section className="semester-one-section">
        <div className="semester-one-container">
          {/* BACK */}

          <button
            type="button"
            className="semester-back-button"
            onClick={() => navigate(`/majors/${majorId}`)}
          >
            <span>→</span>
            <span>العودة إلى التخصص</span>
          </button>

          {/* HEADING */}

          <div className="semester-one-heading">
            <span className="semester-one-kicker">FIRST SEMESTER</span>

            <span className="semester-one-major-name">{major.majorName}</span>

            <h1>الفصل الأول</h1>

            <p>اختر المساق الذي تريد الوصول إلى مواده ومصادره الدراسية.</p>
          </div>

          {/* NEW MAJOR BANNER */}

          {major.isNewMajor && (
            <div className="ai-new-major-banner">
              <div className="ai-new-major-icon">AI</div>

              <div className="ai-new-major-content">
                <div className="ai-new-major-top">
                  <span className="ai-new-major-badge">NEW MAJOR</span>

                  <span className="ai-new-major-dot"></span>

                  <span className="ai-new-major-year">2026 — 2027</span>
                </div>

                <h2>تخصص جديد في الكلية</h2>

                <p>
                  تخصص الذكاء الاصطناعي وعلم البيانات من التخصصات الجديدة في
                  الكلية. تم توفير المساقات والمصادر المتاحة حاليًا، وسيتم تحديث
                  وإضافة أي مواد أو مصادر جديدة أولًا بأول.
                </p>
              </div>

              <div className="ai-new-major-decoration" aria-hidden="true">
                {"{ AI }"}
              </div>
            </div>
          )}

          {/* COURSES */}

          <div
            className={`courses-grid ${
              major.isNewMajor ? "courses-grid-after-banner" : ""
            }`}
          >
            {major.courses.map((course, index) => (
              <article
                key={course.id}
                className={`course-card ${
                  !course.available ? "course-card-disabled" : ""
                }`}
              >
                <div className="course-card-glow"></div>

                <span className="course-card-number">
                  COURSE {String(index + 1).padStart(2, "0")}
                </span>

                <div className="course-card-content">
                  <span className="course-card-label">
                    {course.englishName}
                  </span>

                  <h2>{course.name}</h2>

                  <p>
                    {course.available
                      ? "اضغط للدخول إلى المساق والوصول إلى المواد والمصادر الدراسية."
                      : "لم يتم إضافة مساق في هذا المكان بعد."}
                  </p>
                </div>

                {course.available ? (
                  <button
                    type="button"
                    className="course-open-button"
                    onClick={() => openCourse(course)}
                  >
                    <span>فتح المساق</span>

                    <span className="course-open-arrow">←</span>
                  </button>
                ) : (
                  <div className="course-coming-soon">سيتوفر لاحقًا</div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default SemesterOne;
