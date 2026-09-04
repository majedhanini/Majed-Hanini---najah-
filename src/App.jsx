import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import MajorsFooter from "./components/layout/MajorsFooter";
import Home from "./pages/Home";
import Majors from "./pages/Majors";
import MajorDetails from "./pages/MajorDetails";
import SemesterOne from "./pages/SemesterOne";
import CourseDetails from "./pages/CourseDetails";
import FacultyDirectory from "./pages/FacultyDirectory";
import GpaCalculator from "./pages/GpaCalculator";
import RequiredCourses from "./pages/RequiredCourses";
import RoomsGuide from "./pages/RoomsGuide";
import StudentGuide from "./pages/StudentGuide";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = (path) => {
    if (window.location.pathname === path) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      return;
    }

    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  useEffect(() => {
    // منع المتصفح من تذكر مكان الـ scroll بين الصفحات
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // مهم جدًا:
  // بعد تغيير الصفحة ورسمها، ارجع دائمًا إلى أعلى الصفحة
  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    });
  }, [currentPath]);

  const cleanPath =
    currentPath !== "/" && currentPath.endsWith("/")
      ? currentPath.slice(0, -1)
      : currentPath;

  const pathParts = cleanPath.split("/").filter(Boolean);

  let page = null;

  if (cleanPath === "/") {
    page = <Home navigate={navigate} />;
  } else if (cleanPath === "/faculty") {
    page = <FacultyDirectory navigate={navigate} />;
  } else if (cleanPath === "/gpa-calculator") {
    page = <GpaCalculator navigate={navigate} />;
  } else if (cleanPath === "/required-courses") {
    page = <RequiredCourses navigate={navigate} />;
  } else if (cleanPath === "/rooms-guide") {
    page = <RoomsGuide navigate={navigate} />;
  } else if (cleanPath === "/student-guide") {
    page = <StudentGuide navigate={navigate} />;
  } else if (cleanPath === "/majors") {
    page = <Majors navigate={navigate} />;
  } else if (
    pathParts.length === 4 &&
    pathParts[0] === "majors" &&
    pathParts[2] === "semester-1"
  ) {
    const majorId = pathParts[1];
    const courseId = pathParts[3];

    page = (
      <CourseDetails
        navigate={navigate}
        majorId={majorId}
        courseId={courseId}
      />
    );
  } else if (
    pathParts.length === 3 &&
    pathParts[0] === "majors" &&
    pathParts[2] === "semester-1"
  ) {
    page = <SemesterOne navigate={navigate} majorId={pathParts[1]} />;
  } else if (pathParts.length === 2 && pathParts[0] === "majors") {
    page = <MajorDetails navigate={navigate} majorId={pathParts[1]} />;
  } else {
    page = (
      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <div>
          <h1>الصفحة غير موجودة</h1>

          <button type="button" onClick={() => navigate("/")}>
            العودة إلى الرئيسية
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <Navbar navigate={navigate} currentPage={cleanPath} />

      {page}

      <MajorsFooter />
    </>
  );
}

export default App;
