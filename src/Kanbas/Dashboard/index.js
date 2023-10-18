import db from "../Database";
import { Link } from "react-router-dom";
import "./style.css";
import "../styles.css";
import {BsThreeDotsVertical} from "react-icons/bs";
import {MdFindInPage} from "react-icons/md";

function Dashboard() {
  const courses = db.courses;
  return (
      <div>
          <div className="d-flex flex-column ps-2">
              <div>
                  <span className="wd-dashboard-header">Dashboard</span>
                  <hr className="mt-0"/>
              </div>
              <div className={"ps-4"}>
                  <span className="wd-dashboard-subheader">Published Courses (24)</span>
                  <hr className="mt-0"/>
                  <div className="d-flex flex-wrap">
                      {courses.map((course, index) => (
                        <Link
                          key={index}
                          to={`/Kanbas/Courses/${course._id}`}
                          className="card wd-card-style wd-rmv-text-decoration"
                        >
                            <div className="wd-card-image" style={{ backgroundColor: course.color }}>
                                <BsThreeDotsVertical className={ "wd-card-eclipses-vertical" } size={20}/>
                            </div>
                            <div className="card-body">
                                <h5 className="wd-dash-card-title text-truncate" style={{ color: course.color }}>{course.number} {course.name}</h5>

                                <div className="card-text">CS4550.12631.202410</div>
                                <div className="card-text wd-font-small text-truncate">202410_1 Fall 2023 Semester Full Term</div>
                                <MdFindInPage size={20}/>
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


