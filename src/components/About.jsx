import { GraduationCap, Compass, RefreshCw } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import styles from './About.module.css'

const facts = [
  { icon: GraduationCap, label: 'Education', value: 'B.E. in Information Science' },
  { icon: Compass, label: 'Interests', value: 'Full-Stack Development, AI/ML, Blockchain' },
  { icon: RefreshCw, label: 'Approach', value: 'Learn, Build, Improve' },
]

export default function About() {
  return (
    <section id="about" className="section section--alt" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" label="About" title="A Little About Me" />
        <div className={styles.grid}>
          <Reveal className={styles.bio}>
            <p>
              I&apos;m an Information Science engineering student who enjoys exploring how software can turn ideas into
              practical solutions. My interests span full-stack development, AI-driven applications, databases, and
              blockchain technology.
            </p>
            <p>
              Working on academic projects has allowed me to explore frontend development, backend APIs, database
              integration, and the challenges of designing applications around real user needs.
            </p>
            <p>
              I value continuous learning, analytical thinking, and creative problem-solving. I&apos;m looking forward to
              contributing to meaningful projects, collaborating with other developers, and growing into a well-rounded
              software engineer.
            </p>

            <div className={styles.drives}>
              <h3>What Drives Me</h3>
              <p>
                I want the software I build to be accessible, useful, and reliable: easy for anyone to use, solving a
                problem someone actually has, and dependable enough to trust. My NGO assistance and medical-records
                projects grew out of that idea.
              </p>
            </div>
          </Reveal>

          <ul className={styles.cards}>
            {facts.map(({ icon: Icon, label, value }, i) => (
              <Reveal as="li" key={label} className={styles.card} delay={i * 80}>
                <span className={styles.icon}><Icon size={20} aria-hidden="true" /></span>
                <div>
                  <p className={styles.cardLabel}>{label}</p>
                  <p className={styles.cardValue}>{value}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
