import Kanbas from "./Kanbas";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const screen = "labs";
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/hellof" element={<HelloWorld />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
