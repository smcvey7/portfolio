import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="container-page">
      <div className="grid gap-8 md:grid-cols-5 items-start">
        <div className="md:col-span-2">
          <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm bg-white">
            <img
              src="/img/profile-photo.JPG"
              alt="Portrait of Steven McVey"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="md:col-span-3">
          <header className="mb-3">
            <h1 className="text-3xl font-semibold text-slate-900">About Me</h1>
            <p className="mt-1 text-slate-500">Hi, I’m Steven McVey.</p>
          </header>

          <div className="prose prose-slate max-w-none">
            <p>
              I build reliable, human‑centered software and data systems. I’m a
              <strong> Senior Data Quality Specialist at Williams College</strong>, where I help teams
              trust their information and move faster—through clean data models, clear
              processes, and pragmatic tooling.
            </p>
            <p>
              My recent work spans <strong>Slate</strong>, <strong>SQL</strong>, and
              <strong> Google Apps Script</strong>, alongside full‑stack development with
              <strong> React</strong>, <strong>Ruby on Rails</strong>, and <strong>PostgreSQL</strong>.
              I’ve shipped apps for character recognition research, tutoring platforms, and
              collaborative content sharing.
            </p>
            <p>
              I care about maintainability and momentum: fewer surprises, simpler code, and
              systems that scale with people—not against them.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800"
            >
              View Projects
            </Link>
            <a
              href="/doc/Steven_McVey_Resume.pdf"
              className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
