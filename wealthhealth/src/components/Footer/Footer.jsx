
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} HRnet - Tous droits réservés</p>
    </footer>
  );
};

export default Footer;
