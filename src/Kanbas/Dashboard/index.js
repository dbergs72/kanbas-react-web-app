import { Link } from "react-router-dom";
import "./style.css";
import "../styles.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdFindInPage } from "react-icons/md";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div>
      <div className="d-flex flex-column ps-2">
        <div>
          <span className="wd-dashboard-header">Dashboard</span>
          <hr className="mt-0" />
        </div>
        <div className={"ps-4"}>
          <span className="wd-dashboard-subheader">Published Courses (24)</span>
          <hr className="mt-0" />
          <div className={"mb-2"} style={{ width: 300 }}>
            <input
              value={course.name}
              className="form-control"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <input
              value={course.number}
              className="form-control"
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
            />
            <input
              value={course.startDate}
              className="form-control"
              type="date"
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
            />
            <input
              value={course.endDate}
              a
              className="form-control"
              type="date"
              onChange={(e) =>
                setCourse({ ...course, endDate: e.target.value })
              }
            />
            <button className={"btn btn-light"} onClick={updateCourse}>
              Update
            </button>
            <button className={"btn btn-success"} onClick={addNewCourse}>
              Add
            </button>
          </div>
          <div className="d-flex flex-wrap">
            {courses.map((course, index) => (
              <Link
                key={index}
                to={`/Kanbas/Courses/${course._id}`}
                className="card wd-card-style wd-rmv-text-decoration"
              >
                <div
                  className="wd-card-image"
                  style={{ backgroundColor: course.color }}
                >
                  <BsThreeDotsVertical
                    className={"wd-card-eclipses-vertical"}
                    size={20}
                  />
                </div>
                <div className="card-body">
                  <h5
                    className="wd-dash-card-title text-truncate"
                    style={{ color: course.color }}
                  >
                    {course.number} {course.name}
                  </h5>

                  <div className="card-text">CS4550.12631.202410</div>
                  <div className="card-text wd-font-small text-truncate">
                    202410_1 Fall 2023 Semester Full Term
                  </div>
                  <MdFindInPage size={20} />
                  <button
                    className={"btn btn-danger btn-sm p-1 mt-3"}
                    style={{ float: "right" }}
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className={"btn btn-light btn-sm p-1 mt-3"}
                    style={{ float: "right" }}
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
