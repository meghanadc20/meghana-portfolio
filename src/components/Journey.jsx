import SectionHeading from './SectionHeading.jsx'
import TimelineEntry from './TimelineEntry.jsx'
import { journey } from '../data/journey.js'
import styles from './Journey.module.css'

export default function Journey() {
  return (
    <section id="journey" className="section" aria-labelledby="journey-title">
      <div className="container">
        <SectionHeading
          id="journey-title"
          label="Journey"
          title="Experience & Learning Journey"
          subtitle="An early-career path shaped by projects, a hackathon, and steady practice."
        />
        <ol className={styles.timeline}>
          {journey.map((entry, i) => <TimelineEntry key={entry.title} {...entry} index={i} />)}
        </ol>
      </div>
    </section>
  )
}
