import { useState } from "react";
import "../styles/required-courses.css";

const resources = {
  palestinian: {
    title: "الدراسات الفلسطينية",
    code: "PS",
    description:
      "الكتاب، المحاضرات، التلاخيص، وأسئلة الامتحانات مرتبة في مكان واحد.",
    sections: [
      {
        title: "الكتاب الأساسي",
        icon: "▣",
        links: [
          [
            "فتح الكتاب",
            "https://drive.google.com/file/d/1Y-un6PpeOOMENM3hLLKRpoo7R8RhN0yx/view?usp=drive_link",
          ],
        ],
      },
      {
        title: "المحاضرات المسجلة",
        icon: "▶",
        links: [
          [
            "د. سهيل خلف",
            "https://youtube.com/playlist?list=PLaRo3tFB7KraxkFEFSOaghmZMMq5jODJt&si=hgLbZ80wUIhQsyVN",
          ],
          [
            "د. محمد الخطيب",
            "https://youtube.com/playlist?list=PLaRo3tFB7Krb4Rd9gLQBJEcR8YwnjBZm_&si=N01KAtb8y3eNAd88",
          ],
        ],
      },
      {
        title: "التلاخيص والملفات المساعدة",
        icon: "≡",
        links: [
          [
            "تلخيص شامل 1",
            "https://drive.google.com/file/d/1eAXTMqw3NIVOJCrCUfgspHteRiOR9Mm5/view?fbclid=IwAR3m7z-zXa36kmg5P1F7SedCP9J2kbr1_2svSoOPylY3ED34m5vhF4cY8RQ",
          ],
          [
            "تلخيص شامل 2",
            "https://drive.google.com/drive/folders/1GA1tMOsG_uh5Nx7JTaqPhPsGP8WTgyoh",
          ],
          [
            "تلخيص شامل 3",
            "https://drive.google.com/drive/folders/1-8UwdoEO-VofiR6eIhFA1J3BMqqVjNSh",
          ],
          [
            "تلخيص شامل 4",
            "https://drive.google.com/drive/folders/1-GbYuOXqdq1OcWHEHLP1mlv3It49j7IK",
          ],
          [
            "تلخيص شامل 5",
            "https://drive.google.com/file/d/1-zFB-ENltROYPuigkEZ_hs1PZ6oyHzZd/view?usp=drivesdk",
          ],
          [
            "تلخيص شامل 6",
            "https://drive.google.com/file/d/14Q4uIaicg628TrQ3sfvVnpvPsx2lSbY6/view?usp=drivesdk",
          ],
          [
            "تلخيص شامل 7",
            "https://drive.google.com/file/d/1wF7gppypIsNkxMHiKBnw0YMjoikpkcuS/view?usp=drivesdk",
          ],
          [
            "تلخيص د. عبد الرحيم الشوبكي",
            "https://drive.google.com/drive/folders/1wyEpVkZNESgbjH3lCthdMPT6y6owim3F",
          ],
          [
            "تلخيص د. إبراهيم أبو جابر",
            "https://drive.google.com/drive/folders/1KWUuC9o_V0BgG2C3rvF-TeMO91nkdFMJ",
          ],
          [
            "تخطيط الكتاب",
            "https://drive.google.com/file/d/1uSoQhzkpk_6he-z1UhlFyOGvRbe0GR6C/view",
          ],
        ],
      },
      {
        title: "Midterm",
        icon: "M",
        links: [
          [
            "نموذج 1",
            "https://docs.google.com/forms/d/e/1FAIpQLSeCrDQkItQwE3IAx2wLFO7shxEHTKO-SaFFArwEx9t_-YQHow/viewform",
          ],
          [
            "نموذج 2",
            "https://drive.google.com/file/d/1k19Fi_7a1lNSyVcMaa1-WEWmiR4mjmop/view",
          ],
          [
            "نموذج 3",
            "https://drive.google.com/drive/folders/1mqWqNtQcmAA5-5kW75UG5nYDur7dIekX",
          ],
          [
            "نموذج 4",
            "https://drive.google.com/drive/folders/1fCmry3GLJdcTdQHzd6emPYZ4-04i9VkX",
          ],
          [
            "نموذج 5",
            "https://drive.google.com/drive/folders/1zFgS2OW_vGwzoesd23NFad1D6kGUAdqp",
          ],
          [
            "نموذج 6",
            "https://drive.google.com/drive/folders/1WrObuLfxWtQ8PNTtyB8hUYGUfr6x2CuY",
          ],
          [
            "نموذج 7",
            "https://drive.google.com/file/d/1W8Wh8skkucFiOwjrrapdKsYgnIqoU_JB/view",
          ],
          [
            "نموذج 8",
            "https://drive.google.com/file/d/1ppZGJKWxuAvL39hP5BgSGvJoJp5u4PEz/view",
          ],
          [
            "نموذج 9",
            "https://drive.google.com/drive/folders/1EIRssi4GtDRpzZ_isEyA3dhll8tZZ9Cr",
          ],
          [
            "نموذج 10",
            "https://drive.google.com/file/d/1FpUzdRMi3MuJikT0Qs7EnZlS8wGQ_k7p/view",
          ],
        ],
      },
      {
        title: "Final",
        icon: "F",
        links: [
          [
            "نموذج 1",
            "https://drive.google.com/file/d/1Vm-EJJJ0uVQK98uxqQBp-8LKOlNTb6Xw/view",
          ],
          [
            "نموذج 2",
            "https://drive.google.com/file/d/1FeKGxegK08nFyDDBDlLwNBVHqh4n78GU/view",
          ],
          [
            "نموذج 3",
            "https://drive.google.com/file/d/1VQYy8wmFdd9iNCb8Ilh65OS7OCJqdbgT/view",
          ],
        ],
      },
    ],
  },

  islamic: {
    title: "الثقافة الإسلامية",
    code: "IC",
    description: "مصادر المادة والتلاخيص وأسئلة الـ Midterm والـ Final.",
    sections: [
      {
        title: "الكتاب الأساسي",
        icon: "▣",
        links: [
          [
            "فتح الكتاب",
            "https://drive.google.com/file/d/1W8Qya1bbyw75QOi5qKKxoD4I6zx6GuvW/view?usp=drive_link",
          ],
        ],
      },
      {
        title: "المحاضرات المسجلة",
        icon: "▶",
        links: [
          [
            "د. حذيفة بدير",
            "https://youtube.com/playlist?list=PLaRo3tFB7KrYCyazTRVQ2jsTtIceDEh7B&si=pRZkq6BJNVSpXUjF",
          ],
        ],
      },
      {
        title: "التلاخيص",
        icon: "≡",
        links: [
          [
            "تلخيص أول وحدتين 1",
            "https://drive.google.com/file/d/1CRoPjnaqyFAarBN5Bpqk8jG4LNbpvuRE/view?usp=drivesdk",
          ],
          [
            "تلخيص أول وحدتين 2",
            "https://drive.google.com/file/d/10_15F6d4Huan9ofZdNsaHn9qJ5Kl8NdP/view?usp=drivesdk",
          ],
          [
            "تلخيص شامل وتخطيط 1",
            "https://drive.google.com/drive/u/0/folders/1Ufp_wrZt6bFVXPg_CJ0zQ6ncLg3tvRmG",
          ],
          [
            "تلخيص شامل وتخطيط 2",
            "https://drive.google.com/file/d/1eMVpUd5TvvayFbLGjmgVsVvNBIb8R17g/view",
          ],
          [
            "تلخيصات شاملة لكل المادة",
            "https://drive.google.com/drive/folders/1AfyCoY5N_GKPqPHoDwqG5g-N75F9O9Bs",
          ],
        ],
      },
      {
        title: "Midterm",
        icon: "M",
        links: [
          [
            "نموذج 1",
            "https://drive.google.com/drive/u/0/folders/1X_pDW3DfDdILfi3ZPxRVex1IOoIxpWtx",
          ],
          [
            "نموذج 2",
            "https://drive.google.com/drive/folders/1NVndAvnayMa9yiZ7W-a0lVuIAw81sGTy",
          ],
          [
            "نموذج 3",
            "https://drive.google.com/drive/folders/12LIOIaQlrRDHzU-C-6KcP5fMdf3VDp3q",
          ],
          [
            "نموذج 4",
            "https://drive.google.com/drive/folders/1mUO4MYPWfxDLFiP5Y80Eyh9gXfykqbHV",
          ],
          [
            "نموذج 5",
            "https://drive.google.com/drive/folders/1i-mB2_-t3pdGE8ItOZmd1AaXUvl8F0Du",
          ],
          [
            "نموذج 6",
            "https://drive.google.com/drive/folders/1UN5nb1unOIuobwh4k9YM4uDi-Ss7SP6s",
          ],
          [
            "نموذج 7",
            "https://drive.google.com/drive/folders/1NaLzWEGSQciPxxQKyv99ytTRMOnB2Z5j",
          ],
        ],
      },
      {
        title: "Final",
        icon: "F",
        links: [
          [
            "نموذج 1",
            "https://drive.google.com/file/d/18P3m-1aC0DBL0MKKizzSF3I2kmfmOwMK/view",
          ],
          [
            "نموذج 2",
            "https://drive.google.com/file/d/1xgIPfksT3Tem6g-9XsC8s2XtmC3-GYYF/view",
          ],
          [
            "نموذج 3",
            "https://drive.google.com/file/d/18aV30mj4VtRUVLtB38KgNOxS7Wh4fdNc/view",
          ],
        ],
      },
    ],
  },

  arabic: {
    title: "اللغة العربية",
    code: "AR",
    description:
      "الكتاب والمحاضرات والتلاخيص والقواعد والنصوص ونماذج الامتحانات.",
    sections: [
      {
        title: "الكتاب الأساسي",
        icon: "▣",
        links: [
          [
            "فتح الكتاب",
            "https://drive.google.com/file/d/1AgN-7L8xG-KU1JnjybP534Nj29rbaMT3/view?usp=drive_link",
          ],
        ],
      },
      {
        title: "المحاضرات المسجلة",
        icon: "▶",
        links: [
          [
            "د. مأمون مباركة",
            "https://drive.google.com/drive/u/0/mobile/folders/1oxTCIQDDdaTXMNXbO7Djmz5In2EsJk0e/10xXr56bVyF_q5sM8Ghkt3Tpkq-MlEftt?sort=13&direction=a",
          ],
          [
            "د. معتصم غوادرة",
            "https://m.youtube.com/watch?v=9onebOR5gak&list=PLlqAM5pwrB09Ri3gwPScYRWUXKs-Kn9it",
          ],
        ],
      },
      {
        title: "التلاخيص والقواعد",
        icon: "≡",
        links: [
          [
            "تلخيص شامل 1",
            "https://drive.google.com/file/d/1BVFUsPrx9g_trFHxCOgJKj--9DM9u3-N/view?usp=drivesdk",
          ],
          [
            "تلخيص شامل 2",
            "https://drive.google.com/file/d/1OFyLShAUU-IhM3TbRMt2JD_lQxIFoai9/view?usp=drivesdk",
          ],
          [
            "تلخيص شامل 3",
            "https://drive.google.com/drive/u/0/folders/1JVtnO60tMff9cSO3XjqUmz9WV0DC6t4R?sort=13&direction=a",
          ],
          [
            "قواعد — د. مأمون مباركة",
            "https://drive.google.com/file/d/119tj_Z_jlucz1QtHAdJMuXcLUOBSEtCF/view?usp=drivesdk",
          ],
          [
            "قواعد — د. معتصم غوادرة",
            "https://drive.google.com/drive/folders/1d47AVfHg1jGOqb9z7mXSQFU7ySuis-7T",
          ],
        ],
      },
      {
        title: "النصوص",
        icon: "T",
        links: [
          [
            "خطبة الهندي الأحمر",
            "https://drive.google.com/file/d/1Mff-4YtL8Hzf0KLLm7D92iUQkaQb9vFc/view?usp=drivesdk",
          ],
          [
            "آيات من سورة القصص",
            "https://drive.google.com/file/d/1mcrmAw4eWBcm3WWN2VFiqMAyTR18YnV9/view?usp=drivesdk",
          ],
          [
            "الدرب المهجور",
            "https://drive.google.com/file/d/1tZqCsLd5fHxVKEkzTfM3tIz3osF439nz/view",
          ],
        ],
      },
      {
        title: "Midterm",
        icon: "M",
        links: [
          [
            "نموذج 1",
            "https://drive.google.com/file/d/1Oab9HIcTflrEMAfF4vo9_zuUUWj7iB5D/view",
          ],
          [
            "نموذج 2",
            "https://drive.google.com/file/d/120ocupToIJJEOVkvJYg8dRxF_p0LW2R2/view",
          ],
          [
            "نموذج 3",
            "https://drive.google.com/file/d/1_QlyR_WHeW8v4gipVYOk2afiuvjYw0a-/view",
          ],
          [
            "نموذج 4",
            "https://drive.google.com/file/d/1TLum0vVqACOQgy9uWR3T_7AsBKryhwVg/view",
          ],
          [
            "نموذج 5",
            "https://drive.google.com/file/d/198OPcsUda0bpifSSL1wA8v6jFGmrHap3/view",
          ],
        ],
      },
      {
        title: "Final",
        icon: "F",
        links: [
          [
            "نموذج 1",
            "https://drive.google.com/file/d/1NeGKryQCfAH4wAJ3O_408GyUDK7MBAj5/view",
          ],
          [
            "نموذج 2",
            "https://drive.google.com/file/d/1WBUpdvUkknFc36MGCKzGc7Ry1OjJPQzj/view",
          ],
          [
            "نموذج 3",
            "https://drive.google.com/drive/u/0/folders/16VqXIpscKLDap6AMySn4wykyuArO7o38",
          ],
          [
            "نموذج 4",
            "https://drive.google.com/file/d/1Fx2do-slA5crTSLCG-GrHb1sVTNsxFZZ/view",
          ],
          [
            "نموذج 5",
            "https://drive.google.com/file/d/11sdkPZ39glKBDmzAjZsfF_Z5is_p5_8m/view",
          ],
        ],
      },
    ],
  },

  remedial: {
    title: "الإنجليزي الاستدراكي",
    code: "ENG-R",
    description: "كتب ومحاضرات وتلاخيص وحلول وأسئلة الامتحانات.",
    englishGroup: true,
    sections: [
      {
        title: "الكتاب الأساسي",
        icon: "▣",
        links: [
          [
            "الكتاب",
            "https://drive.google.com/file/d/1SUbm-YY6mINwu9OlJ2o4uw_iWuTQXHgc/view?usp=sharing",
          ],
        ],
      },
      {
        title: "المحاضرات المسجلة",
        icon: "▶",
        links: [
          [
            "د. دانة عدس",
            "https://drive.google.com/drive/folders/1mSHff4bAHgl20GGgje4UR4RNMtYyegwF?usp=sharing",
          ],
          [
            "د. ريما البسطامي",
            "https://docs.google.com/document/d/1FpWTatwGBlFX2bER6M0JbNuzgqfiNg2V/edit?usp=drivesdk&ouid=103636459603992944411&rtpof=true&sd=true",
          ],
        ],
      },
      {
        title: "التلاخيص وحلول الكتاب",
        icon: "≡",
        links: [
          [
            "تلخيص شامل 1",
            "https://drive.google.com/file/d/1XndVQgp49gUYku31kb1oLmpDQRqSaxNz/view",
          ],
          [
            "تلخيص شامل 2",
            "https://drive.google.com/file/d/1hKQkQL58zBbxJwgYD24ZXgprZZLGfq68/view",
          ],
          [
            "تلخيص شامل 3",
            "https://drive.google.com/file/d/1yk7MS6j1bO6nOBPI9tX11P66aq-WPS6R/view",
          ],
          [
            "تلخيص شامل 4",
            "https://drive.google.com/file/d/1yWpvLpplfm7ZC5E-IaF8J3BU92eZpgGj/view",
          ],
          [
            "حلول الكتاب",
            "https://drive.google.com/drive/folders/1-TDAnFiM0INaAdQ04d6V7n9_cLQ7P0ZL",
          ],
        ],
      },
      {
        title: "Midterm",
        icon: "M",
        links: [
          [
            "نموذج 1",
            "https://drive.google.com/file/d/1ySIK3n4fYJixYT5ljHND7T7t84RuE1l7/view",
          ],
          [
            "نموذج 2",
            "https://drive.google.com/drive/folders/11Gel8qFGkyowq66CtwusN--MMZo9k55t",
          ],
          [
            "نموذج 3",
            "https://drive.google.com/file/d/1nuyIMwLQjtekGcP65nRFImPgc0bL1rDY/view",
          ],
        ],
      },
      {
        title: "Final",
        icon: "F",
        links: [
          [
            "مراجعة وأسئلة 1",
            "https://drive.google.com/drive/folders/1ZUaBTCsheFO4jCzN0J49JVJwkaWNtCjm",
          ],
          [
            "مجموعة أسئلة Final",
            "https://drive.google.com/drive/folders/10vt_NWx6kOP3BOEOyvDV3Cc94eoryfMl",
          ],
        ],
      },
    ],
  },

  english101: {
    title: "English 101",
    code: "ENG-101",
    description:
      "الكتاب والمحاضرات والتلاخيص والفقرات الخارجية وحلول الكتاب والأسئلة.",
    englishGroup: true,
    sections: [
      {
        title: "الكتاب الأساسي",
        icon: "▣",
        links: [
          [
            "فتح الكتاب",
            "https://drive.google.com/file/d/14IftHOryxY5inUZjfcx_I838cjYnKk46/view",
          ],
        ],
      },
      {
        title: "المحاضرات المسجلة",
        icon: "▶",
        links: [
          [
            "د. منذر الصعيدي",
            "https://youtube.com/playlist?list=PLaRo3tFB7KrbkFkqXkG8XwSSUS4d0Ghmz&si=FVjRk2YquyLaAojI",
          ],
        ],
      },
      {
        title: "التلاخيص والملفات المساعدة",
        icon: "≡",
        links: [
          [
            "تلخيص شامل 1",
            "https://drive.google.com/drive/folders/1oBl_uOVevQBf0nesy0LyaA2YCsVwOr-W",
          ],
          [
            "تلخيص شامل 2",
            "https://drive.google.com/drive/u/0/folders/1mXu60MVnScnVvdkiQU13O9owpXmR36zT",
          ],
          [
            "تلخيص شامل 3",
            "https://drive.google.com/drive/folders/1heHBH_rWx15P6xZy2XDq1ppDuPYiNee-",
          ],
          [
            "تلخيص شامل 4",
            "https://drive.google.com/file/d/1QkcgiOz8oAy0kttPSbXCtNTW-s4-ejrP/view",
          ],
          [
            "تلخيص شامل 5",
            "https://drive.google.com/drive/u/0/folders/1na1oafsI52P4N2HWUC6SozfvFpdAy2IA",
          ],
          [
            "تلخيص شامل 6",
            "https://drive.google.com/drive/folders/1-aBX0Q2rxO7k_ewT_swctJattfPaDzdE",
          ],
          [
            "تلخيص شامل 7",
            "https://drive.google.com/drive/folders/1-eCaQj0epU9pb8GnTvlouq-4ffG6srO-",
          ],
          [
            "تلخيص شامل 8",
            "https://drive.google.com/file/d/1gZTOm_Cc8zX7PIaZngBmVxMiB57zDZzX/view",
          ],
          [
            "الفقرات الخارجية",
            "https://drive.google.com/drive/folders/1aoN6vYH58P_mzma94sdxmZp59mUpT0mz",
          ],
          [
            "حلول الكتاب",
            "https://drive.google.com/file/d/1ZHZjoyXOyrRHCKQ6e4xt-1ExSKrv2MQd/view",
          ],
        ],
      },
      {
        title: "Midterm",
        icon: "M",
        links: [
          [
            "نموذج 1",
            "https://drive.google.com/drive/folders/16BKaxBXm0cf_OmJ5qPus6gEDTiaNF8CZ",
          ],
          [
            "نموذج 2",
            "https://drive.google.com/drive/folders/1E0fX4y0OrpzZ2aEApCr-Tndm_2o311Jy",
          ],
        ],
      },
      {
        title: "Final",
        icon: "F",
        links: [
          [
            "مجموعة أسئلة 1",
            "https://drive.google.com/drive/mobile/folders/11Ug0QxTRTbwT2gyHszn3M232n7-LnCVu",
          ],
          [
            "مجموعة أسئلة 2",
            "https://drive.google.com/drive/u/0/folders/17Nt_PC6ggVyZ0TLjKyLRX-8SFvpZfPDH",
          ],
        ],
      },
    ],
  },

  english102: {
    title: "English 102",
    code: "ENG-102",
    description:
      "الكتاب والمحاضرات والتلاخيص ومعاني الكلمات ونماذج الـ Midterm والـ Final.",
    englishGroup: true,
    sections: [
      {
        title: "الكتاب الأساسي",
        icon: "▣",
        links: [
          [
            "فتح الكتاب",
            "https://drive.google.com/file/d/1A-YjuBsrOU8rCVWnkIqDmgDYgSfArlf9/view",
          ],
        ],
      },
      {
        title: "المحاضرات المسجلة",
        icon: "▶",
        links: [
          [
            "فتح المحاضرات",
            "https://drive.google.com/drive/folders/1udiexKT_d_FR8dqqJbwdsy2ynvvRoDtQ",
          ],
        ],
      },
      {
        title: "التلاخيص ومعاني الكلمات",
        icon: "≡",
        links: [
          [
            "تلخيص شامل 1",
            "https://drive.google.com/drive/u/0/folders/1SwIVcWRBxxicqGJBFXfVRCGx8aMwlEtH",
          ],
          [
            "تلخيص شامل 2",
            "https://drive.google.com/file/d/1CiJ_wPRVMsfELFsozLoa5Z13NaPxdpVz/view",
          ],
          [
            "تلخيص شامل 3",
            "https://drive.google.com/drive/folders/1YBdWEFvmwwgvbjy2mqeiveZPyCUiKPBY",
          ],
          [
            "تلخيص شامل 4",
            "https://drive.google.com/drive/folders/1FA7F9AJRa-bZjslUCHUKtfOhOnZyM8YD",
          ],
          [
            "تلخيص شامل 5",
            "https://drive.google.com/drive/folders/1fjoftYANJ6OObbZFX9hEYRy59agnS6sy",
          ],
          [
            "تلخيص شامل 6",
            "https://drive.google.com/drive/folders/12mSNXxHNE99GVdALwvbErMx--UsinOgC",
          ],
          [
            "معاني الكلمات 1",
            "https://drive.google.com/drive/u/2/folders/1JufjWuI-kHa2QanBaKSMtQXu59VaBEGt",
          ],
          [
            "معاني الكلمات 2",
            "https://drive.google.com/file/d/1HwSqTPRCqaHAHtV9PiZMkSTmlg79105R/view",
          ],
        ],
      },
      {
        title: "Midterm",
        icon: "M",
        links: [
          [
            "نموذج 1",
            "https://drive.google.com/drive/folders/1dvmmU2_XWc8fD6hPA6buVoxMlre85vwP",
          ],
          [
            "نموذج 2",
            "https://drive.google.com/file/d/1qmQpYm-qLpaewzK3Dmjb5_L4Ciic3kqk/view",
          ],
        ],
      },
      {
        title: "Final",
        icon: "F",
        links: [
          [
            "مجموعة أسئلة 1",
            "https://drive.google.com/drive/u/2/folders/15Dw6NZ64oSBfWr7UeqALHRkoDuMoohVT",
          ],
          [
            "نموذج 2",
            "https://drive.google.com/file/d/1b26sr-WOCV4ZCw9Dy3_1bHM3D6boCmyb/view",
          ],
          [
            "نموذج 3",
            "https://drive.google.com/file/d/1onZdZsyFXm8tY78JbunoIyBEhm84-UKq/view",
          ],
          [
            "مجموعة أسئلة 4",
            "https://drive.google.com/drive/folders/1EbSrcWi0nJrG5D2E9w5vuK3w3uIpzr6N",
          ],
        ],
      },
    ],
  },

  computerAi: {
    title: "مهارات الحاسوب والذكاء الاصطناعي",
    code: "CS-AI",
    description:
      "السلايدات والمحاضرات والتلاخيص والملفات العملية وأسئلة الامتحانات.",
    sections: [
      {
        title: "سلايدات المادة",
        icon: "▣",
        links: [
          [
            "السلايدات 1",
            "https://drive.google.com/file/d/18ipJCVV1GhLwQYIFSZRtyfCgbsjJkOK2/view",
          ],
          [
            "السلايدات 2",
            "https://drive.google.com/drive/u/0/folders/1q8iMpTZK3sfwI7Qwd9J_YO-xeevgP1rN",
          ],
        ],
      },
      {
        title: "المحاضرات المسجلة",
        icon: "▶",
        links: [
          [
            "د. مي كنعان",
            "https://www.youtube.com/playlist?list=PLg9wrIfTPI6Nf6LGxW_9mxdKriBnWwn2Y",
          ],
        ],
      },
      {
        title: "التلاخيص والملفات العملية",
        icon: "≡",
        links: [
          [
            "تلاخيص الطلاب",
            "https://drive.google.com/drive/u/0/folders/1k75d8LT0CATJPmYERPqXMkqKm_kKJBY7",
          ],
          [
            "Word / Excel",
            "https://drive.google.com/drive/folders/1fWyoEr8r0B_SC1oteLm2E5xg9SFv69Aw",
          ],
          [
            "Excel — ملفات إضافية",
            "https://drive.google.com/drive/u/0/folders/1jhwj4HlRLaBdKD0fVaVyjcqaU-S8l0O1",
          ],
          [
            "PowerPoint",
            "https://drive.google.com/drive/folders/1fMLugatII9_fTtnxR-eT3caok5JgF_Vp",
          ],
        ],
      },
      {
        title: "Midterm",
        icon: "M",
        links: [
          [
            "نموذج 1",
            "https://drive.google.com/drive/folders/10IbyIZVoo2GDkdOzZrS8WwZxt9sxxddU",
          ],
          [
            "نموذج 2",
            "https://drive.google.com/drive/folders/1M1aZuzK55z5RLdT6LsEI6Ib5Q_OEskoC",
          ],
          [
            "نموذج 3",
            "https://drive.google.com/drive/folders/1bjHOGsXd1wen61hvugJ2PBQRDhrddVPo",
          ],
          [
            "نموذج 4",
            "https://drive.google.com/drive/folders/10cDiqXj3Qu83eiiMM7LCyYClZOObbi-6",
          ],
          [
            "نموذج 5",
            "https://drive.google.com/drive/folders/10mkw96--oQFFp6dyhAYSmQLs5aqvqV-b",
          ],
          [
            "نموذج 6",
            "https://drive.google.com/drive/folders/15dXxRcOqDAsGuhfef2gPwCC05RvtjbnC",
          ],
        ],
      },
      {
        title: "عملي",
        icon: "P",
        links: [
          [
            "ملفات عملي 1",
            "https://drive.google.com/drive/folders/1l0cH7swGW7qxU_3sO_HSR7GgV5mL5nz8",
          ],
          [
            "ملفات عملي 2",
            "https://drive.google.com/drive/folders/1YZFsSUgFE_0rp_xBAFmNxuTvM17R7vul",
          ],
        ],
      },
    ],
  },

  community: {
    title: "خدمة المجتمع والتنمية المستدامة",
    code: "CSV",
    description:
      "دليل مبسط لمتطلبات الجانب النظري والعملي وخيارات إتمام الساعات.",
    special: true,
    sections: [],
  },
};

