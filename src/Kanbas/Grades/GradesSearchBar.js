import { FaFileExport, FaFileImport } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { AiTwotoneFilter } from "react-icons/ai";

function GradesSearchBar() {
  return (
    <div className={"d-flex flex-column"}>
      <div className={"d-flex flex-row justify-content-end m-2 p-2"}>
        <button type="button" className="btn btn-light">
          <FaFileImport />
          Import
        </button>
        <div className="dropdown d-inline">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FaFileExport />
            Export
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Option2
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Option3
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Option4
              </a>
            </li>
          </ul>
        </div>
        <button type="button" className="btn btn-light">
          <BsFillGearFill />
        </button>
      </div>
      <div className={"container"}>
        <form>
          <div className="row">
            <div className="col">
              <label htmlFor="grades-stdnt-search">
                <h6>Student Names</h6>
              </label>
              <input
                type="text"
                id="grades-stdnt-search"
                name="grades-stdnt-search"
                placeholder="Search Students"
                className="form-select"
              />
              <button type="button" className="btn btn-light m-1">
                <AiTwotoneFilter />
                Apply Filters
              </button>
            </div>
            <div className="col">
              <label htmlFor="grades-asgnmt-search">
                <h6>Assignment Names</h6>
              </label>
              <input
                type="text"
                id="grades-asgnmt-search"
                name="grades-asgnmt-search"
                placeholder="Search Assignments"
                className="form-control"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GradesSearchBar;
