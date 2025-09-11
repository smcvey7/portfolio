import React, { useMemo, useState } from "react";

function CV() {
  const [showToolbar, setShowToolbar] = useState(false);
  const pdfBase = "/doc/Steven_McVey_Resume.pdf";
  const pdfSrc = useMemo(() => {
    return showToolbar
      ? `${pdfBase}#toolbar=1`
      : `${pdfBase}#toolbar=0&navpanes=0&scrollbar=0`;
  }, [showToolbar]);

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto">
        <header className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-slate-900">CV</h1>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-pressed={showToolbar}
              onClick={() => setShowToolbar((v) => !v)}
              className="inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              title="Toggle PDF toolbar"
            >
              {showToolbar ? "Hide Toolbar" : "Show Toolbar"}
            </button>
            <a
              className="text-sm font-medium text-slate-700 hover:text-slate-900 underline"
              href={pdfBase}
              download
            >
              Download CV (PDF)
            </a>
          </div>
        </header>

        <div className="rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-sm bg-white">
          <embed
            key={pdfSrc}
            src={pdfSrc}
            className="w-full h-[80vh]"
            type="application/pdf"
          />
        </div>
      </div>
    </section>
  );
}

export default CV;
