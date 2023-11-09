import { RxDragHandleDots2 } from "react-icons/rx";
import { BiSolidDownArrow } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { MdFindInPage } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAssignment,
  setAssignment,
  setAssignments,
} from "./assignmentsReducer";
import * as client from "./client";

function AssignmentsDropDown() {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  useEffect(() => {
    client.findAssignmentsForCourse(courseId).then((assignments) => {
      dispatch(setAssignments(assignments));
    });
  }, [courseId]);

  const handleDeleteAssignment = async (assignmentId) => {
    await client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };

  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments,
  );

  return (
    <div className="list-group">
      <div className="list-group-item p-0">
        <div className="d-flex flex-row wd-background-color-lightgrey p-3">
          <div className="text-start flex-grow-1">
            <RxDragHandleDots2 className={"mb-1"} size={20} />
            <BiSolidDownArrow className={"mb-1 me-2"} size={10} />
            <span className="wd-font-weight-600">Assignments</span>
          </div>
          <div className="float-end">
            <span className="rounded-pill wd-assignments-drop-down-heading-percent-bubble me-1">
              40% of Total
            </span>
            <AiOutlinePlus className={"mb-1"} />
            <BsThreeDotsVertical className={"mb-1"} />
          </div>
        </div>
      </div>
      {assignments.map((assignment) => (
        <div className="d-flex align-items-center list-group-item">
          <div className={"flex-grow-1 align-items-center"}>
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="align-items-center"
              style={{
                borderLeftColor: "green",
                borderLeftWidth: "4px",
                textDecoration: "none",
                color: "black",
              }}
            >
              <div className="d-flex align-items-center">
                <RxDragHandleDots2 size={20} />
                <MdFindInPage className={"ps-3 text-success"} size={40} />
                <div className={"ps-3"}>
                  <h5>{assignment.title}</h5>
                  <span className="fw-bold">Due</span>{" "}
                  {new Date(assignment.dueDate).getMonth() + 1}/
                  {new Date(assignment.dueDate).getDate() + 1}/
                  {new Date(assignment.dueDate).getFullYear()} | 100 pts
                </div>
              </div>
            </Link>
          </div>
          <div className="text-end">
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to={`./Assignment Editor`}
              className={"btn btn-light ms-1"}
              onClick={() => {
                dispatch(setAssignment(assignment));
              }}
            >
              Edit
            </Link>
            <button
              className={"btn btn-danger ms-1"}
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you want to delete this assignment?",
                  )
                ) {
                  handleDeleteAssignment(assignment._id);
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AssignmentsDropDown;
