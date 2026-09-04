export const studyPlans = {
  "computer-science": {
    title: "علم الحاسوب",
    status: "available",
    summary: {
      total: 127,
      universityRequired: 19,
      majorRequired: 92,
      majorElective: 12,
    },
  },

  "cs-job-market": {
    title: "علم الحاسوب في سوق العمل",
    status: "available",
    summary: {
      total: 130,
      universityRequired: 19,
      majorRequired: 93,
      majorElective: 18,
    },
    tracks: [
      {
        id: "ai",
        title: "مسار الذكاء الاصطناعي",
      },
      {
        id: "software-engineering",
        title: "مسار هندسة البرمجيات",
      },
    ],
  },

  cybersecurity: {
    title: "الأمن السيبراني",
    status: "available",
    summary: {
      total: 126,
      universityRequired: 19,
      majorRequired: 91,
      majorElective: 12,
    },
  },

  mis: {
    title: "أنظمة المعلومات الإدارية",
    status: "available",
    summary: {
      total: 124,
      universityRequired: 19,
      majorRequired: 87,
      majorElective: 18,
    },
  },

  "ai-data-science": {
    title: "الذكاء الاصطناعي وعلم البيانات",
    status: "pending",
    summary: null,
  },
};

export function getStudyPlan(majorId) {
  return studyPlans[majorId] || null;
}