const courseOrder = [
  "palestinian",
  "islamic",
  "arabic",
  "remedial",
  "english101",
  "english102",
  "computerAi",
  "community",
];

function ExternalLink({ label, href }) {
  return (
    <a
      className="rc-resource-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{label}</span>
      <span className="rc-resource-arrow">↗</span>
    </a>
  );
}

function CommunityGuide() {
  const options = [
    {
      hours: "50 ساعة",
      title: "عمل تطوعي",
      text: "إتمام ساعات تطوعية في جهة معتمدة حسب تعليمات المساق، مع توثيق النشاط بالنموذج المطلوب.",
    },
    {
      hours: "10 ساعات",
      title: "التبرع بالدم",
      text: "التبرع بوحدة دم واحدة يُحتسب ضمن الجانب العملي حسب التعليمات المعتمدة للمساق.",
    },
    {
      hours: "10 ساعات",
      title: "العمل الميداني البيئي",
      text: "المشاركة في نشاط ميداني ينظمه مركز الخدمة المجتمعية ويتم الإعلان عن تفاصيله رسميًا.",
    },
    {
      hours: "20 ساعة",
      title: "بطاقات الخير",
      text: "خيار من خيارات الجانب العملي بحسب الحملات والتعليمات التي يتم اعتمادها خلال الفصل.",
    },
    {
      hours: "50 ساعة",
      title: "كفالة يتيم أو حالة اجتماعية",
      text: "خيار بديل لإتمام الجانب العملي وفق الإجراءات والقيمة والتعليمات المعتمدة.",
    },
  ];

  return (
    <div className="rc-community-guide">
      <section className="rc-community-overview">
        <div className="rc-community-title-row">
          <div>
            <span className="rc-community-kicker">COMMUNITY SERVICE GUIDE</span>
            <h3>خدمة المجتمع والتنمية المستدامة</h3>
            <p>
              دليل مختصر وواضح يساعدك تعرف شو المطلوب منك في المساق وكيف تكمل
              الجانب العملي بطريقة مرتبة.
            </p>
          </div>

          <span className="rc-community-badge">دليل الطالب</span>
        </div>

        <div className="rc-community-success">
          <article>
            <span className="rc-community-step">01</span>
            <div>
              <small>الجانب النظري</small>
              <h4>حضور المحاضرات</h4>
              <p>
                الالتزام بالمحاضرات النظرية حسب برنامج المساق وتعليمات المدرّس.
              </p>
            </div>
          </article>

          <span className="rc-community-plus">+</span>

          <article>
            <span className="rc-community-step">02</span>
            <div>
              <small>الجانب العملي</small>
              <h4>إكمال نشاط مجتمعي</h4>
              <p>
                اختيار أحد الخيارات المعتمدة وإكمال التوثيق والنماذج المطلوبة.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="rc-community-options-clean">
        <div className="rc-community-section-title">
          <span>الجانب العملي</span>
          <h3>خيارات إتمام الساعات</h3>
          <p>اختر الخيار المناسب لك حسب تعليمات الفصل الحالي.</p>
        </div>

        <div className="rc-community-options-list">
          {options.map((option) => (
            <article className="rc-community-option-clean" key={option.title}>
              <div className="rc-community-option-hours">{option.hours}</div>

              <div className="rc-community-option-content">
                <h4>{option.title}</h4>
                <p>{option.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rc-community-checklist-clean">
        <div className="rc-community-section-title">
          <span>قبل ما تبدأ</span>
          <h3>4 خطوات بسيطة</h3>
        </div>

        <div className="rc-community-checklist-grid">
          <article>
            <strong>01</strong>
            <h4>اختَر النشاط</h4>
            <p>حدد الخيار المناسب حسب التعليمات.</p>
          </article>

          <article>
            <strong>02</strong>
            <h4>تأكد من النموذج</h4>
            <p>اعرف النموذج المطلوب قبل التنفيذ.</p>
          </article>

          <article>
            <strong>03</strong>
            <h4>نفّذ ووثّق</h4>
            <p>احتفظ بالتوقيع أو الإثبات المطلوب.</p>
          </article>

          <article>
            <strong>04</strong>
            <h4>سلّم واعتمد</h4>
            <p>تأكد أن نشاطك تم اعتماده رسميًا.</p>
          </article>
        </div>
      </section>

      <aside className="rc-community-note-clean">
        <span>!</span>
        <div>
          <strong>ملاحظة مهمة</strong>
          <p>
            تفاصيل الساعات والجهات والنماذج قد تتغير من فصل لآخر، لذلك اعتمد
            دائمًا إعلان المساق ومركز الخدمة المجتمعية في فصلك الحالي.
          </p>
        </div>
      </aside>
    </div>
  );
}

function RequiredCourses({ navigate }) {
  const [activeCourse, setActiveCourse] = useState(null);
  const [openSection, setOpenSection] = useState(-1);

  const active = activeCourse ? resources[activeCourse] : null;

  const selectCourse = (courseKey) => {
    if (activeCourse === courseKey) {
      setActiveCourse(null);
      setOpenSection(-1);
      return;
    }

    setActiveCourse(courseKey);
    setOpenSection(-1);

    setTimeout(() => {
      document.getElementById("course-resources")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 40);
  };

  return (
    <main className="required-courses-page">
      <div className="rc-background" aria-hidden="true">
        <div className="rc-grid"></div>
        <div className="rc-glow rc-glow-one"></div>
        <div className="rc-glow rc-glow-two"></div>
      </div>

      <section className="rc-hero">
        <div className="rc-shell">
          <button
            type="button"
            className="rc-back"
            onClick={() => navigate("/")}
          >
            <span>→</span>
            <span>العودة للرئيسية</span>
          </button>

          <div className="rc-hero-content">
            <span className="rc-kicker">SHABIBA ACADEMIC RESOURCES</span>

            <h1>
              مساقات <span>إجباري الجامعة</span>
            </h1>

            <p>
              الكتب، المحاضرات، التلاخيص، ونماذج الامتحانات مرتبة بطريقة سريعة
              وواضحة لتوصل للمصدر اللي بدك إياه بدون تدوير.
            </p>

            <div className="rc-hero-tags">
              <span>كتب ومحاضرات</span>
              <span>تلاخيص مرتبة</span>
              <span>Midterm & Final</span>
            </div>
          </div>
        </div>
      </section>

      <section className="rc-courses-section">
        <div className="rc-shell">
          <div className="rc-section-heading">
            <div>
              <span>UNIVERSITY COURSES</span>
              <h2>اختر المساق</h2>
            </div>
            <p>اضغط على أي مساق لعرض جميع مصادره.</p>
          </div>

          <div className="rc-main-grid">
            {["palestinian", "islamic", "arabic"].map((key) => {
              const course = resources[key];

              return (
                <button
                  key={key}
                  type="button"
                  className={`rc-course-card ${
                    activeCourse === key ? "active" : ""
                  }`}
                  onClick={() => selectCourse(key)}
                >
                  <span className="rc-course-code">{course.code}</span>
                  <div>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                  </div>
                  <span className="rc-course-open">←</span>
                </button>
              );
            })}
          </div>

          <div className="rc-english-block">
            <div className="rc-english-heading">
              <div>
                <span className="rc-english-badge">ENGLISH</span>
                <h3>اللغة الإنجليزية</h3>
              </div>
              <p>تنقسم إلى ثلاثة مساقات مستقلة.</p>
            </div>

            <div className="rc-english-grid">
              {["remedial", "english101", "english102"].map((key) => {
                const course = resources[key];

                return (
                  <button
                    key={key}
                    type="button"
                    className={`rc-course-card rc-course-card-english ${
                      activeCourse === key ? "active" : ""
                    }`}
                    onClick={() => selectCourse(key)}
                  >
                    <span className="rc-course-code">{course.code}</span>
                    <div>
                      <h3>{course.title}</h3>
                      <p>{course.description}</p>
                    </div>
                    <span className="rc-course-open">←</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rc-main-grid rc-main-grid-bottom">
            {["computerAi", "community"].map((key) => {
              const course = resources[key];

              return (
                <button
                  key={key}
                  type="button"
                  className={`rc-course-card ${
                    activeCourse === key ? "active" : ""
                  }`}
                  onClick={() => selectCourse(key)}
                >
                  <span className="rc-course-code">{course.code}</span>
                  <div>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                  </div>
                  <span className="rc-course-open">←</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {!active && (
        <section className="rc-empty-state">
          <div className="rc-shell">
            <div className="rc-empty-card">
              <span className="rc-empty-icon">✦</span>
              <div>
                <h3>اختر المساق لعرض المصادر</h3>
                <p>اضغط على أي مساق بالأعلى، واضغط عليه مرة ثانية لإغلاقه.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {active && (
        <section className="rc-resources-section" id="course-resources">
          <div className="rc-shell">
            <div className="rc-resource-header">
              <div className="rc-resource-title">
                <span className="rc-resource-code">{active.code}</span>
                <div>
                  <span className="rc-resource-label">COURSE RESOURCES</span>
                  <h2>{active.title}</h2>
                  <p>{active.description}</p>
                </div>
              </div>
            </div>

            {active.special ? (
              <CommunityGuide />
            ) : (
              <div className="rc-accordion">
                {active.sections.map((section, index) => {
                  const isOpen = openSection === index;

                  return (
                    <article
                      key={`${activeCourse}-${section.title}`}
                      className={`rc-accordion-item ${isOpen ? "open" : ""}`}
                    >
                      <button
                        type="button"
                        className="rc-accordion-trigger"
                        onClick={() => setOpenSection(isOpen ? -1 : index)}
                      >
                        <div className="rc-accordion-title">
                          <span className="rc-accordion-icon">
                            {section.icon}
                          </span>
                          <div>
                            <h3>{section.title}</h3>
                          </div>
                        </div>

                        <span className="rc-accordion-plus">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="rc-accordion-content">
                          <div className="rc-links-grid">
                            {section.links.map(([label, href]) => (
                              <ExternalLink
                                key={`${href}-${label}`}
                                label={label}
                                href={href}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            )}

            <div className="rc-credit">
              <div className="rc-credit-brand">
                <span className="rc-credit-star">✦</span>
                <strong>حركة الشبيبة الطلابية</strong>
                <span className="rc-credit-star">✦</span>
              </div>

              <span className="rc-credit-divider" aria-hidden="true"></span>

              <p>المصادر الأكاديمية مجمّعة ومرتبة لتسهيل وصول الطلبة إليها.</p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default RequiredCourses;
