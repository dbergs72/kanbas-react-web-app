import ModuleList from "../Modules/ModuleList";
import ModuleSearchBar from "../Modules/ModuleSearchBar";
import StatusBar from "./StatusBar";
import "../styles.css";

function Home() {
  return (
    <div className={"d-flex flex-row"}>
      <div className="col-10 flex-grow-1 pe-3">
        <ModuleSearchBar />
        <hr className={"mt-0"} />
        <ModuleList />
      </div>
      <div className="col-2 wd-home-status-menu">
        <StatusBar />
      </div>
    </div>
  );
}

export default Home;
