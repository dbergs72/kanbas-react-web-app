import React from "react";
import "./styles.css";
import AssignmentSearchBar from "./AssignmentSearchBar";
import AssignmentsDropDown from "./AssignmentsDropDown";

function Assignments() {
  return (
    <div>
      <AssignmentSearchBar />
      <hr />
      <AssignmentsDropDown />
    </div>
  );
}

export default Assignments;
