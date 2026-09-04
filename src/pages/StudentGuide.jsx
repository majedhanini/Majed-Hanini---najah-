import { useState } from "react";
import "../styles/student-guide.css";

const procedures = [
  {
    id: "academic-calendar",
    code: "CALENDAR",
    title: "التقويم الجامعي — الفصل الأول 2026–2027",
    short: "أهم مواعيد الفصل الأول مرتبة بشكل سريع وواضح للطالب.",
    steps: [
      {
        title: "السحب والإضافة",
        text: "من 06/09/2026 إلى 12/09/2026.",
      },
      {
        title: "بداية التدريس",
        text: "يبدأ التدريس يوم 13/09/2026.",
      },
      {
        title: "الامتحانات النصفية",
        text: "تبدأ فترة عقد الامتحانات النصفية يوم 10/11/2026 وتنتهي يوم 25/11/2026.",
      },
      {
        title: "انتهاء رصد علامات منتصف الفصل",
        text: "ينتهي رصد علامات منتصف الفصل يوم 01/12/2026.",
      },
      {
        title: "بداية التسجيل للفصل الثاني",
        text: "يبدأ التسجيل للفصل الثاني 2026–2027 يوم 06/12/2026.",
      },
      {
        title: "انتهاء رصد الأنشطة والمهام الأخرى",
        text: "ينتهي رصد الأنشطة والمهام الأخرى يوم 15/12/2026.",
      },
      {
        title: "انتهاء التدريس",
        text: "ينتهي تدريس الفصل الأول يوم 24/12/2026.",
      },
      {
        title: "بداية الامتحانات النهائية",
        text: "تبدأ فترة عقد الامتحانات النهائية يوم 27/12/2026.",
      },
    ],
  },
  {
    id: "major-transfer",
    code: "TRANSFER",
    title: "تحويل التخصص",
    short: "خطوات تقديم طلب تحويل التخصص ومتابعة الإجراءات حتى إتمام المعاملة.",
    steps: [
      {
        title: "الدخول إلى زاجل",
        text: "سجّل الدخول إلى حسابك في زاجل، ثم توجّه إلى خانة النماذج الإلكترونية.",
      },
      {
        title: "اختيار نموذج التحويل",
        text: "من داخل النماذج الإلكترونية اختر التخصص المراد التحويل إليه، ثم قدّم طلب التحويل.",
      },
      {
        title: "مراجعة مسجل الكلية",
        text: "بعد تقديم الطلب، راجع مسجل الكلية في عمادة القبول والتسجيل في الحرم القديم حسب التعليمات المنشورة.",
      },
      {
        title: "دفع رسوم التحويل",
        text: "يتم دفع رسوم التحويل في شباك رقم 30 بمبنى الإدارة حسب التعليمات المنشورة.",
      },
      {
        title: "إنهاء الإجراءات",
        text: "بعد استكمال الخطوات السابقة، راجع عمادة القبول والتسجيل لإنهاء إجراءات التحويل.",
      },
    ],
  },
  {
    id: "student-proof",
    code: "DOCUMENT",
    title: "إصدار إثبات طالب إلكتروني",
    short:
      "طريقة الوصول إلى خدمة إثبات الطالب وتقديم طلب إصدار الوثيقة إلكترونيًا.",
    steps: [
      {
        title: "الدخول إلى زاجل",
        text: "سجّل الدخول إلى زاجل، ثم افتح قسم النماذج الإلكترونية.",
      },
      {
        title: "اختيار إثبات طالب",
        text: "من النماذج الإلكترونية اختر خدمة إثبات طالب.",
      },
      {
        title: "تحديد نوع الوثيقة",
        text: "اختر نوع الوثيقة المطلوبة، ثم قدّم الطلب حسب البيانات الظاهرة لك في النظام.",
      },
    ],
  },
  {
    id: "installment",
    code: "PAYMENT",
    title: "تقسيط القسط",
    short:
      "ملخص الخطوات المذكورة في الدليل المنشور لتقديم طلب تقسيط الرسوم الدراسية.",
    steps: [
      {
        title: "مراجعة الدائرة المالية",
        text: "التوجّه إلى الدائرة المالية — قسم محاسبة الطلبة — في الحرم الجامعي القديم للحصول على ورقة تقسيط بنكي، أو حسب الآلية الإلكترونية المعلنة.",
      },
      {
        title: "اختيار البنك",
        text: "التوجّه إلى أحد البنوك المعتمدة المذكورة في الإعلان لإتمام إجراءات التقسيط.",
      },
      {
        title: "إجراءات الكفيل",
        text: "بحسب الإعلان، قد يُطلب كفيل وفق شروط البنك المختار، لذلك يجب التأكد من متطلبات البنك قبل البدء.",
      },
      {
        title: "تسليم الوثائق",
        text: "تُسلّم الوثائق المطلوبة للبنك المختار لإكمال طلب التقسيط.",
      },
      {
        title: "انتظار اعتماد المبلغ",
        text: "بعد قبول عملية التقسيط يتم رصد المبلغ في زاجل الطالب حسب ما ورد في الإعلان.",
      },
    ],
  },

  {
    id: "scholarship-credit",
    code: "SCHOLARSHIP",
    title: "تفعيل المنحة أو الرصيد السابق",
    short:
      "طريقة إضافة ساعات المنحة أو الرصيد السابق من خلال زاجل حسب الدليل المنشور.",
    steps: [
      {
        title: "الدخول إلى صفحة الرسوم في زاجل",
        text: "افتح صفحة الرسوم أو الحساب المالي في زاجل، ثم توجّه إلى خانة المنحة أو الرصيد السابق.",
      },
      {
        title: "إدخال عدد الساعات",
        text: "اكتب عدد الساعات التي تريد إضافتها من المنحة أو الرصيد السابق في الخانة المخصصة.",
      },
      {
        title: "تأكيد الإضافة",
        text: "اضغط على زر التأكيد الظاهر أسفل الخانة لإضافة الساعات إلى حسابك.",
      },
      {
        title: "التأكد من نجاح العملية",
        text: "بعد الإضافة يظهر إشعار نجاح، ويتحدث مجموع الساعات أو الرصيد في الصفحة.",
      },
    ],
  },
  {
    id: "zoom-registration",
    code: "ZOOM",
    title: "التسجيل في Zoom للمحاضرات الإلكترونية",
    short:
      "طريقة تفعيل حساب Zoom الجامعي والدخول إلى المحاضرات الإلكترونية المرتبطة بـ Moodle.",
    steps: [
      {
        title: "تنزيل تطبيق Zoom",
        text: "نزّل تطبيق Zoom Workplace من متجر Google Play أو App Store على جهازك.",
      },
      {
        title: "اختيار Sign in",
        text: "افتح التطبيق واضغط على Sign in للبدء بتسجيل الدخول.",
      },
      {
        title: "اختيار Continue with Google",
        text: "من خيارات تسجيل الدخول اختر Continue with Google.",
      },
      {
        title: "اختيار حساب آخر",
        text: "إذا ظهرت لك حسابات Google مسجلة مسبقًا على الجهاز، اختر استخدام حساب آخر حتى تدخل ببيانات الحساب الجامعي.",
      },
      {
        title: "الحصول على البريد وكلمة المرور من زاجل",
        text: "بعد تسجيل الدخول إلى زاجل، تظهر على الصفحة الرئيسية بيانات البريد الإلكتروني الجامعي وكلمة المرور الخاصة به حسب الشرح المنشور.",
      },
      {
        title: "إكمال تسجيل الدخول",
        text: "استخدم بيانات البريد الجامعي في شاشة تسجيل الدخول إلى Zoom، ثم اضغط Continue عند ظهور شاشة السماح بالوصول.",
      },
      {
        title: "الدخول إلى المحاضرات",
        text: "بعد نجاح تسجيل الدخول يصبح حساب Zoom جاهزًا. روابط المحاضرات الإلكترونية تظهر عادة داخل Moodle؛ قد يكون الرابط مباشرًا أو من خلال أيقونة المحاضرة، وعند الضغط يتم تحويلك إلى Zoom.",
      },
    ],
  },
  {
    id: "quran-forum",
    code: "ZAJEL",
    title: "التسجيل في ملتقى القرآن الكريم",
    short:
      "طريقة الوصول إلى الملتقى والتسجيل فيه من خلال زاجل حسب الشرح المنشور.",
    steps: [
      {
        title: "فتح ملتقى القرآن الكريم",
        text: "ادخل إلى زاجل، ثم افتح خانة ملتقى القرآن الكريم.",
      },
      {
        title: "الضغط على التسجيل",
        text: "من داخل صفحة الملتقى اضغط على خيار التسجيل في ملتقى القرآن الكريم.",
      },
      {
        title: "تعبئة البيانات",
        text: "اختر البيانات المطلوبة في نموذج التسجيل، ثم أرسل الطلب.",
      },
    ],
  },
];

