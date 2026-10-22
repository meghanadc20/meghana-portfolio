import Reveal from './Reveal.jsx'
import styles from './Journey.module.css'

export default function TimelineEntry({ title, description, tags, index }) {
  return (
    <Reveal as="li" className={styles.entry} delay={index * 80}>
      <span className={styles.marker} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        {tags?.length > 0 && (
          <ul className="tags" aria-label="Related technologies">
            {tags.map((t) => <li key={t} className="tag">{t}</li>)}
          </ul>
        )}
      </div>
    </Reveal>
  )
}
