import styles from './Divider.module.css'

export default function Divider() {
  return (
    <div className={styles.divider}>
      <div className={styles.line} />
      <div className={styles.diamond} />
      <div className={styles.line} />
    </div>
  )
}
