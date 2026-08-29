import "../styles/majors.css";

const majors = [
  {
    id: "cs-job-market",
    number: "01",
    short: "</>",
    title: "علم الحاسوب في سوق العمل",
    english: "Computer Science in the Job Market",
    description:
      "تخصص يجمع بين أساسيات علم الحاسوب والجانب التطبيقي، ويركز على تطوير المهارات المرتبطة باحتياجات سوق العمل.",
    tags: ["Development", "Projects", "Career"],
  },
  {
    id: "computer-science",
    number: "02",
    short: "CS",
    title: "علم الحاسوب",
    english: "Computer Science",
    description:
      "تخصص يبني أساسًا قويًا في البرمجة، الخوارزميات، قواعد البيانات، هندسة البرمجيات ومجالات الحوسبة المختلفة.",
    tags: ["Programming", "Software", "Algorithms"],
  },
  {
    id: "cybersecurity",
    number: "03",
    short: "SEC",
    title: "الأمن السيبراني",
    english: "Cybersecurity",
    description:
      "يركز على حماية الأنظمة والشبكات والبيانات، وفهم الهجمات والتهديدات وطرق الدفاع والأمن الرقمي.",
    tags: ["Security", "Networks", "Defense"],
  },
  {
    id: "mis",
    number: "04",
    short: "MIS",
    title: "أنظمة المعلومات الإدارية",
    english: "Management Information Systems",
    description:
      "يجمع بين تكنولوجيا المعلومات والإدارة وتحليل الأنظمة لمساعدة المؤسسات على تطوير وإدارة حلولها الرقمية.",
    tags: ["Business", "Systems", "Management"],
  },
  {
    id: "ai-data-science",
    number: "05",
    short: "AI",
    title: "الذكاء الاصطناعي وعلم البيانات",
    english: "Artificial Intelligence & Data Science",
    description:
      "يركز على الذكاء الاصطناعي، تعلم الآلة، تحليل البيانات وبناء حلول ذكية تعتمد على البيانات والتقنيات الحديثة.",
    tags: ["AI", "Data", "Machine Learning"],
  },
];

function Majors({ navigate }) {
  return (
    <main className="majors-page">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="majors-background" aria-hidden="true">
        <div className="majors-grid-background"></div>

        <div className="majors-glow majors-glow-one"></div>
        <div className="majors-glow majors-glow-two"></div>

        <span className="majors-code majors-code-one">&lt;/&gt;</span>

        <span className="majors-code majors-code-two">AI</span>

        <span className="majors-code majors-code-three">{"{ }"}</span>
      </div>

      {/* =====================================================
          PAGE CONTENT
      ====================================================== */}
      <section className="majors-hero">
        <div className="majors-container">
          {/* HEADING */}
          <div className="majors-heading">
            <div className="majors-kicker">
              <span></span>
              EXPLORE YOUR MAJOR
              <span></span>
            </div>

            <h1>اختر تخصصك</h1>

            <p>
              تعرّف على تخصصات كلية تكنولوجيا المعلومات والذكاء الاصطناعي،
              واستكشف المسار الذي يناسب اهتماماتك وطموحاتك الأكاديمية والمهنية.
            </p>
          </div>

          {/* =====================================================
              MAJORS GRID
          ====================================================== */}
          <div className="majors-grid">
            {majors.map((major) => (
              <article className="major-card" key={major.id}>
                <div className="major-card-glow"></div>

                {/* TOP */}
                <div className="major-card-top">
                  <div className="major-icon">{major.short}</div>

                  <span className="major-number">{major.number}</span>
                </div>

                {/* CONTENT */}
                <div className="major-card-content">
                  <span className="major-english">{major.english}</span>

                  <h2>{major.title}</h2>

                  <p>{major.description}</p>
                </div>

                {/* TAGS */}
                <div className="major-tags">
                  {major.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {/* BUTTON */}
                <button
                  type="button"
                  className="major-card-footer"
                  onClick={() => navigate(`/majors/${major.id}`)}
                >
                  <span>استكشف التخصص</span>

                  <span className="major-arrow">←</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Majors;
