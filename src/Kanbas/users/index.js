import { Route, Routes } from "react-router-dom";
import MiniNav from "./MiniNav";
import Signin from "./Signin";
import Account from "./Account";
import Signup from "./Signup";

function LoggingInFeatures() {
  return (
    <div className="d-flex flex-row">
      <div className="me-3">
        <MiniNav />
      </div>
      <Routes>
        <Route path="Search" element={<h1>HI</h1>} />
        <Route path="Signin" element={<Signin />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="/Kanbas/Account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default LoggingInFeatures;
