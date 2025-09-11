import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  return (
    <StyledNavBar className="navbar navbar-expand-lg bg-body-tertiary justify-content-around">
      <div style={{height: "100%"}} className="d-flex flex-horizontal justify-content-around align-items-center">
      <Link
        to="/"
        className="btn btn-lg custom-button navText"
        role="button"
      >
        Home
      </Link>

      <Link
        to="/projects"
        className="btn btn-lg custom-button navText"
        role="button"
      >
        Projects
      </Link>

      <Link
        to="/cv"
        className="btn btn-lg custom-button navText"
        role="button"
      >
        CV
      </Link>

      <Link
        to="/contact"
        className="btn btn-lg custom-button navText"
        role="button"
      >
        Hire Me
      </Link>
      </div>
      
    </StyledNavBar>
  );
}

const StyledNavBar = styled("div")`
  height: 40px;
  background-color: #5d7195;
  color: #ffffff;
  vertical-align: middle;
`;

export default NavBar;
