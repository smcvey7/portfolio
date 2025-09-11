import React from "react";

function Header() {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          alt="Steven McVey"
          src="/img/calligraphy.png"
          className="w-24 h-24 object-contain"
        />
        <div className="text-left">
          <h1 className="m-0 text-3xl font-semibold text-slate-900">Steven McVey</h1>
          <p className="mt-1 text-slate-500">Software Developer</p>
        </div>
      </div>
      <div className="flex items-center">
        <a
          href="https://www.linkedin.com/in/stevenlmcvey/"
          className="opacity-90 hover:opacity-100 transition-opacity"
          aria-label="LinkedIn"
        >
          <img alt="LinkedIn" className="w-7 h-7 mx-1.5" src="/img/linkedin-icon.png" />
        </a>
        <a
          href="https://github.com/smcvey7"
          className="opacity-90 hover:opacity-100 transition-opacity"
          aria-label="GitHub"
        >
          <img alt="GitHub" className="w-7 h-7 mx-1.5" src="/img/github-icon.png" />
        </a>
        <a
          href="https://www.youtube.com/@stevenmcvey2314/videos"
          className="opacity-90 hover:opacity-100 transition-opacity"
          aria-label="YouTube"
        >
          <img alt="YouTube" className="w-7 h-7 mx-1.5" src="/img/youtube-icon.png" />
        </a>
      </div>
    </div>
  );
}

export default Header;
