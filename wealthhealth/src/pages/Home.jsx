import Header from "../components/Header/Header";
import EmployeeForm from "../components/EmployeeForm/EmployeeForm";
import "./Home.scss";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <>
    <div className="app">
    <Header />
    <EmployeeForm />  
    <Footer/>
    </div>
    
      
    </>
  );
};

export default Home;
