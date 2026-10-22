import Reveal from './Reveal.jsx'
import styles from './SectionHeading.module.css'

export default function SectionHeading({ label, title, subtitle, id, align = 'left' }) {
  return (
    <Reveal className={`${styles.wrap} ${align === 'center' ? styles.center : ''}`}>
      {label && <p className={styles.label}>{label}</p>}
      <h2 id={id} className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </Reveal>
  )
}
