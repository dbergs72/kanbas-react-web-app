import ES5Functions from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";

function WorkingWithFunctions() {
    console.log("Hello world");
    return (
        <div>
            <h2>Working with Functions</h2>
            <FunctionParenthesisAndParameters />
            <ImpliedReturn />
            <ArrowFunctions />
            <ES5Functions />
        </div>
    );
};

export default WorkingWithFunctions;