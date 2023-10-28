import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./styles.css";
import HiddenTopBar from "./HiddenTopBar";
import { useState } from "react";
import db from "./Database";
import { Provider } from "react-redux";
import store from "./store";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-01-10",
    endDate: "2023-05-15",
    color: "blue",
  });
  const addNewCourse = () => {
    setCourses([
      ...courses,
      { ...course, _id: new Date().getTime().toString() },
    ]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      }),
    );
  };
  return (
    <div>
      <Provider store={store}>
        <div className={"wd-hidden-top-bar w-100"}>
          <HiddenTopBar />
        </div>
        <div className="d-flex" style={{ height: 100 }}>
          <div className={"wd-kanbas-nav-menu"}>
            <KanbasNavigation />
          </div>
          <div className={"w-100"} id={"wd-kanbas-sub-screen"}>
            <Routes>
              <Route path="/" element={<Navigate to={"Dashboard"} />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route
                path="Dashboard"
                element={
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                }
              />
              <Route
                path="Courses/:courseId/*"
                element={<Courses courses={courses} />}
              />
            </Routes>
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default Kanbas;
