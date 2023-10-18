import {AiOutlinePlus} from "react-icons/ai";
import {BsThreeDotsVertical} from "react-icons/bs";
import React from "react";

function AssignmentSearchBar() {
    return (
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
    );
}

export default AssignmentSearchBar;