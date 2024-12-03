import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header>
    <h1>THE BAG</h1>
    <nav>
      <Link to="/">Forside</Link>
      <Link to="/products">Produkter</Link>
      <Link to="/about">Om</Link>
    </nav>
  </header>
);

export default Header;
