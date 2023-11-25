import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./styles.css";
import HiddenTopBar from "./HiddenTopBar";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";
import Signin from "./users/signin";

function Kanbas() {
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-01-10",
    endDate: "2023-05-15",
    color: "blue",
  });
  const [courses, setCourses] = useState([]);
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  const addCourse = async () => {
    const response = await axios.post(URL, course);
    console.log(response.data);
    const newCourse = response.data;
    setCourses([newCourse, ...courses]);
    setCourse({ name: "" });
  };
  const deleteCourse = async (courseId) => {
    await axios.delete(`${URL}/${courseId}`);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await axios.put(`${URL}/${course._id}`, course);
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
  useEffect(() => {
    findAllCourses();
  }, []);
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
              <Route path="/signin" element={<Signin />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route
                path="Dashboard"
                element={
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addCourse}
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
