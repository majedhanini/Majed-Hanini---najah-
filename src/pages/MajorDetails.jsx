import StudyPlanSection from "../components/StudyPlanSection";
import "../styles/major-details.css";

const majorsData = {
  "cs-job-market": {
    icon: "</>",
    english: "Computer Science in the Job Market",
    title: "علم الحاسوب في سوق العمل",
    description:
      "تخصص يجمع بين أساسيات علم الحاسوب والجانب التطبيقي، ويركز على تطوير المهارات المرتبطة باحتياجات سوق العمل.",
    about:
      "يركز التخصص على البرمجة، تطوير البرمجيات، حل المشكلات، المشاريع العملية، وبناء مهارات تقنية تساعد الطالب على الاندماج في سوق العمل.",
    points: [
      [
        "01",
        "برمجة وتطوير",
        "بناء مهارات قوية في البرمجة وتطوير الحلول البرمجية.",
      ],
      ["02", "مشاريع عملية", "تطبيق المعرفة من خلال مشاريع وتجارب عملية."],
      ["03", "سوق العمل", "تطوير مهارات مهنية وتقنية مرتبطة بالقطاع التقني."],
    ],
  },

  "computer-science": {
    icon: "CS",
    english: "Computer Science",
    title: "علم الحاسوب",
    description:
      "تخصص يركز على البرمجة، الخوارزميات، قواعد البيانات، الأنظمة، وهندسة البرمجيات.",
    about:
      "يبني التخصص أساسًا قويًا في علوم الحاسوب، ويساعد الطالب على فهم طريقة عمل البرمجيات والأنظمة وحل المشكلات بطريقة منهجية.",
    points: [
      ["01", "البرمجة", "تعلم لغات البرمجة وبناء البرامج والتطبيقات."],
      ["02", "الخوارزميات", "تطوير التفكير المنطقي وأساليب حل المشكلات."],
      ["03", "الأنظمة", "فهم قواعد البيانات والأنظمة وهندسة البرمجيات."],
    ],
  },

  cybersecurity: {
    icon: "SEC",
    english: "Cybersecurity",
    title: "الأمن السيبراني",
    description:
      "تخصص يركز على حماية الأنظمة والشبكات والبيانات من التهديدات والهجمات الرقمية.",
    about:
      "يدرس الطالب أساسيات الشبكات، أمن المعلومات، تحليل التهديدات، الحماية الرقمية، ومبادئ الدفاع عن الأنظمة.",
    points: [
      ["01", "أمن الشبكات", "فهم الشبكات وطرق حمايتها من التهديدات."],
      ["02", "أمن المعلومات", "حماية البيانات والأنظمة من الاختراقات."],
      ["03", "تحليل الهجمات", "دراسة التهديدات وأساليب الدفاع والاستجابة."],
    ],
  },

  mis: {
    icon: "MIS",
    english: "Management Information Systems",
    title: "أنظمة المعلومات الإدارية",
    description:
      "تخصص يجمع بين تكنولوجيا المعلومات والإدارة وتحليل الأنظمة في بيئة الأعمال.",
    about:
      "يربط التخصص بين التقنية والإدارة، ويؤهل الطالب لفهم أنظمة المؤسسات وتحليل احتياجاتها وتطوير الحلول الرقمية المناسبة.",
    points: [
      ["01", "تحليل الأنظمة", "فهم احتياجات المؤسسات وتحليل نظم المعلومات."],
      ["02", "الإدارة", "دمج المفاهيم الإدارية مع الحلول التقنية."],
      ["03", "الأعمال الرقمية", "تطوير حلول تساعد المؤسسات على العمل بكفاءة."],
    ],
  },

  "ai-data-science": {
    icon: "AI",
    english: "Artificial Intelligence & Data Science",
    title: "الذكاء الاصطناعي وعلم البيانات",
    description:
      "تخصص يركز على الذكاء الاصطناعي، تعلم الآلة، تحليل البيانات وبناء الحلول الذكية.",
    about:
      "يجمع التخصص بين البرمجة، تحليل البيانات، الإحصاء، تعلم الآلة وتطبيقات الذكاء الاصطناعي الحديثة.",
    points: [
      ["01", "الذكاء الاصطناعي", "فهم أساسيات الأنظمة الذكية وتطبيقاتها."],
      ["02", "علم البيانات", "تحليل البيانات واستخراج المعلومات منها."],
      ["03", "تعلم الآلة", "بناء نماذج تتعلم من البيانات وتقدم تنبؤات."],
    ],
  },
};

