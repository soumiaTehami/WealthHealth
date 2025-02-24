
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Nom du Projet - Tous droits réservés</p>
    </footer>
  );
};

export default Footer;
