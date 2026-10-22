import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx'
import { profile } from '../data/profile.js'
import styles from './SocialLinks.module.css'

export default function SocialLinks({ className = '' }) {
  const links = [
    { label: 'GitHub', href: profile.github, Icon: GithubIcon, external: true },
    { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedinIcon, external: true },
    { label: `Email ${profile.email}`, href: `mailto:${profile.email}`, Icon: Mail },
  ]
  return (
    <ul className={`${styles.list} ${className}`}>
      {links.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            className={styles.link}
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  )
}
