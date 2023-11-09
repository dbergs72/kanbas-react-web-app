import { FaGripLines } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router";
import "../styles.css";

function BreadCrumb({ course }) {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaboration",
    "Syllabus",
    "Settings",
  ];
  const { pathname } = useLocation();
  const pathItems = pathname.split("/").map((item) => decodeURIComponent(item));
  let crumbs = [];
  let assignmentID = undefined;
  for (let i = pathItems.indexOf("Courses"); i < pathItems.length; i++) {
    if (pathItems[i] === "Home") {
      crumbs.push("Modules");
    } else if (links.includes(pathItems[i])) {
      crumbs.push(pathItems[i]);
    } else if (i + 1 === pathItems.length) {
      assignmentID = pathItems[i];
    }
  }
  return (
    <div className={"d-flex flex-row"}>
      <FaGripLines
        size={30}
        className={"wd-kanbas-red"}
        style={{ paddingTop: 10, paddingLeft: 10 }}
      />
      <ol className="breadcrumb pt-2 ps-4 mb-0">
        {course !== undefined && (
          <li className="breadcrumb-item">
            <span className={"wd-color-kanbas-red"}>{course.name}</span>
          </li>
        )}
        {crumbs.map((crumb, index) => (
          <li
            className={`breadcrumb-item ${
              assignmentID === undefined && "active"
            }`}
            key={index}
          >
            <span
              className={`${
                assignmentID !== undefined && "wd-color-kanbas-red"
              }`}
            >
              {crumb}
            </span>
          </li>
        ))}
        {assignmentID !== undefined && (
          <li className="breadcrumb-item active">{assignmentID}</li>
        )}
      </ol>
    </div>
  );
}

export default BreadCrumb;
