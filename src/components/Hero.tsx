import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.left}>
        <h1>
          RÉM<br />
          <em>Galerie</em>
        </h1>
        <p className={styles.sub}>
          Each piece is shaped by hand, fired slowly, and finished with the warmth of earth
        </p>
      </div>
      <div className={styles.right}>
        <p className={styles.quote}>
          "A quote that would probably make sense and sound philosophical and cool"
        </p>
        <p className={styles.quoteAuthor}>RÉM Galerie</p>
      </div>
    </section>
  )
}
