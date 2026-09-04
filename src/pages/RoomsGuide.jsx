import { useMemo, useState } from "react";
import "../styles/rooms-guide.css";

const buildings = [
  { number: "1", name: "الإدارة", campus: "القديم" },
  {
    number: "2",
    name: "الأنشطة الطلابية + قسم اللغة الإنجليزية وآدابها",
    campus: "القديم",
  },
  { number: "3", name: "مدرجات ظافر المصري", campus: "القديم" },
  {
    number: "4",
    name: "كلية العلوم الإنسانية والتربوية + مجمع النجاح",
    campus: "القديم",
  },
  {
    number: "5",
    name: "كلية العلوم الإنسانية والتربوية + مجمع النجاح",
    campus: "القديم",
  },
  { number: "6", name: "كلية الأعمال والاتصال", campus: "القديم" },
  { number: "7", name: "كلية الشريعة", campus: "القديم" },
  {
    number: "8",
    name: "مركز النجاح التعليمي لطب وجراحة الفم والأسنان",
    campus: "القديم",
  },
  { number: "9", name: "مكتبة الحرم القديم", campus: "القديم" },

  { number: "10", name: "قسم التربية الرياضية", campus: "الجديد" },
  { number: "11", name: "كلية الهندسة", campus: "الجديد" },
  {
    number: "12",
    name: "المحلات التجارية + الكافتيريا + قاعات التمريض",
    campus: "الجديد",
  },
  { number: "13", name: "المسجد الجامعي", campus: "الجديد" },
  {
    number: "14",
    name: "كلية العلوم + أقسام تكنولوجيا المعلومات",
    campus: "الجديد",
  },
  { number: "15", name: "مكتبة الحرم الجديد + مركز الإعلام", campus: "الجديد" },
  {
    number: "16",
    name: "مسرح المرحوم حكمت المصري (المكشوف)",
    campus: "الجديد",
  },
  { number: "17", name: "كلية الطب وعلوم الصحة", campus: "الجديد" },
  { number: "18", name: "المستودع الكيميائي", campus: "الجديد" },
  { number: "19", name: "كلية الطب وعلوم الصحة", campus: "الجديد" },
  { number: "20", name: "ساحات الحرم الجديد", campus: "الجديد" },
  { number: "22", name: "كلية الفنون الجميلة", campus: "الجديد" },
  {
    number: "23",
    name: "مسرح الأمير تركي بن عبد العزيز (المغلق)",
    campus: "الجديد",
  },
  {
    number: "24",
    name: "المعهد الكوري + دائرة طب وجراحة الفم والأسنان",
    campus: "الجديد",
  },
  { number: "25", name: "المعهد الفلسطيني للطفولة", campus: "الجديد" },
  {
    number: "26",
    name: "كلية القانون والعلوم السياسية + أقسام الإعلام",
    campus: "الجديد",
  },
  { number: "27", name: "المراكز العلمية", campus: "الجديد" },
  { number: "28", name: "العيادات الخارجية - المعهد الكوري", campus: "الجديد" },
  {
    number: "29",
    name: "قاعات تدريس طب الأسنان - المعهد الكوري",
    campus: "الجديد",
  },

  {
    number: "32",
    name: "أكاديمية النجاح للتجميل والعناية بالبشرة",
    campus: "مقابل الحرم القديم",
  },
  { number: "36", name: "حديقة النجاح للابتكار", campus: "مقابل الحرم القديم" },
];

const auditoriums = [
  {
    code: "3001",
    name: "مدرج ظافر المصري",
    location: "الحرم القديم - نهاية الساحة الرئيسية",
  },
  {
    code: "11G0060",
    name: "مدرج الهندسة",
    location: "الحرم الجديد - كلية الهندسة - الطابق GF",
  },
  {
    code: "14B2000",
    name: "مدرج العلوم",
    location: "الحرم الجديد - ما بين كليتي العلوم والهندسة",
  },
  {
    code: "17B1170",
    name: "مدرج الطب",
    location: "الحرم الجديد - مبنى الطب (17) - الطابق B1",
  },
  {
    code: "17B2170",
    name: "مدرج الطب",
    location: "الحرم الجديد - مبنى الطب (17) - الطابق B2",
  },
  {
    code: "19G0020",
    name: "مدرج الصيدلة",
    location: "الحرم الجديد - مبنى الطب (19) - الطابق GF",
  },
];

const examples = ["73100", "81040", "14B4040", "17B1070"];

function normalize(value = "") {
  return String(value).trim().toUpperCase().replace(/\s+/g, "");
}

