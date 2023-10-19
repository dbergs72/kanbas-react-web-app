import CourseNavigation from "../CourseNavigation";
import { Routes, Route } from "react-router-dom";
import Modules from "../Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import "../styles.css";
import BreadCrumb from "./BreadCrumb";
import Grades from "../Grades";

function Courses() {
  return (
    <div className={"ps-2"}>
      <div className={"wd-courses-side-nav-and-breadcrumb"}>
        <BreadCrumb />
        <hr />
        <CourseNavigation />
      </div>
      <div className="overflow-y-scroll position-fixed bottom-0 end-0 pe-2 wd-courses-main-content">
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route
            path="Assignments/:assignmentId"
            element={<AssignmentEditor />}
          />
          <Route path="Grades" element={<Grades />} />
        </Routes>
      </div>
    </div>
  );
}

export default Courses;
