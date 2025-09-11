import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const linkClass =
    "px-4 py-2 rounded-md text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition";

  return (
    <div className="bg-slate-800 text-white h-12">
      <div className="container-page h-full flex items-center justify-center gap-6">
        <Link to="/" className={linkClass}>
          Home
        </Link>
        <Link to="/projects" className={linkClass}>
          Projects
        </Link>
        <Link to="/cv" className={linkClass}>
          CV
        </Link>
        <Link to="/contact" className={linkClass}>
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
