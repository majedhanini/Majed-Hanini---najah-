import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import MajorsFooter from "./components/layout/MajorsFooter";

import Home from "./pages/Home";
import Majors from "./pages/Majors";
import MajorDetails from "./pages/MajorDetails";
import SemesterOne from "./pages/SemesterOne";
import CourseDetails from "./pages/CourseDetails";
import FacultyDirectory from "./pages/FacultyDirectory";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = (path) => {
    if (window.location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    window.history.pushState({}, "", path);

    setCurrentPath(path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);

      window.scrollTo({
        top: 0,
      });
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const cleanPath =
    currentPath !== "/" && currentPath.endsWith("/")
      ? currentPath.slice(0, -1)
      : currentPath;

  const pathParts = cleanPath.split("/").filter(Boolean);

  let page = null;

  /* =========================================================
     HOME
  ========================================================= */

  if (cleanPath === "/") {
    page = <Home navigate={navigate} />;
  } else if (cleanPath === "/faculty") {

  /* =========================================================
     FACULTY DIRECTORY
  ========================================================= */
    page = <FacultyDirectory navigate={navigate} />;
  } else if (cleanPath === "/majors") {

  /* =========================================================
     MAJORS
  ========================================================= */
    page = <Majors navigate={navigate} />;
  } else if (

  /* =========================================================
     COURSE DETAILS

     /majors/:majorId/semester-1/:courseId

     مهم:
     لازم Route المساق ينفحص قبل Route الفصل
  ========================================================= */
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

  /* =========================================================
     SEMESTER ONE

     /majors/:majorId/semester-1
  ========================================================= */
    pathParts.length === 3 &&
    pathParts[0] === "majors" &&
    pathParts[2] === "semester-1"
  ) {
    const majorId = pathParts[1];

    page = <SemesterOne navigate={navigate} majorId={majorId} />;
  } else if (pathParts.length === 2 && pathParts[0] === "majors") {

  /* =========================================================
     MAJOR DETAILS

     /majors/:majorId
  ========================================================= */
    const majorId = pathParts[1];

    page = <MajorDetails navigate={navigate} majorId={majorId} />;
  } else {

  /* =========================================================
     NOT FOUND
  ========================================================= */
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

  /* =========================================================
     APP
  ========================================================= */

  return (
    <>
      <Navbar navigate={navigate} currentPage={cleanPath} />

      {page}

      <MajorsFooter />
    </>
  );
}

export default App;
