import React from "react"; 

function Footer() {
  return (
    <footer className="relative mt-auto w-full bg-slate-900 text-slate-100 text-base py-4">
      <a
        className="absolute left-4 top-1/2 -translate-y-1/2 hover:underline"
        href="mailto:steven@stevenmcvey.com"
      >
        steven@stevenmcvey.com
      </a>
      <div className="container-page">
        <p className="text-sm text-slate-400 text-center">Steven McVey LLC © 2025</p>
      </div>
    </footer>
  );
}

export default Footer;
