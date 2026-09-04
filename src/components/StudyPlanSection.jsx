import { getStudyPlan } from "../data/studyPlans";
import "../styles/study-plan.css";

function StudyPlanSection({ majorId }) {
  const plan = getStudyPlan(majorId);

  if (!plan) return null;

  if (plan.status === "pending") {
    return (
      <section className="simple-plan-section">
        <div className="simple-plan-heading">
          <span>STUDY PLAN</span>
          <h2>الخطة الدراسية</h2>
        </div>

        <div className="simple-plan-pending">
          <div className="simple-plan-pending-icon">✦</div>

          <div>
            <h3>الخطة الكاملة غير متوفرة حاليًا</h3>

            <p>
              تخصص الذكاء الاصطناعي وعلم البيانات من التخصصات الجديدة، لذلك
              سنعرض تفاصيل الساعات والخطة فور توفر معلومات مؤكدة وكاملة.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="simple-plan-section">
      <div className="simple-plan-heading">
        <span>STUDY PLAN</span>
        <h2>الخطة الدراسية</h2>
        <p>ملخص سريع لعدد الساعات المعتمدة وتوزيعها في الخطة.</p>
      </div>

      {plan.tracks && (
        <div className="simple-plan-tracks">
          <div className="simple-plan-tracks-title">
            <span>TRACKS</span>
            <h3>المسارات المتوفرة</h3>
          </div>

          <div className="simple-plan-track-grid">
            {plan.tracks.map((track) => (
              <article className="simple-plan-track-card" key={track.id}>
                <span className="simple-plan-track-dot"></span>
                <strong>{track.title}</strong>
              </article>
            ))}
          </div>
        </div>
      )}

      <div className="simple-plan-stats">
        <article className="simple-plan-stat simple-plan-stat-main">
          <span className="simple-plan-stat-label">TOTAL HOURS</span>
          <strong>{plan.summary.total}</strong>
          <p>ساعة دراسية معتمدة</p>
        </article>

        <article className="simple-plan-stat">
          <span className="simple-plan-stat-label">UNIVERSITY</span>
          <strong>{plan.summary.universityRequired}</strong>
          <p>ساعة إجباري جامعة</p>
        </article>

        <article className="simple-plan-stat">
          <span className="simple-plan-stat-label">MAJOR</span>
          <strong>{plan.summary.majorRequired}</strong>
          <p>ساعة إجباري تخصص</p>
        </article>

        <article className="simple-plan-stat">
          <span className="simple-plan-stat-label">ELECTIVE</span>
          <strong>{plan.summary.majorElective}</strong>
          <p>ساعة اختياري تخصص</p>
        </article>
      </div>

      <div className="simple-plan-note">
        <span>i</span>
        <p>
          هذه المعلومات تلخص الخطة الدراسية المتوفرة. طرح المساقات والشعب قد
          يختلف من فصل لآخر حسب جدول الكلية وتوفر المدرسين والشعب.
        </p>
      </div>
    </section>
  );
}

export default StudyPlanSection;
