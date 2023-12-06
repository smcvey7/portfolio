import React from "react";

function Header() {
  return (
    <div className="d-flex flex-horizontal justify-content-between mt-2 align-items-center">
      <div className="d-flex flex-horizontal align-items-center" >
        <img alt="Steven McVey" className="calligraphy" src="./img/calligraphy.png" />
        <h1>Steven McVey</h1>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/stevenlmcvey/" ><img alt="LinkedIn icon" className="link-icon" src="./img/linkedin-icon.png" /></a>
        <a href="https://github.com/smcvey7"><img alt="Github icon" className="link-icon" src="./img/github-icon.png" /></a>
        <a href="https://www.youtube.com/@stevenmcvey2314/videos"><img alt="Github icon" className="link-icon" src="./img/youtube-icon.png" /></a>
      </div>
    </div>
  );
}

export default Header;