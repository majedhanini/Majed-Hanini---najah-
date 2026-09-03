import { useMemo, useState } from "react";
import "../styles/gpa-calculator.css";

const gradePoints = {
  A: 4,
  "A-": 3.75,
  "B+": 3.5,
  B: 3,
  "B-": 2.75,
  "C+": 2.5,
  C: 2,
  "C-": 1.75,
  "D+": 1.5,
  D: 1,
  "D-": 0.75,
  E: 0,
};

const gradeOptions = Object.keys(gradePoints);

function GpaCalculator({ navigate }) {
  const [courses, setCourses] = useState([
    { id: crypto.randomUUID(), name: "", credits: "3", grade: "A" },
    { id: crypto.randomUUID(), name: "", credits: "3", grade: "B+" },
  ]);

  const updateCourse = (id, field, value) => {
    setCourses((current) =>
      current.map((course) =>
        course.id === id ? { ...course, [field]: value } : course,
      ),
    );
  };

  const addCourse = () => {
    setCourses((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        name: "",
        credits: "3",
        grade: "A",
      },
    ]);
  };

  const removeCourse = (id) => {
    setCourses((current) =>
      current.length === 1
        ? current
        : current.filter((course) => course.id !== id),
    );
  };

  const resetCourses = () => {
    setCourses([
      {
        id: crypto.randomUUID(),
        name: "",
        credits: "3",
        grade: "A",
      },
    ]);
  };

  const result = useMemo(() => {
    let totalCredits = 0;
    let totalPoints = 0;

    courses.forEach((course) => {
      const credits = Number(course.credits);

      if (!Number.isFinite(credits) || credits <= 0) return;

      totalCredits += credits;
      totalPoints += credits * gradePoints[course.grade];
    });

    return {
      totalCredits,
      totalPoints,
      gpa: totalCredits > 0 ? totalPoints / totalCredits : 0,
    };
  }, [courses]);

  const getStanding = (gpa) => {
    if (gpa >= 3.7) return "ممتاز";
    if (gpa >= 3.0) return "جيد جدًا";
    if (gpa >= 2.3) return "جيد";
    if (gpa >= 2.0) return "مقبول";
    return "بحاجة لتحسين";
  };

  return (
    <main className="gpa-page">
      <div className="gpa-background" aria-hidden="true">
        <div className="gpa-grid-bg"></div>
        <div className="gpa-glow gpa-glow-one"></div>
        <div className="gpa-glow gpa-glow-two"></div>
        <span className="gpa-code gpa-code-one">GPA</span>
        <span className="gpa-code gpa-code-two">4.0</span>
      </div>

      <section className="gpa-section">
        <div className="gpa-container">
          <button
            type="button"
            className="gpa-back-button"
            onClick={() => navigate("/")}
          >
            <span>→</span>
            العودة إلى الرئيسية
          </button>

          <header className="gpa-heading">
            <span className="gpa-kicker">STUDENT TOOL</span>

            <h1>حاسبة المعدل</h1>

            <p>
              أضف مساقاتك، عدد الساعات والتقدير، وسيتم حساب المعدل تلقائيًا وفق
              سلم التقديرات المعتمد.
            </p>
          </header>

          <div className="gpa-layout">
            <section className="gpa-calculator-card">
              <div className="gpa-card-heading">
                <div>
                  <span>COURSES</span>
                  <h2>المساقات</h2>
                </div>

                <button
                  type="button"
                  className="gpa-add-button"
                  onClick={addCourse}
                >
                  <span>+</span>
                  إضافة مساق
                </button>
              </div>

              <div className="gpa-course-list">
                {courses.map((course, index) => (
                  <div className="gpa-course-row" key={course.id}>
                    <span className="gpa-course-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="gpa-field gpa-field-name">
                      <label htmlFor={`course-name-${course.id}`}>
                        اسم المساق
                      </label>

                      <input
                        id={`course-name-${course.id}`}
                        type="text"
                        value={course.name}
                        onChange={(event) =>
                          updateCourse(course.id, "name", event.target.value)
                        }
                        placeholder="مثال: Programming 1"
                      />
                    </div>

                    <div className="gpa-field">
                      <label htmlFor={`course-credits-${course.id}`}>
                        الساعات
                      </label>

                      <input
                        id={`course-credits-${course.id}`}
                        type="number"
                        min="0.5"
                        max="10"
                        step="0.5"
                        value={course.credits}
                        onChange={(event) =>
                          updateCourse(course.id, "credits", event.target.value)
                        }
                      />
                    </div>

                    <div className="gpa-field">
                      <label htmlFor={`course-grade-${course.id}`}>
                        التقدير
                      </label>

                      <select
                        id={`course-grade-${course.id}`}
                        value={course.grade}
                        onChange={(event) =>
                          updateCourse(course.id, "grade", event.target.value)
                        }
                      >
                        {gradeOptions.map((grade) => (
                          <option key={grade} value={grade}>
                            {grade} — {gradePoints[grade].toFixed(2)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="button"
                      className="gpa-remove-button"
                      onClick={() => removeCourse(course.id)}
                      disabled={courses.length === 1}
                      aria-label="حذف المساق"
                      title="حذف المساق"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="gpa-card-footer">
                <button
                  type="button"
                  className="gpa-reset-button"
                  onClick={resetCourses}
                >
                  مسح الكل
                </button>

                <span>المعدل يتحدث تلقائيًا عند تعديل أي مساق.</span>
              </div>
            </section>

            <aside className="gpa-result-card">
              <div className="gpa-result-top">
                <span className="gpa-result-label">YOUR GPA</span>
                <span className="gpa-live-dot"></span>
              </div>

              <div className="gpa-result-value">
                {result.gpa.toFixed(2)}
                <small>/ 4.00</small>
              </div>

              <span className="gpa-standing">{getStanding(result.gpa)}</span>

              <div className="gpa-result-divider"></div>

              <div className="gpa-result-stats">
                <div>
                  <span>مجموع الساعات</span>
                  <strong>{result.totalCredits}</strong>
                </div>

                <div>
                  <span>مجموع النقاط</span>
                  <strong>{result.totalPoints.toFixed(2)}</strong>
                </div>
              </div>

              <div className="gpa-scale-note">
                <span>طريقة الحساب</span>

                <p>
                  المعدل = مجموع (نقاط التقدير × ساعات المساق) ÷ مجموع الساعات.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GpaCalculator;
