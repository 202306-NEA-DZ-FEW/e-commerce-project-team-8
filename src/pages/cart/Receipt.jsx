
import React from "react";
import styles from"@/styles/cart.module.css"
 export default function Receipt({products}){
  return (
    <>
    <div className={styles.table} class="text-sm leading-8 ">
      <h1 style={{fontWeight:"bold"}}>Your Receipt:</h1>
      
      <table>
        <thead >
          <tr style={{padding:'10px',lineHeight:"8px",fontSize:"14px"}}>
          <th></th>
          <th style={{fontWeight:"normal"}} >price</th>
          <th style={{fontWeight:"normal"}} >Quantity</th>
          </tr>
        </thead>
        <tbody style={{fontSize:"14px"}}> 
         {products.map((product,index)=><tr key={index}>
        <td>{product.name}</td>
        <td>$ {product.price}</td>
          <td> * {product.quantity}</td>
        </tr>)}
        </tbody>
        <tfoot style={{borderTop:"solid rgb(220,220,220) 1px"}}>
          <tr>
            <td>Total</td>
            <td> $ { products.reduce((total,product)=>total=total+(product.price)*product.quantity,0)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    </>
  )
 }