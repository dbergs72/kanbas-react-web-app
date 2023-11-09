import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import {
  addAssignment,
  setAssignment,
  updateAssignment,
} from "./assignmentsReducer";
import { useDispatch } from "react-redux";
import * as client from "./client";

function AssignmentEditor() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const handleAddAssignment = async () => {
    await client.createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
  };

  const handleUpdateAssignment = async () => {
    await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment,
  );
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments,
  );
  const new_assignment =
    0 === assignments.filter((a) => a._id === assignment._id).length;

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
      <label className="form-label ps-2 mb-0">Assignment Name</label>
      <input
        id={"assignmentTitle"}
        className="form-control"
        defaultValue={assignment.title}
        onChange={(e) => {
          dispatch(
            setAssignment({
              ...assignment,
              title: e.target.value,
            }),
          );
        }}
      />
      <textarea
        id={"assignmentDescription"}
        className="form-control mt-4"
        defaultValue={assignment.description}
        rows={4}
        onChange={(e) => {
          dispatch(
            setAssignment({
              ...assignment,
              description: e.target.value,
            }),
          );
        }}
      />
      <div className={"mt-4"}>
        <ul className={"list-group"}>
          <li className={"list-group-item"}>
            <div>
              <label className="form-label fw-bold">Due</label>
              <input
                id={"assignmentDueDate"}
                className="form-control"
                value={assignment.dueDate}
                type={"date"}
                onChange={(e) => {
                  dispatch(
                    setAssignment({
                      ...assignment,
                      dueDate: e.target.value,
                    }),
                  );
                }}
              />
            </div>
            <div className={"mt-2"}>
              <div className={"container m-0 p-0"}>
                <div className={"row"}>
                  <div className={"col-6"}>
                    <div>
                      <label className="form-label fw-bold">
                        Available From
                      </label>
                      <input
                        id={"assignmentAvailableFrom"}
                        className="form-control"
                        value={assignment.availableFrom}
                        type={"date"}
                        onChange={(e) => {
                          dispatch(
                            setAssignment({
                              ...assignment,
                              availableFrom: e.target.value,
                            }),
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div className={"col-6"}>
                    <div>
                      <label className="form-label fw-bold">Until</label>
                      <input
                        id={"assignmentUntil"}
                        className="form-control"
                        value={assignment.until}
                        type={"date"}
                        onChange={(e) => {
                          dispatch(
                            setAssignment({
                              ...assignment,
                              until: e.target.value,
                            }),
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <hr />
      <div className={"d-flex flex-row justify-content-end"}>
        <Link
          className="btn btn-light"
          to={`/Kanbas/Courses/${courseId}/Assignments`}
        >
          Cancel
        </Link>
        <Link
          className={"btn btn-danger ms-2"}
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          onClick={() => {
            if (new_assignment) {
              handleAddAssignment();
            } else {
              handleUpdateAssignment();
            }
          }}
        >
          Save
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default AssignmentEditor;
