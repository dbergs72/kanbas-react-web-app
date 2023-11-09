import EncodingParametersInURLs from "./EncodingParametersInURLs.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <WorkingWithArrays />
        <WorkingWithObjects />
        <EncodingParametersInURLs />
        <a href="http://localhost:4000/a5/add/5/6" className="list-group-item">
          Welcome
        </a>
      </div>
    </div>
  );
}
export default Assignment5;
