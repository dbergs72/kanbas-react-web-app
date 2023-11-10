import CourseNavigation from "../CourseNavigation";
import { Routes, Route, useParams } from "react-router-dom";
import Modules from "./Modules";
import Home from "../Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import "../styles.css";
import BreadCrumb from "./BreadCrumb";
import Grades from "../Grades";
import { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  console.log(course);

  return (
    <div className={"ps-2"}>
      <div className={"wd-courses-side-nav-and-breadcrumb"}>
        <BreadCrumb course={course} />
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
