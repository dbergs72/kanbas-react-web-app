import KanbasNavigation from "./KanbasNavigation";
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="d-flex" style={{height: 100}}>
      <KanbasNavigation />
      <div className={"w-100"} id={"wd-kanbas-sub-screen"}>
        <Routes>
            <Route path="/" element={<Navigate to={"Dashboard"} />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/*" element={<Courses />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
