"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "", rating: "" });
  };

  return (
    <div
      className="container-fluid text-white"
      style={{
        minHeight: "100vh",
        backgroundImage: 'url("/images/contact-bg.jpg")', // keep your image here
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "60px 20px",
      }}
    >
      <div
        className="container p-5 rounded shadow-lg"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          maxWidth: "800px",
        }}
      >
        <h2 className="text-center fw-bold mb-3">📞 Contact Us</h2>
        <p className="text-center text-light">
          Have a question, feedback, or issue? We'd love to hear from you!  
          Fill out the form below and our team will respond as soon as possible.
        </p>

        <hr className="border-light" />

        {/* Contact Info Section */}
        <div className="row text-center mt-4">
          <div className="col-md-4 mb-3">
            <h5>Email</h5>
            <p>hello@nextcart.store</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Phone</h5>
            <p>+91 98765 43210</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Address</h5>
            <p>NextCart HQ, Tech Park Road, Chennai, India</p>
          </div>
        </div>

        <div className="text-center mb-4">
          <h6>Business Hours</h6>
          <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        <hr className="border-light" />

        {/* Feedback Form */}
        <h4 className="text-center mb-4">💬 Send Us a Message</h4>
        <form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              name="message"
              className="form-control"
              rows="4"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Rate Your Experience:</label>
            <select
              name="rating"
              className="form-select"
              value={formData.rating}
              onChange={handleChange}
              required
            >
              <option value="">Select rating</option>
              <option value="Excellent">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="Good">⭐⭐⭐⭐ Good</option>
              <option value="Average">⭐⭐⭐ Average</option>
              <option value="Poor">⭐⭐ Poor</option>
            </select>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Submit Feedback
            </button>
          </div>

          {submitted && (
            <div className="alert alert-success mt-3 text-center" role="alert">
              ✅ Thank you, {formData.name || "User"}! Your feedback has been received.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
