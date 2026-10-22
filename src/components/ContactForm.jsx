import { useRef, useState } from 'react'
import { Send, CircleCheck, CircleAlert } from 'lucide-react'
import { profile } from '../data/profile.js'
import styles from './Contact.module.css'

// If VITE_FORM_ENDPOINT is set (e.g. a Formspree form URL), messages are
// POSTed there. Otherwise the form opens the visitor's email app with the
// message pre-filled, so nothing is ever reported as "sent" when it was not.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT?.trim() || ''

const EMPTY = { name: '', email: '', subject: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address, like name@example.com.'
  if (!values.subject.trim()) errors.subject = 'Please add a subject.'
  if (!values.message.trim()) errors.message = 'Please write a message.'
  else if (values.message.trim().length < 10) errors.message = 'Your message should be at least 10 characters.'
  return errors
}

const fields = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'subject', label: 'Subject', type: 'text', autoComplete: 'off', wide: true },
  { name: 'message', label: 'Message', textarea: true, wide: true },
]

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const formRef = useRef(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((errs) => ({ ...errs, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    const firstInvalid = fields.find((f) => found[f.name])
    if (firstInvalid) {
      formRef.current?.elements[firstInvalid.name]?.focus()
      return
    }

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    }

    if (!ENDPOINT) {
      const body = `${payload.message}\n\n${payload.name}\n${payload.email}`
      window.location.href =
        `mailto:${profile.email}?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(body)}`
      setStatus({
        state: 'info',
        message: `Your email app should open with this message ready to send. If nothing happens, email ${profile.email} directly.`,
      })
      return
    }

    setStatus({ state: 'sending', message: '' })
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...payload, _replyto: payload.email, _subject: payload.subject }),
      })
      if (!res.ok) throw new Error(`Request failed with ${res.status}`)
      setValues(EMPTY)
      setStatus({ state: 'success', message: "Thanks, your message was sent. I'll get back to you soon." })
    } catch {
      setStatus({
        state: 'error',
        message: `Sorry, the message couldn't be sent. Please try again or email ${profile.email} directly.`,
      })
    }
  }

  const sending = status.state === 'sending'

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate aria-describedby="form-note">
      <div className={styles.fields}>
        {fields.map(({ name, label, type, autoComplete, textarea, wide }) => {
          const errorId = `${name}-error`
          const common = {
            id: name,
            name,
            value: values[name],
            onChange,
            required: true,
            'aria-invalid': errors[name] ? 'true' : undefined,
            'aria-describedby': errors[name] ? errorId : undefined,
            className: styles.input,
          }
          return (
            <div key={name} className={`${styles.field} ${wide ? styles.wide : ''}`}>
              <label htmlFor={name}>{label}</label>
              {textarea ? <textarea rows={5} {...common} /> : <input type={type} autoComplete={autoComplete} {...common} />}
              {errors[name] && (
                <p id={errorId} className={styles.error}>
                  <CircleAlert size={14} aria-hidden="true" /> {errors[name]}
                </p>
              )}
            </div>
          )
        })}
      </div>

      <button type="submit" className="btn btn--primary" disabled={sending}>
        {sending ? 'Sending…' : 'Send Message'} <Send aria-hidden="true" />
      </button>

      <div aria-live="polite" role="status">
        {status.message && (
          <p className={`${styles.status} ${styles[status.state] || ''}`}>
            {status.state === 'success' && <CircleCheck size={16} aria-hidden="true" />}
            {status.state === 'error' && <CircleAlert size={16} aria-hidden="true" />}
            {status.message}
          </p>
        )}
      </div>

      {!ENDPOINT && (
        <p id="form-note" className={styles.note}>Sending opens your email app with the message filled in.</p>
      )}
    </form>
  )
}
