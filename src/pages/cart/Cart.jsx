import React, { useState } from "react";
import Receipt from "./Receipt";
import styles from "@/styles/cart.module.css";

export default function Cart({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts);

  function handleRemove(index) {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  }
  function handleClear(){
    setProducts([])
  }

  return (
    <>
    <header className={styles.cartHead}>Shopping Cart:</header>
    <section className={styles.cart}>
    <div className={styles.productTable} >
      <table class='w-full mx-5 my-10 p-2' >
        <thead style={{width:"936px",height:"44px",fontWeight:"200"}} class='bg-[#F1F3F4] text-sm font-sans  mx-10'>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove from cart</th>
          </tr>
        </thead>

        <tbody class=" bg-slate-40/100 m-4">
          {products.map((product, index) => (
            <tr  style={{ borderBottom:"solid #E0E2E3 1px"}} key={index}>
              <td  style={{textIndent:"25%" }}>
                <img src="" alt="" />
                {product.name}
                </td>
              <td style={{textIndent:"25%"}}>${product.price.toFixed(2)}</td>
              <td style={{textIndent:"40%"}}>
                <input
                style={{padding:"1%",textIndent:"45%",border:"rgb(220,220,220) 1px solid",margin:"3%",width:"100px",borderRadius:"20px",height:"34px"}}
                  type="number"
                  min="1"
                  value={product.quantity}
                  onChange={(e) => {
                    const updatedProducts = [...products];
                    updatedProducts[index].quantity = parseInt(e.target.value, 10);
                    setProducts(updatedProducts);
                  }}
                />
              </td>
              <td class='flex justify-center ' >
                <button class="px-4 my-10 py-1 text-sm text-[#818487]  hover:text-[#e74c3c]  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-[#821f40] focus:ring-offset-2"onClick={() => handleRemove(index)}> <span style={{color:"black"}}>X</span>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td class='flex justify-center my-10'><button class="px-4 py-1 text-sm text-black   hover:text-white hover:bg-[#3498db] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2" onClick={handleClear}>Clear cart</button></td>
          </tr>
        </tfoot>
      </table>
      </div>
      
      <Receipt products={products} />
   
    
    </section>
    </>
  );
}
