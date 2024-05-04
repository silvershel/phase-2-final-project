import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        Projects
      </NavLink>
      <NavLink
        to="/new-project"
        className="nav-link"
      >
        New Project
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
    </nav>
  );
};

export default NavBar;