import logo from '../assets/logo.png'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="RÉM Galerie" className={styles.logo} />
      <div className={styles.right}>© 2026 · Jeddah, Saudi Arabia</div>
    </footer>
  )
}
