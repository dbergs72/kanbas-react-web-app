import { Link, useLocation } from "react-router-dom";

function MiniNav() {
  const { pathname } = useLocation();
  return (
    <div>
      <ul className={"list-group text-decoration-none"}>
        <li className={"list-group-item"}>
          <Link to="/Kanbas" className={`text-decoration-none text-black`}>
            Home
          </Link>
        </li>
        <li
          className={`list-group-item ${
            pathname.includes("Search") && "active"
          }`}
        >
          <Link
            to="/Kanbas/Login/Search"
            className={`text-decoration-none text-black active`}
          >
            Search
          </Link>
        </li>
        <li
          className={`list-group-item ${
            pathname.includes("Signin") && "active"
          }`}
        >
          <Link
            to="/Kanbas/Login/Signin"
            className={`text-decoration-none text-black`}
          >
            Signin
          </Link>
        </li>
        <li
          className={`list-group-item ${
            pathname.includes("Signup") && "active"
          }`}
        >
          <Link
            to="/Kanbas/Login/Signup"
            className={`text-decoration-none text-black`}
          >
            Signup
          </Link>
        </li>
        <li
          className={`list-group-item ${
            pathname.includes("Account") && "active"
          }`}
        >
          <Link
            to="/Kanbas/Account"
            className={`text-decoration-none text-black`}
          >
            Account
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MiniNav;
