import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import {MdAccountCircle} from "react-icons/md";
import {RiDashboard3Line} from "react-icons/ri";
import {BiBook, BiLogoGmail} from "react-icons/bi";
import {AiFillCalendar, AiOutlineClockCircle, AiOutlineQuestion} from "react-icons/ai";
import {FaComputer} from "react-icons/fa6";
import {BsSquare} from "react-icons/bs";

function KanbasNavigation() {

  const links_two = [
      {icon: <MdAccountCircle size={40}/>, link: "Account"},
      {icon: <RiDashboard3Line size={40}/>, link: "Dashboard"},
      {icon: <BiBook size={40}/>, link: "Courses"},
      {icon: <AiFillCalendar size={40}/>, link: "Calendar"},
      {icon: <BiLogoGmail size={40}/>, link: "Inbox"},
      {icon: <AiOutlineClockCircle size={40}/>, link: "History"},
      {icon: <FaComputer size={40}/>, link: "Studio"},
      {icon: <BsSquare size={40}/>, link: "Commons"},
      {icon: <AiOutlineQuestion size={40}/>, link: "Help"},
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
