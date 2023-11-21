import React from "react";
import { Link, useNavigate } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-around">
      <Link
        to="/"
        className="btn btn-lg custom-button"
        role="button"
      >
        Home
      </Link>

      <Link
        to="/projects"
        className="btn btn-lg custom-button"
        role="button"
      >
        Projects
      </Link>
    </nav>
  );
}

export default NavBar;