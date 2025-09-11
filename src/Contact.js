import React from "react";

function Contact() {
  return (
    <section className="container-page">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900">Get in touch</h1>
          <p className="mt-2 text-slate-600">
            Have a project in mind or just want to say hello? Fill out the form
            and I’ll get back to you shortly.
          </p>
        </header>

        <form
          action="https://www.actionforms.io/e/r/portfolio-contact-form"
          method="post"
          className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-6 sm:p-8"
        >
          {/* Honeypot field for bots */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex="-1"
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Jane Doe"
                className="mt-1 w-full rounded-md border-0 ring-1 ring-slate-300 focus:ring-2 focus:ring-brand-500 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="jane@example.com"
                className="mt-1 w-full rounded-md border-0 ring-1 ring-slate-300 focus:ring-2 focus:ring-brand-500 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
                Subject (optional)
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can I help?"
                className="mt-1 w-full rounded-md border-0 ring-1 ring-slate-300 focus:ring-2 focus:ring-brand-500 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                placeholder="Tell me a bit about your project, timeline, and goals."
                className="mt-1 w-full rounded-md border-0 ring-1 ring-slate-300 focus:ring-2 focus:ring-brand-500 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-slate-500">I usually reply within 1–2 business days.</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 disabled:opacity-60"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
