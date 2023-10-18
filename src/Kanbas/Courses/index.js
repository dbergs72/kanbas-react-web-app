import CourseNavigation from "../CourseNavigation";
import { Routes, Route } from "react-router-dom";
import Modules from "../Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import "./style.css";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

function Courses() {
  return (
    <div className={"ps-2"}>
      <BreadCrumb className={"mb-2"} />
      <hr />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0 pe-2"
          style={{
            left: "234px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
