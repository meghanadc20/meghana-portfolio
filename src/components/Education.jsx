import { GraduationCap, MapPin, CalendarDays } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading id="education-title" label="Education" title="Education" />
        <Reveal as="article" className={styles.card}>
          <span className={styles.icon}><GraduationCap size={26} strokeWidth={1.6} aria-hidden="true" /></span>
          <div>
            <h3 className={styles.degree}>Bachelor of Engineering in Information Science</h3>
            <p className={styles.school}>GSSS Institute of Engineering and Technology for Women</p>
            <ul className={styles.meta}>
              <li><MapPin size={16} aria-hidden="true" /> KRS Road, Metgalli, Mysuru, Karnataka</li>
              <li><CalendarDays size={16} aria-hidden="true" /> Expected Graduation: 2027</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
