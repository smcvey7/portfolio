import React from "react";
import { Link, useNavigate } from "react-router-dom";


function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary justify-content-around">
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