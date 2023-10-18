import React from "react";
import db from "../Database";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = db.assignments.find((a) => a._id === assignmentId);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually save the assignment TBD");
    // go back to assignments
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div
        className={
          "d-flex flex-row align-items-center justify-content-end mt-2"
        }
      >
        <AiFillCheckCircle className={"text-success"} size={20} />
        <span className={"text-success"}>Published</span>
        <button className={"btn btn-light p-1 ms-2"}>
          <BsThreeDotsVertical />
        </button>
      </div>
      <hr />
      <label for={"assignmentTitle"} className="form-label ps-2 mb-0">
        Assignment Name
      </label>
      <input
        id={"assignmentTitle"}
        className="form-control"
        defaultValue={assignment.title}
      />
      <hr />
      <div className={"d-flex flex-row justify-content-end"}>
        <Link
          className="btn btn-light"
          to={`/Kanbas/Courses/${courseId}/Assignments`}
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger">
          Save
        </button>
      </div>
      <hr />
    </div>
  );
}

export default AssignmentEditor;
