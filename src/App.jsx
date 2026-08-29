import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar.jsx";
import MajorsFooter from "./components/layout/MajorsFooter.jsx";

import Home from "./pages/Home.jsx";
import Majors from "./pages/Majors.jsx";
import MajorDetails from "./pages/MajorDetails.jsx";
import SemesterOne from "./pages/SemesterOne.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  const navigate = (path) => {
    window.history.pushState({}, "", path);

    setCurrentPage(path);

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  useEffect(() => {
    const handleBackForward = () => {
      setCurrentPage(window.location.pathname);

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    };

    window.addEventListener("popstate", handleBackForward);

    return () => {
      window.removeEventListener("popstate", handleBackForward);
    };
  }, []);

  const pathParts = currentPage.split("/").filter(Boolean);

  let page;

  if (currentPage === "/majors") {
    page = <Majors navigate={navigate} />;
  } else if (
    pathParts[0] === "majors" &&
    pathParts[1] &&
    pathParts[2] === "semester-1" &&
    pathParts[3]
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
    pathParts[0] === "majors" &&
    pathParts[1] &&
    pathParts[2] === "semester-1"
  ) {
    const majorId = pathParts[1];

    page = <SemesterOne navigate={navigate} majorId={majorId} />;
  } else if (pathParts[0] === "majors" && pathParts[1]) {
    const majorId = pathParts[1];

    page = <MajorDetails navigate={navigate} majorId={majorId} />;
  } else {
    page = <Home navigate={navigate} />;
  }

  return (
    <>
      <Navbar navigate={navigate} currentPage={currentPage} />

      {page}

      <MajorsFooter />
    </>
  );
}

export default App;
