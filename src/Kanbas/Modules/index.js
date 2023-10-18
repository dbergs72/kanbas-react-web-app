import ModuleList from "./ModuleList";
import ModuleSearchBar from "./ModuleSearchBar";

function Modules() {
  return (
    <div>
      <ModuleSearchBar />
        <hr className={"mt-0"}/>
      <ModuleList />
    </div>
  );
}

export default Modules;
