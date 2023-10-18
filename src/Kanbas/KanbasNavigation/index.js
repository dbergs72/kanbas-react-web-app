import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import {MdAccountCircle} from "react-icons/md";

function KanbasNavigation() {

  const links_two = [
      {icon: <MdAccountCircle size={40}/>, link: "Account"},
      {icon: <MdAccountCircle size={40}/>, link: "Dashboard"},
      {icon: <MdAccountCircle size={40}/>, link: "Courses"},
  ]

  const links = [
      {icon: "MdAccountCircle", title: "Account"},
    "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const { pathname } = useLocation();
  return (
    <div className={"list-group overflow-hidden"} id={"wd-nav-bar"}>
      <img src={require('./neu-logo.png')} className={`wd-nav-group-img`} alt="Northeastern"></img>
      {links_two.map(({icon, link}, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active" }`}
        >
          {icon}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
