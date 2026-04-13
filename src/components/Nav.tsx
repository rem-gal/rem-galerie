import logo from '../assets/logo.png'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logoLink} aria-label="RÉM Galerie — home">
        <img src={logo} alt="RÉM Galerie" className={styles.logo} />
      </a>
      <ul className={styles.links}>
        <li><a href="#collection">Collection</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
