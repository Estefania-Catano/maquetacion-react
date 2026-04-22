import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>ZENITH BONSAI</h1>
      <ul>
<NavLink to="/filosofia" className={({ isActive }) => isActive ? "active" : ""}>
  Filosofía
</NavLink>
<NavLink to="/galeria" className={({ isActive }) => isActive ? "active" : ""}>
  Galería
</NavLink>
<NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>
  Reservas
</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
