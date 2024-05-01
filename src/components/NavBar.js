import { NavLink } from "react-router-dom";
import "../NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/new-project"
        className="nav-link"
      >
        New Project
      </NavLink>
    </nav>
  );
};

export default NavBar;