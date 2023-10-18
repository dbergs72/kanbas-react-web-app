import db from "../Database";
import { useParams } from "react-router";
import "./styles.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.course === courseId);
  return (
    <div>
      <ul className="list-group">
        {modules.map((module, index) => (
          <li key={index} className="list-group-item">
            <h3>{module.name}</h3>
            <p>{module.description}</p>
            {module.lessons && module.lessons.length > 0 && (
              <ul className="list-group">
                {module.lessons.map((lesson, index) => (
                  <li key={index} className="list-group-item ">
                      <h5>{lesson.name}</h5>
                      <p>{lesson.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModuleList;
