import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
