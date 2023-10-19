import { FaGripLines } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function HiddenTopBar() {
  return (
    <div
      className="bg-black text-white m-0 container-fluid w-100 p-2"
      style={{ zIndex: 1 }}
    >
      <div className="row">
        <div className="col-1">
          <div className="dropdown">
            <button
              className="wd-remove-background mt-2"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaGripLines />
            </button>
            <ul
              className="dropdown-menu wd-mini-menu"
              aria-labelledby="dropdownMenuButton1"
            >
              <li className="float-end pe-3">X</li>
              <li>Account</li>
              <li>Dashboard</li>
              <li>Courses</li>
              <li>Calendar</li>
              <li>Inbox</li>
              <li>History</li>
              <li>Studio</li>
              <li>Commons</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className="col-10" style={{ textAlign: "center" }}>
          Modules
        </div>
        <div className="col-1">
          <div className="dropdown">
            <button
              className="wd-remove-background mt-2"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BiDownArrow />
            </button>
            <ul
              className="dropdown-menu wd-mini-menu"
              aria-labelledby="dropdownMenuButton1"
            >
              <li className="dropdown-item">Home</li>
              <li className="dropdown-item">Modules</li>
              <li className="dropdown-item">Piazza</li>
              <li className="dropdown-item">Zoom Meetings</li>
              <li className="dropdown-item">Assignments</li>
              <li className="dropdown-item">Quizzes</li>
              <li className="dropdown-item">Grades</li>
              <li className="dropdown-item">People</li>
              <li className="dropdown-item">Panopto Video</li>
              <li className="dropdown-item">Discussions</li>
              <li className="dropdown-item">Announcements</li>
              <li className="dropdown-item">Pages</li>
              <li className="dropdown-item">Files</li>
              <li className="dropdown-item">Rubrics</li>
              <li className="dropdown-item">Outcomes</li>
              <li className="dropdown-item">Collaborations</li>
              <li className="dropdown-item">Syllabus</li>
              <li className="dropdown-item">Settings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HiddenTopBar;