function StudentGuide({ navigate }) {
  const [openProcedure, setOpenProcedure] = useState(null);

  const toggleProcedure = (id) => {
    setOpenProcedure((current) => (current === id ? null : id));

    setTimeout(() => {
      document.getElementById(`procedure-${id}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 40);
  };

  return (
    <main className="student-guide-page">
      <div className="student-guide-background" aria-hidden="true">
        <div className="student-guide-grid"></div>
        <div className="student-guide-glow student-guide-glow-one"></div>
        <div className="student-guide-glow student-guide-glow-two"></div>
      </div>

      <section className="student-guide-hero">
        <div className="student-guide-shell">
          <button
            type="button"
            className="student-guide-back"
            onClick={() => navigate("/")}
          >
            <span>→</span>
            <span>العودة للرئيسية</span>
          </button>

          <div className="student-guide-hero-content">
            <span className="student-guide-kicker">
              SHABIBA STUDENT SERVICES GUIDE
            </span>

            <h1>
              دليل <span>الإجراءات الطلابية</span>
            </h1>

            <p>
              خطوات مرتبة ومبسطة لأهم الإجراءات التي يحتاجها الطالب، بدل البحث
              بين المنشورات والصور والتعليمات المتفرقة.
            </p>
          </div>
        </div>
      </section>

      <section className="student-guide-procedures">
        <div className="student-guide-shell">
          <div className="student-guide-section-heading">
            <div>
              <span>STUDENT PROCEDURES</span>
              <h2>اختر الإجراء</h2>
            </div>

            <p>اضغط على أي إجراء لعرض الخطوات بالتفصيل.</p>
          </div>

          <div className="student-guide-global-note">
            <div className="student-guide-global-note-icon">!</div>

            <div>
              <span>ملاحظة مهمة</span>
              <strong>اعتمد دائمًا التعليمات الأحدث</strong>
              <p>
                الإجراءات والرسوم والجهات قد تتغير مع الوقت، لذلك راجع زاجل أو
                الجهة الجامعية المختصة قبل إتمام أي معاملة.
              </p>
            </div>
          </div>

          <div className="student-guide-list">
            {procedures.map((procedure, procedureIndex) => {
              const isOpen = openProcedure === procedure.id;

              return (
                <article
                  key={procedure.id}
                  id={`procedure-${procedure.id}`}
                  className={`student-guide-item ${isOpen ? "open" : ""}`}
                >
                  <button
                    type="button"
                    className="student-guide-trigger"
                    onClick={() => toggleProcedure(procedure.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="student-guide-trigger-main">
                      <div className="student-guide-number">
                        {String(procedureIndex + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <span className="student-guide-code">
                          {procedure.code}
                        </span>
                        <h3>{procedure.title}</h3>
                        <p>{procedure.short}</p>
                      </div>
                    </div>

                    <span className="student-guide-toggle">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="student-guide-content">
                      <div className="student-guide-steps">
                        {procedure.steps.map((step, index) => (
                          <article
                            key={`${procedure.id}-${step.title}`}
                            className="student-guide-step"
                          >
                            <div className="student-guide-step-number">
                              {String(index + 1).padStart(2, "0")}
                            </div>

                            <div className="student-guide-step-content">
                              <h4>{step.title}</h4>
                              <p>{step.text}</p>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="student-guide-credit">
            <div className="student-guide-credit-brand">
              <span className="student-guide-credit-star">✦</span>
              <strong>حركة الشبيبة الطلابية</strong>
              <span className="student-guide-credit-star">✦</span>
            </div>

            <span
              className="student-guide-credit-divider"
              aria-hidden="true"
            ></span>

            <p>دليل مبسط لتسهيل وصول الطلبة للمعلومة.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default StudentGuide;
