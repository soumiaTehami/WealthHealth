import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.JPG";


const Header = () => {
  return (
    <header className="header">
     <img src={logo} alt="Logo du projet" className="logo" width="200" height="100"/>
      <h1 className="header__title">HRnet</h1>
      <nav className="header__nav">
        <Link to="/employees" className="header__link">
          View Current Employees
        </Link>
      </nav>
    </header>
  );
};

export default Header;
