import Header from "./components/Header/Header";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm"
import { BrowserRouter as Router} from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app">
      <Header />
      <EmployeeForm/>
      </div>
    </Router>
  );
}

export default App;
