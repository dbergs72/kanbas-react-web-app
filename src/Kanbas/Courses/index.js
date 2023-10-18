import { useParams } from "react-router";
import CourseNavigation from "../CourseNavigation";
import db from "../Database";
import { Routes, Route } from "react-router-dom";
import Modules from "../Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import {FaGripLines} from "react-icons/fa";
import "./style.css";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div className={"container"}>
      <div className={"d-flex flex-row"}>
        <FaGripLines  size={30} className={"wd-kanbas-red"} style={{ paddingTop: 10, paddingLeft: 10}}/>
        <ol className="breadcrumb pt-2 ps-4">
          <li className="breadcrumb-item wd-kanbas-red">{course.name}</li>
          <li className="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </div>
      <hr className={"mt-0"}/>
      <div className="row">
        <div className="col">
          <CourseNavigation />
        </div>
        <div className="col">
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
      {/* <pre>
        <code>{JSON.stringify(db.courses, null, 2)}</code>
      </pre> */}
    </div>
  );
}

export default Courses;
