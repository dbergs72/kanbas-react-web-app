import { Link, useParams, useLocation } from "react-router-dom";
import "./styles.css";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
      "People",
      "Panopto Video",
      "Discussions",
      "Announcements",
      "Pages",
      "Files",
      "Rubrics",
      "Outcomes",
      "Collaboration",
      "Syllabus",
      "Settings"
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list-group position-fixed" id={"wd-courses-nav-bar"}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ps-1 ${pathname.includes(link) && "active"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
