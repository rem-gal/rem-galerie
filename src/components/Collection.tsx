import { products } from '../data/products'
import CeramicSvg from './CeramicSvg'
import styles from './Collection.module.css'

export default function Collection() {
  return (
    <section id="collection" className={styles.collection}>
      <div className={styles.header}>
        <h2>Our Collection</h2>
      </div>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.gridItem}>
            <div className={styles.gridItemImage}>
              <CeramicSvg
                className={styles.ceramicSvg}
                viewBox={product.svgViewBox}
                paths={product.svgPaths}
              />
            </div>
            <div className={styles.gridItemInfo}>
              <h3>{product.title}</h3>
              <span className={styles.price}>{product.price}</span>
              <span>{product.material} · {product.finish}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
