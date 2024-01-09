import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <form action="https://www.actionforms.io/e/r/portfolio-contact-form"
    method="post">
        <div>
          <label for="name">Name</label>
          <input type="text" name="name" />
        </div>
          <div>
            <label for="email">Email</label>
            <input type="email" email="email" />
          </div>
        <div>
          <label for="message">Message</label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Send form</button>
      </form>
    </div>
  )
}

export default Contact;