import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../Data/config";
import { Loading } from "./Loading";
import { ProductsList } from "./ProductsList";
import { Cart } from "./Cart";
import "../App.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");
  const [order, setOrder] = useState([]);
  const [basketShow, setBasketShow] = useState(false)



  async function fetchProducts() {
    try {
      setError("");
      const responce = await axios.get(API_URL);
      setProducts(responce.data);
      setloading(false);
    } catch (e) {
      setloading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToBacket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const NewItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, NewItem]);
    }
    else {
      const NewOrder = order.map((Orderitem, index) =>{
        if (index === itemIndex) {
          return {
            ...Orderitem,
            quantity : Orderitem.quantity + 1
          }
        }
        else {
          return item ;
        }
      })
      setOrder(NewOrder);
    }
  };
  const headlerToBacket = (item) => {
    setBasketShow(!setBasketShow)
  };

  return (
    <>
      <div>
        <Cart quantity={order.length} headlerToBacket = {headlerToBacket}  />
        {loading ? <Loading /> : 
        <ProductsList products={products} addToBacket = {addToBacket}  />}
      </div>
    </>
  );
}
export { Shop };
