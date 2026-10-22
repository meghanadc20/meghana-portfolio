import SectionHeading from './SectionHeading.jsx'
import SkillGroup from './SkillGroup.jsx'
import { skillGroups } from '../data/skills.js'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          label="Skills"
          title="Skills & Technologies"
          subtitle="Technologies I'm learning, exploring, and using to build practical applications."
        />
        <div className={styles.grid}>
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.title} {...group} delay={(i % 3) * 70} wide={i === skillGroups.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
