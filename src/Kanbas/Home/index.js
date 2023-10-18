import ModuleList from "../Modules/ModuleList";
import ModuleSearchBar from "../Modules/ModuleSearchBar";
import StatusBar from "./StatusBar";

function Home() {
  return (
    <div className="row">
      <div className="col-10">
        <ModuleSearchBar />
        <hr className={"mt-0"} />
        <ModuleList />
      </div>
      <div className="col-2">
        <StatusBar />
      </div>
    </div>
  );
}

export default Home;
