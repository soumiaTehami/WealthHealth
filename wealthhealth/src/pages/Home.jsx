import Header from "../components/Header/Header";
import EmployeeForm from "../components/EmployeeForm/EmployeeForm";
import "./Home.scss";
const Home = () => {
  return (
    <>
    <div className="app">
    <Header />
    <EmployeeForm />  
    </div>
      
    </>
  );
};

export default Home;
