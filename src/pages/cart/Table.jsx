import React, { useState } from "react";
import Receipt from "./Receipt";
export default function Table({ initialProducts }) {
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
    <div className="flex flex-row" >
    <div  class='basis-2/3'>
      <table class='w-5/6 mx-5 my-10 p-4' >
        <thead class='bg-slate-100 text-sm font-sans  mx-10'>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove from cart</th>
          </tr>
        </thead>

        <tbody class=" bg-slate-40/100 m-4">
          {products.map((product, index) => (
            <tr  style={{ borderBottom:"solid rgb(220,220,220) 1px"}} key={index}>
              <td  style={{textIndent:"25%" }}>
                <img src="" alt="" />
                {product.name}
                </td>
              <td style={{textIndent:"25%"}}>${product.price.toFixed(2)}</td>
              <td style={{textIndent:"40%"}}>
                <input
                style={{padding:"1%",textIndent:"45%",border:"rgb(220,220,220) 1px solid",margin:"3%",width:"15%",borderRadius:"15%"}}
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
                <button class="px-4 my-10 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"onClick={() => handleRemove(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td class='flex justify-center my-10'><button class="px-4 py-1 text-sm text-orange-600 font-semibold rounded-full border border-orange-200 hover:text-white hover:bg-orange-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2" onClick={handleClear}>Clear cart</button></td>
          </tr>
        </tfoot>
      </table>
      </div>
      <div class='shadow-lg rounded-md my-10 basis-1/6 h-16 md:h-full w-full semi-rounded-full border border-gray-200 p-4 '>
      <Receipt products={products} />
      </div>
    
    </div>
  );
}
