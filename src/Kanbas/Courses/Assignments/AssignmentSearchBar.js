import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { setAssignment } from "./assignmentsReducer";
import { useDispatch } from "react-redux";

function AssignmentSearchBar() {
  const { courseId } = useParams();
  const base_assignment = {
    title: "New Module",
    course: courseId,
    description: "New Description",
    dueDate: "2021-10-10",
    availableFrom: "2021-10-10",
    until: "2021-10-10",
  };
  const dispatch = useDispatch();
  return (
    <div className={"container pt-2"}>
      <div className={"row"}>
        <div className={"col-4"}>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignment"
          />
        </div>
        <div className={"col-8"}>
          <div className="wd-right-align">
            <button className="btn btn-light">
              <AiOutlinePlus className={"mb-1"} />
              Group
            </button>
            <Link
              className="btn btn-danger"
              to={`./Assignment Editor`}
              onClick={() => {
                dispatch(setAssignment(base_assignment));
              }}
            >
              <AiOutlinePlus className={"mb-1"} />
              Assignment
            </Link>
            <button className="btn btn-light">
              <BsThreeDotsVertical className={"mb-1"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentSearchBar;
