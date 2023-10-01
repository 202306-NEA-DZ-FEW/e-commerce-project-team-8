import React, { useEffect, useState } from "react"
import Receipt from "./Receipt"
import styles from "@/styles/cart.module.css"
import {
  QuerySnapshot,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore"
import { db } from "@/config/config"

export default function Cart() {
  const [products, setProducts] = useState([])
  function handleQuantityChange(index, newQuantity) {
    console.log("product", products)
    const updatedProducts = [...products]
    console.log("updated product", updatedProducts)
    updatedProducts[index].quantity = newQuantity
    setProducts(updatedProducts)

    // Update the Firestore with the new quantity
    const productToUpdate = updatedProducts[index]
    // Replace with my firebase
    const docRef = doc(db, "cart", productToUpdate.id)
    updateDoc(docRef, {
      quantity: newQuantity,
    })
      .then(() => {
        console.log("Firestore document updated successfully.")
      })
      .catch((error) => {
        console.error("Error updating Firestore document:", error)
      })
  }
  useEffect(() => {
    const q = query(collection(db, "cart"))
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let cartArr = []
      QuerySnapshot.forEach((doc) => {
        console.log("doc", doc)
        cartArr.push({ ...doc.data(), id: doc.id })
      })
      setProducts(cartArr)
    })
    return () => unsubscribe
  }, [])
  console.log(products)
  // add data

  const handleRemove = async (id) => {
    await deleteDoc(doc(db, "cart", id))
    console.log("this is the id", id)
  }
  function handleClear() {
    products.forEach((product) => {
      deleteDoc(doc(db, "cart", product.id))
        .then(() => {
          console.log(`Removed product with ID ${product.id} from cart.`)
        })
        .catch((error) => {
          console.error(`Error removing product with ID ${product.id}:`, error)
        })
    })
    setProducts([])
  }

  return (
    <>
      <header className={styles.cartHead}>Shopping Cart:</header>
      <div className={styles.cart}>
        <div className={styles.productTable}>
          <div
            style={{ width: "936px", height: "44px", fontWeight: "200" }}
            class="bg-[#F1F3F4] text-sm font-sans  mx-10 flex flex-row gap-x-40 p-2 "
          >
            <p className="w-64 font-medium">Product</p>
            <p className="font-medium">Price</p>
            <p className="font-medium">Quantity</p>
            <p className="font-medium ">Remove </p>
          </div>
          <div
            style={{ width: "936px", height: "44px", fontWeight: "200" }}
            class=" mx-5 my-10 p-2 bg-slate-40/100 "
          >
            {products.map((product, index) => (
              <div
                style={{ borderBottom: "solid #E0E2E3 1px" }}
                key={product.id}
                className="flex flex-row gap-x-32 items-center"
              >
                <div
                  className="flex flex-col items-center p-4"
                  style={{ textIndent: "1%" }}
                >
                  {product.title}
                  <img
                    className="w-16"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <p>${product.price.toFixed(2)}</p>
                <p>
                  <input
                    style={{
                      padding: "1%",
                      textIndent: "45%",
                      border: "rgb(220,220,220) 1px solid",
                      width: "80px",
                      borderRadius: "20px",
                    }}
                    type="number"
                    min="1"
                    value={product.quantity}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value, 10)
                      handleQuantityChange(index, newQuantity)
                      console.log(index, newQuantity)
                    }}
                  />
                </p>
                <div class="flex justify-center ">
                  <button
                    class="px-4 my-10 py-1 text-sm text-[#818487]  hover:text-[#e74c3c]  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-[#821f40] focus:ring-offset-2"
                    onClick={() => handleRemove(product.id)}
                  >
                    <span style={{ color: "black" }}>X</span>Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Receipt products={products} />
      </div>
      <div>
        <button
          class="px-4 py-1 text-sm text-black   hover:text-white hover:bg-[#3498db] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 mt-1 ms-[74%] "
          onClick={handleClear}
        >
          Clear cart
        </button>
      </div>
    </>
  )
}
