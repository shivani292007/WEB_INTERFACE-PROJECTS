import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real project you'd send this data to a backend or an email API.
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="page contact">
      <div className="container contact-grid">
        <div>
          <p className="section-label">Contact</p>
          <h1 className="page-title">Let's get in touch</h1>
          <p className="page-intro">
            Have an opportunity, project idea, or just want to say hi? Reach
            out through any of the channels below or send me a message.
          </p>

          <ul className="contact-info">
            <li>
              <strong>Email</strong>
              <a href="mailto:alex.carter.dev@gmail.com">
                shivu.krish.dev@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone</strong>
              <a href="tel:+911234567890">+91 12345 67890</a>
            </li>
            <li>
              <strong>LinkedIn</strong>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                linkedin.com/in/shivani
              </a>
            </li>
            <li>
              <strong>GitHub</strong>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                github.com/shivani
              </a>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>

          {submitted && (
            <p className="form-success">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;