import {FaGripLines} from "react-icons/fa";
import {useLocation} from "react-router-dom";
import {useParams} from "react-router";
import db from "../Database";

function BreadCrumb() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const course = db.courses.find((course) => course._id === courseId);
    console.log(course);
    return (
        <div className={"d-flex flex-row"}>
            <FaGripLines  size={30} className={"wd-kanbas-red"} style={{ paddingTop: 10, paddingLeft: 10}}/>
            <ol className="breadcrumb pt-2 ps-4">
                {course !== undefined && <li className="breadcrumb-item wd-kanbas-red">{course.name}</li>}
                <li className="breadcrumb-item active" aria-current="page">{pathname.substring(pathname.lastIndexOf("/") + 1)}</li>
            </ol>
        </div>
    );
}

export default BreadCrumb;