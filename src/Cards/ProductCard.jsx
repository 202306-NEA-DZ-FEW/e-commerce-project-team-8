function ProductCard({ products }) {
  return (
    <div>
      {products.map((product) => {
        return (
          <section key={product.id}>
            <div>
              <img src={product.image} alt={product.title} />
              <div>
                <p>${product.price}</p>
                <h2>{product.title}</h2>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
export default ProductCard
