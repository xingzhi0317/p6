// State needed: what the user has typed (formData object), which fields have
// errors (errors object), and whether the form was submitted (boolean).
import { useState } from 'react'

const emptyForm = { name: '', email: '', subject: '', message: '' }

function validateField(name, value) {
  const v = value.trim()
  if (name === 'name') {
    if (!v) return 'Name is required'
    if (v.length < 2) return 'Name must be at least 2 characters'
  }
  if (name === 'email') {
    if (!v) return 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Please enter a valid email address'
  }
  if (name === 'message') {
    if (!v) return 'Message is required'
    if (v.length < 10) return 'Message must be at least 10 characters'
  }
  return ''
}

function Contact() {
  const [formData, setFormData] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    setIsSubmitted(false)
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    ;['name', 'email', 'message'].forEach(field => {
      const msg = validateField(field, formData[field])
      if (msg) newErrors[field] = msg
    })
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted with data:', formData)
      setIsSubmitted(true)
      setFormData(emptyForm)
    } else {
      setIsSubmitted(false)
    }
  }

  const fieldClass = (name) =>
    errors[name] ? 'error' : formData[name].trim() ? 'success' : ''

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <p>I'm always interested in hearing about new opportunities and projects. Feel free to reach out!</p>

          <form id="contact-form" className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text" id="name" name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('name')}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('email')}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text" id="subject" name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message" name="message" rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('message')}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <div className="form-group form-group-full">
                <button type="submit" className="btn btn-primary">Send Message</button>
              </div>
            </div>
            {isSubmitted && (
              <div className="success-message">Thank you! Your message has been sent successfully.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