function MajorDetails({ navigate, majorId }) {
  const major = majorsData[majorId];

  if (!major) {
    return (
      <main className="major-details-page">
        <div className="major-details-container">
          <div className="major-not-found">
            <h1>التخصص غير موجود</h1>

            <button
              type="button"
              className="major-back-button"
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
    <main className="major-details-page">
      <div className="major-details-background" aria-hidden="true">
        <div className="major-details-grid"></div>
        <div className="major-details-glow major-details-glow-one"></div>
        <div className="major-details-glow major-details-glow-two"></div>
        <span className="major-details-code code-cs">&lt;/&gt;</span>
      </div>

      <section className="major-details-hero">
        <div className="major-details-container">
          <button
            type="button"
            className="major-back-button"
            onClick={() => navigate("/majors")}
          >
            <span>→</span>
            العودة إلى التخصصات
          </button>

          <div className="major-details-heading">
            <div className="major-details-icon">{major.icon}</div>
            <span className="major-details-english">{major.english}</span>
            <h1>{major.title}</h1>
            <p>{major.description}</p>
          </div>
        </div>
      </section>

      <section className="major-about-section">
        <div className="major-details-container">
          <div className="major-section-heading">
            <span>ABOUT THE MAJOR</span>
            <h2>نبذة عن التخصص</h2>
          </div>

          <div className="major-about-grid">
            <article className="major-about-main-card">
              <span className="major-card-label">ما هو التخصص؟</span>
              <h3>تعرف على تخصصك</h3>
              <p>{major.about}</p>
            </article>

            <div className="major-about-side">
              {major.points.map((point) => (
                <article className="major-mini-card" key={point[0]}>
                  <span className="major-mini-icon">{point[0]}</span>

                  <div>
                    <h3>{point[1]}</h3>
                    <p>{point[2]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="major-study-plan-wrapper">
        <div className="major-details-container">
          <StudyPlanSection majorId={majorId} />
        </div>
      </section>

      <section className="major-courses-section">
        <div className="major-details-container">
          <div className="major-section-heading">
            <span>FIRST YEAR</span>
            <h2>مساقات السنة الأولى</h2>
            <p>اختر الفصل للوصول إلى المساقات والمصادر الدراسية الخاصة به.</p>
          </div>

          <div className="semester-grid">
            <article className="semester-card semester-card-active">
              <div className="semester-card-top">
                <div>
                  <span className="semester-number">01</span>
                  <span className="semester-label">FIRST SEMESTER</span>
                </div>

                <div className="semester-status">متاح</div>
              </div>

              <h3>الفصل الدراسي الأول</h3>
              <p>مساقات الفصل الأول ومصادرها الدراسية متوفرة للطلاب.</p>

              <button
                type="button"
                className="semester-button"
                onClick={() => navigate(`/majors/${majorId}/semester-1`)}
              >
                <span>استعرض المساقات</span>
                <span>←</span>
              </button>
            </article>

            <article className="semester-card semester-card-coming">
              <div className="semester-card-top">
                <div>
                  <span className="semester-number">02</span>
                  <span className="semester-label">SECOND SEMESTER</span>
                </div>

                <div className="semester-status coming">قريبًا</div>
              </div>

              <h3>الفصل الدراسي الثاني</h3>
              <p>سيتم إضافة مساقات الفصل الثاني والمصادر الدراسية لاحقًا.</p>

              <div className="semester-coming-text">سيتوفر قريبًا</div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MajorDetails;
