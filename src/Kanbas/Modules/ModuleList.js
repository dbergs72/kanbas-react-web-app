import React from "react";
import { useParams } from "react-router-dom";
import db from "../Database";
import { RxDragHandleDots2 } from "react-icons/rx";
import { AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./styles.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className={"ps-2"}>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li
            key={index}
            className={"p-2 d-flex align-items-center mb-5 wd-module"}
            style={{ borderRadius: 0 }}
          >
            <RxDragHandleDots2 size={20} />
            <div className={"ps-3"}>
              <h5>{module.name}</h5>
              {module.description}
            </div>
            <div className="flex-grow-1 text-end">
              <AiFillCheckCircle className={"text-success me-2"} size={20} />
              <AiOutlinePlus className={"me-2"} />
              <BsThreeDotsVertical className={"me-2"} />
            </div>
          </li>
        ))}
    </ul>
  );
}

export default ModuleList;
