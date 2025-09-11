import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <form action="https://www.actionforms.io/e/r/portfolio-contact-form"
    method="post">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Send form</button>
      </form>
    </div>
  )
}

export default Contact;
