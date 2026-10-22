import Reveal from './Reveal.jsx'
import styles from './Skills.module.css'

export default function SkillGroup({ title, icon: Icon, items, delay, wide }) {
  return (
    <Reveal className={`${styles.group} ${wide ? styles.wide : ''}`} delay={delay}>
      <h3 className={styles.groupTitle}>
        <Icon size={18} aria-hidden="true" />
        {title}
      </h3>
      <ul className={styles.items}>
        {items.map((item) => (
          <li key={item} className={styles.item}>{item}</li>
        ))}
      </ul>
    </Reveal>
  )
}
