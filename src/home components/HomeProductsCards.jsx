import styles from "@/styles/home.module.css"
function HomeProductsCards({ products }) {
  const firstThree = products.slice(0, 3)
  return (
    <div>
      {firstThree.map((product) => {
        return (
          <section key={product.id}>
            <div className={styles.product}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
              <div className={styles.productText}>
                <p className={styles.productPrice}>${product.price}</p>
                <h2 className={styles.productTitle}>{product.title}</h2>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
export default HomeProductsCards
