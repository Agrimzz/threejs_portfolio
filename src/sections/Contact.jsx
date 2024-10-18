"use client"

import emailjs from "@emailjs/browser"
import React, { useRef, useState } from "react"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        "service_2s36rie",
        "template_rjzlufr",
        {
          from_name: form.name,
          to_name: "Agrim",
          from_email: form.email,
          to_email: "agrimp91@example.com",
          message: form.message,
        },
        "tfZwWqjhbvi9As-Nz"
      )
      alert("Message sent succesfully.")
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
      alert("Something went wrong!")
    }
  }
  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Lets Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>
          <form
            action=""
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="john.doe@me.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input resize-none"
                placeholder="Hi, I am interested in..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
