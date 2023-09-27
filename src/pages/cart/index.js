import React from "react";
import Table from "./Table";
import styles from "@/styles/cart.module.css"

export default function Cart() {
  const initialProducts = [
    { name: "Product 1", price: 10.99, quantity: 1 },
    { name: "Product 2", price: 19.99, quantity: 1 },
    { name: "Product 3", price: 7.49, quantity: 1 },
  ];
  
  return (
    <div class='container  m-20'>
      {/* <h1>Shopping Cart</h1> */}
      <Table initialProducts={initialProducts} />
      
    </div>
  );
}
