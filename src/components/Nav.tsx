import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>RÉM</div>
      <ul className={styles.links}>
        <li><a href="#">Collection</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Studio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}
