import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import WorkingWithFunctions from "./WorkingWithFunctions";
import WorkingWithArrays from "./WorkingWithArrays";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";

function JavaScript() {
  console.log("Hello world");
  return (
    <div>
      <h1>JavaScript</h1>
      <FunctionDestructing />
      <Destructing />
      <Spread />
      <House />
      <TemplateLiterals />
      <WorkingWithArrays />
      <WorkingWithFunctions />
      <TernaryOperator />
      <IfElse />
      <BooleanVariables />
      <VariableTypes />
      <VariablesAndConstants />
    </div>
  );
}

export default JavaScript;
