import GradesSearchBar from "./GradesSearchBar";
import { useParams } from "react-router-dom";
import db from "../Database";
import "./styles.css";
import "../styles.css";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId,
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId,
  );
  return (
    <div>
      <GradesSearchBar />
      <div className="table-responsive wd-grades-table pt-3">
        <table className="table table-striped table-bordered">
          <tbody>
            <tr>
              {assignments && <th>Student Name</th>}
              {assignments.map((assignment) => (
                <th>{assignment.title}</th>
              ))}
            </tr>

            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user,
              );
              return (
                <tr>
                  <td id={"wd-grades-table-student"}>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id,
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
