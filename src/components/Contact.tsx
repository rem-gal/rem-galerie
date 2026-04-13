import { useState } from 'react'
import styles from './Contact.module.css'

type FormFields = {
  name: string
  email: string
  subject: string
  message: string
}

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

const INITIAL: FormFields = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormFields>(INITIAL)
  const [status, setStatus] = useState<FormStatus>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: wire up to your backend / Cloudflare Worker / email service
    setStatus('sending')
    setTimeout(() => {
      setForm(INITIAL)
      setStatus('sent')
    }, 800)
  }

  const buttonLabel: Record<FormStatus, string> = {
    idle: 'Send Message',
    sending: 'Sending…',
    sent: 'Sent',
    error: 'Try Again',
  }

  return (
    <section className={styles.contact}>
      <div className={styles.inner}>
        <h2>Get in Touch</h2>
        <p className={styles.sub}>Commissions, wholesale, or just to say hello.</p>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="What is this about?"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Tell us what you have in mind..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className={styles.send}
            disabled={status === 'sending'}
          >
            {buttonLabel[status]}
          </button>
        </form>
      </div>
    </section>
  )
}
