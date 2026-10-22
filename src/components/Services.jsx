import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { services } from '../data/services.js'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="interests" className="section section--alt" aria-labelledby="interests-title">
      <div className="container">
        <SectionHeading
          id="interests-title"
          label="Interests"
          title="What I Enjoy Building"
          subtitle="I'm interested in collaborating on innovative projects, learning new technologies, and turning ideas into practical software solutions."
        />
        <ul className={styles.grid}>
          {services.map(({ title, icon: Icon, text }, i) => (
            <Reveal as="li" key={title} className={styles.card} delay={(i % 3) * 70}>
              <Icon className={styles.icon} size={22} strokeWidth={1.6} aria-hidden="true" />
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.text}>{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
