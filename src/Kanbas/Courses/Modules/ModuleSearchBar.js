import React from "react";
import { AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

function ModuleSearchBar() {
  return (
    <div className="d-flex flex-row justify-content-end pt-2 pb-2">
      <button className="btn btn-light">Collapse All</button>
      <button className="btn btn-light">View Progress</button>
      <button className="btn btn-light">
        <AiFillCheckCircle className={"text-success me-2"} size={20} />
        Publish All
      </button>
      <button className="btn btn-danger">
        <AiOutlinePlus className={"mb-1"} />
        Module
      </button>
      <button className="btn btn-light">
        <BsThreeDotsVertical />
      </button>
    </div>
  );
}

export default ModuleSearchBar;
