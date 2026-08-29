import "../styles/course-details.css";
import coursesData from "../data/courses.js";

const majorNames = {
  "cs-job-market": "علم الحاسوب في سوق العمل",
  "computer-science": "علم الحاسوب",
  cybersecurity: "الأمن السيبراني",
  mis: "أنظمة المعلومات الإدارية",
  "ai-data-science": "الذكاء الاصطناعي وعلم البيانات",
};

function CourseDetails({ navigate, majorId, courseId }) {
  const course = coursesData[majorId]?.[courseId];

  const majorName = majorNames[majorId];

  if (!course) {
    return (
      <main className="course-details-page">
        <div className="course-details-background">
          <div className="course-details-grid-bg"></div>

          <div className="course-details-glow course-details-glow-one"></div>

          <div className="course-details-glow course-details-glow-two"></div>
        </div>

        <section className="course-details-section">
          <div className="course-details-container">
            <div className="course-not-found">
              <h1>المساق غير موجود</h1>

              <button
                type="button"
                className="course-back-button"
                onClick={() => navigate(`/majors/${majorId}/semester-1`)}
              >
                العودة إلى المساقات
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const resources = [
    {
      id: "slides",

      number: "01",

      icon: "PDF",

      title: "الشرائح",

      english: "SLIDES",

      description: "شرائح المحاضرات والمواد الدراسية الخاصة بالمساق.",

      link: course.resources?.slides,
    },

    {
      id: "recordings",

      number: "02",

      icon: "▶",

      title: "تسجيلات المحاضرات",

      english: "LECTURE RECORDINGS",

      description: "تسجيلات وشروحات المحاضرات الخاصة بالمساق.",

      link: course.resources?.recordings,
    },

    {
      id: "summaries",

      number: "03",

      icon: "✦",

      title: "الملخصات",

      english: "SUMMARIES",

      description: "ملخصات مرتبة تساعدك على مراجعة محتوى المساق.",

      link: course.resources?.summaries,
    },

    {
      id: "exams",

      number: "04",

      icon: "EX",

      title: "امتحانات سابقة",

      english: "PREVIOUS EXAMS",

      description: "نماذج وامتحانات سابقة للمراجعة والتدريب.",

      link: course.resources?.exams,
    },
  ];

  const openResource = (link) => {
    if (!link) {
      return;
    }

    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="course-details-page">
      {/* BACKGROUND */}

      <div className="course-details-background" aria-hidden="true">
        <div className="course-details-grid-bg"></div>

        <div className="course-details-glow course-details-glow-one"></div>

        <div className="course-details-glow course-details-glow-two"></div>

        <span className="course-details-code">&lt;/&gt;</span>
      </div>

      <section className="course-details-section">
        <div className="course-details-container">
          {/* BACK BUTTON */}

          <button
            type="button"
            className="course-back-button"
            onClick={() => navigate(`/majors/${majorId}/semester-1`)}
          >
            <span>→</span>
            العودة إلى مساقات الفصل الأول
          </button>

          {/* HEADING */}

          <div className="course-details-heading">
            <span className="course-details-kicker">COURSE RESOURCES</span>

            <span className="course-details-major">{majorName}</span>

            <h1>{course.name}</h1>

            {course.englishName && (
              <span className="course-details-english-name">
                {course.englishName}
              </span>
            )}

            <p>
              كل ما تحتاجه للمساق في مكان واحد: الشرائح، التسجيلات، الملخصات
              والامتحانات السابقة.
            </p>
          </div>

          {/* RESOURCES */}

          <div className="course-resources-grid">
            {resources.map((resource) => {
              const available = Boolean(resource.link);

              return (
                <article
                  className={`course-resource-card ${
                    !available ? "course-resource-unavailable" : ""
                  }`}
                  key={resource.id}
                >
                  <div className="course-resource-top">
                    <div className="course-resource-icon">{resource.icon}</div>

                    <span className="course-resource-number">
                      {resource.number}
                    </span>
                  </div>

                  <span className="course-resource-english">
                    {resource.english}
                  </span>

                  <h2>{resource.title}</h2>

                  <p>{resource.description}</p>

                  {available ? (
                    <button
                      type="button"
                      className="course-resource-button"
                      onClick={() => openResource(resource.link)}
                    >
                      <span>استعرض المحتوى</span>

                      <span>←</span>
                    </button>
                  ) : (
                    <div className="course-resource-coming">
                      <span>سيتوفر قريبًا</span>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default CourseDetails;
