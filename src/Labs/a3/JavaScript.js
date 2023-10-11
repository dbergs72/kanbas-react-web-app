import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ES5Functions from "./ES5Functions";

function JavaScript() {
    console.log("Hello world");
    return (
    <div>
        <h1>JavaScript</h1>
        <ES5Functions />
        <TernaryOperator />
        <IfElse />
        <BooleanVariables />
        <VariableTypes />
        <VariablesAndConstants />
    </div>
    );
};

export default JavaScript;