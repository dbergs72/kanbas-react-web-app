import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database";
import "./styles.css";
import {BsThreeDotsVertical} from "react-icons/bs";
import {AiFillCheckCircle, AiOutlinePlus} from "react-icons/ai";
import {BiSolidDownArrow} from "react-icons/bi";
import {RxDragHandleDots2} from "react-icons/rx";
import {MdFindInPage} from "react-icons/md";
import {type} from "@testing-library/user-event/dist/type";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  let courseAssignments = assignments;
  if (courseId !== "undefined") {
      courseAssignments = assignments.filter(
          (assignment) => assignment.course === courseId
      );
  }
  return (
    <div>
        <div className={"container pt-2"}>
            <div className={"row"}>
                <div className={"col-4"}>
                    <input type="text" className="form-control" placeholder="Search for Assignment"/>
                </div>
                <div className={"col-8"}>
                    <div className="wd-right-align">
                        <button className="btn btn-light">
                            <AiOutlinePlus className={"mb-1"}/>
                            Group
                        </button>
                        <button className="btn btn-danger">
                            <AiOutlinePlus className={"mb-1"}/>
                            Assignment
                        </button>
                        <button className="btn btn-light">
                            <BsThreeDotsVertical className={"mb-1"}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
          <div className="list-group">
              <div className="list-group-item p-0">
                  <div className="d-flex flex-row wd-background-color-lightgrey p-3">
                      <div className="text-start flex-grow-1">
                          <RxDragHandleDots2 className={"mb-1"} size={20}/>
                          <BiSolidDownArrow className={"mb-1 me-2"} size={10}/>
                          <span className="wd-font-weight-600">Assignments</span>
                      </div>
                      <div className="float-end">
                          <span className="rounded-pill wd-assignments-drop-down-heading-percent-bubble me-1">40% of Total</span>
                          <AiOutlinePlus className={"mb-1"}/>
                          <BsThreeDotsVertical className={"mb-1"}/>
                      </div>
                  </div>
              </div>
            {courseAssignments.map((assignment) => (
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="list-group-item"
                style={{ borderLeftColor: "green", borderLeftWidth: "4px" }}
              >
                  <div className="d-flex align-items-center">
                      <RxDragHandleDots2 size={20}/>
                      <MdFindInPage className={"ps-3 text-success"} size={40}/>
                      <div className={"ps-3"}>
                        <h5>{assignment.title}</h5>
                          <span className="fw-bold">Due</span> {new Date(assignment.dueDate).getUTCMonth()+1}/{new Date(assignment.dueDate).getUTCDay()+1} at {new Date(assignment.dueDate).getUTCHours()}:{new Date(assignment.dueDate).getUTCMinutes()}pm | 100 pts
                      </div>
                      <div className="flex-grow-1 text-end">
                          <AiFillCheckCircle className={"text-success"} size={20}/>
                          <BsThreeDotsVertical className={"mb-1"}/>
                      </div>
                  </div>
              </Link>
            ))}
          </div>
    </div>
  );
}
export default Assignments;
