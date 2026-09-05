import { useState } from "react";

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

  const [openResourceId, setOpenResourceId] = useState(null);

  const isBusinessMathematics =
    majorId === "mis" && courseId === "business-mathematics";

  /* =========================================================
     COURSE NOT FOUND
  ========================================================= */

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

  const resources = Array.isArray(course.resources) ? course.resources : [];

  const courseNotice = course.notice;

  /* =========================================================
     OPEN LINK
  ========================================================= */

  const openLink = (url, event) => {
    event?.stopPropagation();

    if (!url) {
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  /* =========================================================
     TOGGLE RESOURCE
  ========================================================= */

  const toggleResource = (resourceId) => {
    setOpenResourceId((current) =>
      current === resourceId ? null : resourceId,
    );
  };

  /* =========================================================
     NORMAL LINKS
  ========================================================= */

  const renderLinks = (items) => {
    if (!Array.isArray(items) || items.length === 0) {
      return null;
    }

    return (
      <div className="course-resource-links">
        {items.map((item, index) => (
          <button
            type="button"
            className="course-resource-link"
            key={`${item.url}-${index}`}
            onClick={(event) => openLink(item.url, event)}
          >
            <span>{item.title || `ملف ${index + 1}`}</span>

            <span className="course-resource-link-arrow">↗</span>
          </button>
        ))}
      </div>
    );
  };

  /* =========================================================
     EXAMS
  ========================================================= */

  const renderExams = (groups) => {
    if (!Array.isArray(groups) || groups.length === 0) {
      return null;
    }

    return (
      <div className="course-exam-groups">
        {groups.map((group, groupIndex) => (
          <div
            className="course-exam-group"
            key={`${group.category}-${groupIndex}`}
          >
            <div className="course-exam-group-heading">
              <h3>{group.category}</h3>

              <span className="course-exam-group-number">
                {String(groupIndex + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="course-exam-links">
              {group.items?.map((item, itemIndex) => (
                <button
                  type="button"
                  className="course-resource-link"
                  key={`${item.url}-${itemIndex}`}
                  onClick={(event) => openLink(item.url, event)}
                >
                  <span>{item.title}</span>

                  <span className="course-resource-link-arrow">↗</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  /* =========================================================
     PAGE
  ========================================================= */

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
          {/* BACK */}

          <button
            type="button"
            className="course-back-button"
            onClick={() => navigate(`/majors/${majorId}/semester-1`)}
          >
            <span>→</span>

            <span>العودة إلى مساقات الفصل الأول</span>
          </button>

          {/* =================================================
              HEADING
          ================================================= */}

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
              اختر القسم الذي تريد الوصول إليه لعرض المواد والمصادر الخاصة
              بالمساق.
            </p>
          </div>

          {/* =================================================
              GLOBAL UPDATE NOTICE

              تظهر في جميع المساقات
          ================================================= */}

          <div className="course-update-note">
            <div className="course-update-note-icon">✦</div>

            <div className="course-update-note-content">
              <span className="course-update-note-label">UPDATE NOTICE</span>

              <p>
                في حال توفر أي مواد أو مصادر إضافية لهذا المساق، سيتم تزويدكم
                بها وإضافتها أولًا بأول.
              </p>
            </div>
          </div>

          {/* =================================================
              NO RESOURCES / COMING SOON
          ================================================= */}

          {resources.length === 0 && (
            <div className="course-no-resources">
              {isBusinessMathematics ? (
                <>
                  <div className="course-no-resources-icon">⏳</div>

                  <span className="course-no-resources-label">COMING SOON</span>

                  <h2>سيتم تزويدكم بكل ما يخص المساق قريبًا.</h2>

                  <p>
                    نعمل حاليًا على تجهيز مواد ومصادر مساق رياضيات في الأعمال
                    التجارية، وسيتم إضافتها فور توفرها.
                  </p>

                  <div className="course-no-resources-status">
                    <span className="course-status-dot"></span>

                    <span>جاري تجهيز المحتوى</span>
                  </div>
                </>
              ) : courseNotice ? (
                <>
                  <div className="course-no-resources-icon">⏳</div>

                  <span className="course-no-resources-label">COMING SOON</span>

                  <h2>{courseNotice.title}</h2>

                  <p>{courseNotice.text}</p>

                  <div className="course-no-resources-status">
                    <span className="course-status-dot"></span>

                    <span>جاري تجهيز المحتوى</span>
                  </div>
                </>
              ) : (
                <span>سيتم إضافة مصادر هذا المساق قريبًا</span>
              )}
            </div>
          )}

          {/* =================================================
              RESOURCES
          ================================================= */}

          {resources.length > 0 && (
            <div className="course-resources-grid">
              {resources.map((resource, index) => {
                const opened = openResourceId === resource.id;

                return (
                  <article
                    key={resource.id}
                    className={`course-resource-card course-resource-clickable ${
                      opened ? "course-resource-card-open" : ""
                    }`}
                    onClick={() => toggleResource(resource.id)}
                  >
                    {/* TOP */}

                    <div className="course-resource-top">
                      <div className="course-resource-icon">
                        {resource.icon}
                      </div>

                      <span className="course-resource-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* TEXT */}

                    <span className="course-resource-english">
                      {resource.english}
                    </span>

                    <h2>{resource.title}</h2>

                    <p>{resource.description}</p>

                    {/* OPEN ROW */}

                    <div className="course-resource-open-row">
                      <span>
                        {opened ? "إخفاء المحتوى" : "اضغط لعرض المحتوى"}
                      </span>

                      <span
                        className={`course-resource-toggle-arrow ${
                          opened ? "open" : ""
                        }`}
                      >
                        ↓
                      </span>
                    </div>

                    {/* EXPANDED */}

                    {opened && (
                      <div
                        className="course-resource-expanded"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <div className="course-resource-expanded-inner">
                          {resource.type === "exams"
                            ? renderExams(resource.groups)
                            : renderLinks(resource.items)}
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default CourseDetails;
