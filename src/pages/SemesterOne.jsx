import "../styles/semester-one.css";

const semesterCourses = {
  "cs-job-market": ["Course 1", "Course 2", "Course 3", "Course 4", "Course 5"],

  "computer-science": [
    "Course 1",
    "Course 2",
    "Course 3",
    "Course 4",
    "Course 5",
  ],

  cybersecurity: ["Course 1", "Course 2", "Course 3", "Course 4", "Course 5"],

  mis: ["Course 1", "Course 2", "Course 3", "Course 4", "Course 5"],

  "ai-data-science": [
    "Course 1",
    "Course 2",
    "Course 3",
    "Course 4",
    "Course 5",
  ],
};

const majorNames = {
  "cs-job-market": "علم الحاسوب في سوق العمل",
  "computer-science": "علم الحاسوب",
  cybersecurity: "الأمن السيبراني",
  mis: "أنظمة المعلومات الإدارية",
  "ai-data-science": "الذكاء الاصطناعي وعلم البيانات",
};

function SemesterOne({ navigate, majorId }) {
  const courses = semesterCourses[majorId];
  const majorName = majorNames[majorId];

  if (!courses) {
    return (
      <main className="semester-one-page">
        <div className="semester-one-container">
          <div className="semester-error">
            <h1>المساقات غير متوفرة</h1>

            <button
              type="button"
              className="semester-back-button"
              onClick={() => navigate("/majors")}
            >
              العودة إلى التخصصات
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="semester-one-page">
      <div className="semester-one-background" aria-hidden="true">
        <div className="semester-one-grid-bg"></div>

        <div className="semester-one-glow semester-one-glow-one"></div>
        <div className="semester-one-glow semester-one-glow-two"></div>

        <span className="semester-one-code semester-one-code-one">
          &lt;/&gt;
        </span>

        <span className="semester-one-code semester-one-code-two">{"{ }"}</span>
      </div>

      <section className="semester-one-section">
        <div className="semester-one-container">
          <button
            type="button"
            className="semester-back-button"
            onClick={() => navigate(`/majors/${majorId}`)}
          >
            <span>→</span>
            العودة إلى التخصص
          </button>

          <div className="semester-one-heading">
            <span className="semester-one-kicker">FIRST SEMESTER</span>

            <span className="semester-one-major-name">{majorName}</span>

            <h1>مساقات الفصل الأول</h1>

            <p>
              اختر المساق للوصول إلى الشرائح، التسجيلات، الملخصات والامتحانات
              السابقة.
            </p>
          </div>

          <div className="courses-grid">
            {courses.map((course, index) => (
              <article className="course-card" key={course}>
                <div className="course-card-glow"></div>

                <div className="course-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="course-card-content">
                  <span className="course-card-label">COURSE</span>

                  <h2>{course}</h2>

                  <p>مصادر المساق والمحتوى الدراسي الخاص به.</p>
                </div>

                <button
                  type="button"
                  className="course-open-button"
                  onClick={() =>
                    navigate(
                      `/majors/${majorId}/semester-1/course-${index + 1}`,
                    )
                  }
                >
                  <span>فتح المساق</span>

                  <span className="course-open-arrow">←</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default SemesterOne;
