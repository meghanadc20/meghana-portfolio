import { Mail, ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import ContactForm from './ContactForm.jsx'
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx'
import { profile } from '../data/profile.js'
import styles from './Contact.module.css'

const methods = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: 'LinkedIn', value: 'meghana-d-c', href: profile.linkedin, Icon: LinkedinIcon, external: true },
  { label: 'GitHub', value: 'meghanadc20', href: profile.github, Icon: GithubIcon, external: true },
]

export default function Contact() {
  return (
    <section id="contact" className="section section--alt" aria-labelledby="contact-title">
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionHeading
            id="contact-title"
            label="Contact"
            title="Let's Connect"
            subtitle="I'm always open to connecting with fellow developers, exploring interesting ideas, and learning about opportunities where I can contribute and grow."
          />
          <Reveal as="ul" className={styles.methods}>
            {methods.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  className={styles.method}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className={styles.methodIcon}><Icon size={18} aria-hidden="true" /></span>
                  <span className={styles.methodText}>
                    <span className={styles.methodLabel}>{label}</span>
                    <span className={styles.methodValue}>{value}</span>
                  </span>
                  <ArrowUpRight className={styles.methodArrow} size={18} aria-hidden="true" />
                  {external && <span className="sr-only"> (opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </Reveal>
        </div>
        <Reveal className={styles.formWrap} delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