function normalizeSearch(value = "") {
  const arabicDigits = "٠١٢٣٤٥٦٧٨٩";
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";

  return (
    String(value)
      // iPhone / RTL keyboards may insert invisible direction marks.
      .replace(/[\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, "")
      .trim()
      .toLowerCase()
      .replace(/[٠-٩]/g, (digit) => String(arabicDigits.indexOf(digit)))
      .replace(/[۰-۹]/g, (digit) => String(persianDigits.indexOf(digit)))
      .replace(/[أإآ]/g, "ا")
      .replace(/ة/g, "ه")
      .replace(/ى/g, "ي")
      .replace(/[ًٌٍَُِّْـ]/g, "")
      .replace(/[^a-z0-9\u0600-\u06FF]+/gi, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
}

function getBuilding(number) {
  return buildings.find((building) => building.number === number);
}

function decodeRoom(rawValue) {
  const value = normalize(rawValue);

  if (!value) return null;

  const auditorium = auditoriums.find((item) => normalize(item.code) === value);

  if (auditorium) {
    return {
      type: "auditorium",
      code: auditorium.code,
      name: auditorium.name,
      location: auditorium.location,
    };
  }

  if (value.length < 5) {
    return { type: "invalid" };
  }

  const possibleBuildings = buildings
    .map((building) => building.number)
    .sort((a, b) => b.length - a.length);

  const buildingNumber = possibleBuildings.find((number) =>
    value.startsWith(number),
  );

  if (!buildingNumber) {
    return { type: "invalid" };
  }

  const remaining = value.slice(buildingNumber.length);

  if (remaining.length < 4) {
    return { type: "invalid" };
  }

  const room = remaining.slice(-3);
  const floor = remaining.slice(0, -3);

  if (!floor || !/^[A-Z0-9]+$/.test(floor) || !/^\d{3}$/.test(room)) {
    return { type: "invalid" };
  }

  const building = getBuilding(buildingNumber);

  return {
    type: "room",
    code: value,
    buildingNumber,
    buildingName: building?.name || "غير معروف",
    campus: building?.campus || "غير معروف",
    floor,
    room,
  };
}

function RoomsGuide({ navigate }) {
  const [roomCode, setRoomCode] = useState("");
  const [decoded, setDecoded] = useState(null);
  const [buildingSearch, setBuildingSearch] = useState("");

  const filteredBuildings = useMemo(() => {
    const query = normalizeSearch(buildingSearch);

    if (!query) {
      return buildings;
    }

    const queryParts = query.split(" ").filter(Boolean);

    return buildings.filter((building) => {
      const number = normalizeSearch(building.number);
      const name = normalizeSearch(building.name);
      const campus = normalizeSearch(building.campus);
      const searchableText = `${number} ${name} ${campus}`;

      // رقم المبنى: 11 أو ١١ على الهاتف لازم يطابق مباشرة.
      if (queryParts.length === 1 && /^\d+$/.test(queryParts[0])) {
        return number.includes(queryParts[0]);
      }

      // في البحث النصي، كل كلمة كتبها المستخدم لازم تكون موجودة.
      return queryParts.every((part) => searchableText.includes(part));
    });
  }, [buildingSearch]);

  const campusGroups = useMemo(() => {
    return [
      {
        key: "old",
        title: "الحرم القديم",
        subtitle: "مباني ومرافق الحرم القديم",
        items: filteredBuildings.filter(
          (building) => building.campus === "القديم",
        ),
      },
      {
        key: "new",
        title: "الحرم الجديد",
        subtitle: "مباني ومرافق الحرم الجديد",
        items: filteredBuildings.filter(
          (building) => building.campus === "الجديد",
        ),
      },
      {
        key: "outside",
        title: "مقابل الحرم القديم",
        subtitle: "مبانٍ ومرافق تقع مقابل الحرم القديم",
        items: filteredBuildings.filter(
          (building) => building.campus === "مقابل الحرم القديم",
        ),
      },
    ].filter((group) => group.items.length > 0);
  }, [filteredBuildings]);

  const handleDecode = (event) => {
    event.preventDefault();
    setDecoded(decodeRoom(roomCode));
  };

  const useExample = (example) => {
    setRoomCode(example);
    setDecoded(decodeRoom(example));
  };

  return (
    <main className="rooms-guide-page">
      <div className="rooms-guide-bg" aria-hidden="true">
        <div className="rooms-guide-grid"></div>
        <div className="rooms-guide-glow rooms-guide-glow-one"></div>
        <div className="rooms-guide-glow rooms-guide-glow-two"></div>
      </div>

      {/* HERO */}
      <section className="rooms-hero">
        <div className="rooms-shell">
          <button
            type="button"
            className="rooms-back"
            onClick={() => navigate("/")}
          >
            <span>→</span>
            <span>العودة للرئيسية</span>
          </button>

          <div className="rooms-hero-content">
            <span className="rooms-kicker">AN-NAJAH CAMPUS GUIDE</span>

            <h1>
              دليل <span>القاعات والمباني</span>
            </h1>

            <p>
              اكتب رقم قاعتك كما يظهر في زاجل، والموقع بساعدك تفهم رقم المبنى،
              الطابق، والقاعة، بالإضافة إلى دليل سريع للمباني والمدرجات.
            </p>
          </div>
        </div>
      </section>

      {/* VIRTUAL TOUR */}
      <section className="rooms-virtual-tour-section">
        <div className="rooms-shell">
          <div className="rooms-virtual-tour-card">
            <div className="rooms-virtual-tour-content">
              <span className="rooms-virtual-tour-kicker">
                VIRTUAL CAMPUS TOUR
              </span>

              <h2>جولة افتراضية في الجامعة</h2>

              <p>
                استكشف مرافق جامعة النجاح الوطنية بشكل افتراضي قبل ما توصل،
                وتعرّف على المباني والساحات والمرافق بطريقة أسهل وأوضح.
              </p>

              <a
                className="rooms-virtual-tour-button"
                href="https://virtualtour.najah.edu/?fbclid=IwdGRjcAT9UdJjbGNrBP1RynBkb2YFZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMzUwNjg1NTMxNzI4AAEeUGKW3w-f1u6OV2scPdLEqydCtioT1lEotUz01vVL1fDVO2OvxHZ9BQ3XXgk_aem_SqO3RSyoOLQfrjVxN8ZibQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>ابدأ الجولة الافتراضية</span>
                <span>↗</span>
              </a>
            </div>

            <div className="rooms-virtual-tour-visual" aria-hidden="true">
              <div className="rooms-virtual-tour-orbit"></div>
              <div className="rooms-virtual-tour-icon">360°</div>
              <span>EXPLORE NAJAH</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH / ROOM DECODER */}
      <section className="rooms-decoder-section">
        <div className="rooms-shell">
          <div className="rooms-decoder-card">
            <div className="rooms-decoder-head">
              <div>
                <span>ROOM DECODER</span>
                <h2>وين قاعتي؟</h2>
                <p>أدخل رقم القاعة كاملًا كما هو مكتوب في زاجل.</p>
              </div>

              <div className="rooms-decoder-chip">بحث سريع</div>
            </div>

            <form className="rooms-search-form" onSubmit={handleDecode}>
              <input
                type="text"
                value={roomCode}
                onChange={(event) => setRoomCode(event.target.value)}
                placeholder="مثال: 14B4040"
                aria-label="رقم القاعة"
              />

              <button type="submit">فك رقم القاعة</button>
            </form>

            <div className="rooms-examples">
              <span>جرّب مثال:</span>

              {examples.map((example) => (
                <button
                  type="button"
                  key={example}
                  onClick={() => useExample(example)}
                >
                  {example}
                </button>
              ))}
            </div>

            {decoded?.type === "room" && (
              <div className="rooms-result">
                <div className="rooms-result-main">
                  <span className="rooms-result-label">نتيجة البحث</span>
                  <strong>{decoded.code}</strong>
                  <p>{decoded.buildingName}</p>
                </div>

                <div className="rooms-result-details">
                  <article>
                    <span>المبنى</span>
                    <strong>{decoded.buildingNumber}</strong>
                  </article>

                  <article>
                    <span>الطابق</span>
                    <strong>{decoded.floor}</strong>
                  </article>

                  <article>
                    <span>القاعة</span>
                    <strong>{decoded.room}</strong>
                  </article>

                  <article>
                    <span>الحرم</span>
                    <strong>{decoded.campus}</strong>
                  </article>
                </div>
              </div>
            )}

            {decoded?.type === "auditorium" && (
              <div className="rooms-result rooms-result-auditorium">
                <div className="rooms-result-main">
                  <span className="rooms-result-label">مدرج مصنّف</span>
                  <strong>{decoded.code}</strong>
                  <p>{decoded.name}</p>
                </div>

                <div className="rooms-auditorium-location">
                  <span>المكان</span>
                  <strong>{decoded.location}</strong>
                </div>
              </div>
            )}

            {decoded?.type === "invalid" && (
              <div className="rooms-error">
                <span>!</span>

                <div>
                  <strong>ما قدرنا نحلل الرقم</strong>
                  <p>تأكد إنك كتبت رقم القاعة كاملًا مثل ما هو ظاهر في زاجل.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HOW TO READ ROOM NUMBER */}
      <section className="rooms-explain-section">
        <div className="rooms-shell">
          <div className="rooms-section-heading">
            <div>
              <span>HOW IT WORKS</span>
              <h2>كيف تقرأ رقم القاعة؟</h2>
            </div>

            <p>الرقم يتكوّن من رقم المبنى، ثم الطابق، ثم رقم القاعة.</p>
          </div>

          <div className="rooms-explain-grid">
            <article>
              <strong>73100</strong>

              <div className="rooms-code-breakdown">
                <span>
                  <b>7</b> المبنى
                </span>

                <span>
                  <b>3</b> الطابق
                </span>

                <span>
                  <b>100</b> القاعة
                </span>
              </div>

              <p>كلية الشريعة — الطابق الثالث — القاعة 100</p>
            </article>

            <article>
              <strong>14B4040</strong>

              <div className="rooms-code-breakdown">
                <span>
                  <b>14</b> المبنى
                </span>

                <span>
                  <b>B4</b> الطابق
                </span>

                <span>
                  <b>040</b> القاعة
                </span>
              </div>

              <p>كلية العلوم — الطابق B4 — القاعة 040</p>
            </article>
          </div>
        </div>
      </section>

      {/* BUILDINGS */}
      <section className="rooms-buildings-section">
        <div className="rooms-shell">
          <div className="rooms-section-heading rooms-section-heading-search">
            <div>
              <span>BUILDINGS DIRECTORY</span>
              <h2>دليل المباني</h2>
            </div>

            <div className="rooms-building-search-wrap">
              <input
                className="rooms-building-search"
                type="text"
                inputMode="search"
                enterKeyHint="search"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                value={buildingSearch}
                onChange={(event) => setBuildingSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    event.currentTarget.blur();
                  }
                }}
                placeholder="ابحث برقم أو اسم المبنى..."
                aria-label="البحث في المباني"
                dir="auto"
              />

              {buildingSearch && (
                <button
                  type="button"
                  className="rooms-building-search-clear"
                  onClick={() => setBuildingSearch("")}
                  aria-label="مسح البحث"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {campusGroups.length > 0 ? (
            <div className="rooms-campus-sections">
              {campusGroups.map((group) => (
                <section className="rooms-campus-group" key={group.key}>
                  <div className="rooms-campus-group-head">
                    <div>
                      <span className="rooms-campus-group-kicker">
                        {group.key === "old"
                          ? "OLD CAMPUS"
                          : group.key === "new"
                            ? "NEW CAMPUS"
                            : "NEAR OLD CAMPUS"}
                      </span>

                      <h3>{group.title}</h3>
                      <p>{group.subtitle}</p>
                    </div>
                  </div>

                  <div className="rooms-building-grid">
                    {group.items.map((building) => (
                      <article
                        className="rooms-building-card"
                        key={`${building.number}-${building.name}`}
                      >
                        <div className="rooms-building-number">
                          {building.number}
                        </div>

                        <div>
                          <h3>{building.name}</h3>

                          <span
                            className={`rooms-campus-badge ${
                              building.campus === "القديم"
                                ? "old"
                                : building.campus === "مقابل الحرم القديم"
                                  ? "outside"
                                  : "new"
                            }`}
                          >
                            {building.campus}
                          </span>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="rooms-no-results">ما في مبنى مطابق لبحثك.</div>
          )}
        </div>
      </section>

      {/* AUDITORIUMS */}
      <section className="rooms-auditoriums-section">
        <div className="rooms-shell">
          <div className="rooms-section-heading">
            <div>
              <span>AUDITORIUMS</span>
              <h2>المدرجات المصنّفة</h2>
            </div>

            <p>أرقام المدرجات ومكانها حسب الدليل المرفق.</p>
          </div>

          <div className="rooms-auditoriums-list">
            {auditoriums.map((auditorium) => (
              <article className="rooms-auditorium-card" key={auditorium.code}>
                <div className="rooms-auditorium-code">{auditorium.code}</div>

                <div>
                  <h3>{auditorium.name}</h3>
                  <p>{auditorium.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default RoomsGuide;
