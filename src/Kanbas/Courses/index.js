import { useParams } from "react-router";
import CourseNavigation from "../CourseNavigation";
import db from "../Database";
import {Routes, Route, useLocation} from "react-router-dom";
import Modules from "../Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import {FaGripLines} from "react-icons/fa";
import "./style.css";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  let course = db.courses.find((course) => course._id === courseId);
  if (course === undefined) {
    course = {name: "Courses"};
  }
  return (
    <div className={"ps-2"}>
      <div className={"d-flex flex-row"}>
        <FaGripLines  size={30} className={"wd-kanbas-red"} style={{ paddingTop: 10, paddingLeft: 10}}/>
        <ol className="breadcrumb pt-2 ps-4">
          <li className="breadcrumb-item wd-kanbas-red">{course.name}</li>
          <li className="breadcrumb-item active" aria-current="page">{pathname.substring(pathname.lastIndexOf("/") + 1)}</li>
        </ol>
      </div>
      <hr className={"mt-0"}/>
      <CourseNavigation />
      <div>
        <div className="overflow-y-scroll position-fixed bottom-0 end-0"
         style={{
           left: "234px",
           top: "50px",
         }}>
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
