import { ArrowUp } from 'lucide-react'
import SocialLinks from './SocialLinks.jsx'
import { profile } from '../data/profile.js'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.logo}>Meghana<span>.</span></p>
          <p className={styles.credit}>Designed and built by {profile.name}.</p>
          <p className={styles.copy}>© {year} {profile.name}. All rights reserved.</p>
        </div>
        <div className={styles.right}>
          <SocialLinks />
          <a href="#home" className={styles.top}>
            Back to top <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
