import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../Data/config';
import { Loading } from './Loading';
import { ProductsList } from './ProductsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alerts } from './Alert';
import '../App.css';

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState('');
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketSow] = useState(false);
  const [alertName, setAlertName] = useState('');

  // Получение данных товаров
  async function fetchProducts() {
    try {
      setError('');
      const responce = await axios.get(API_URL);
      setProducts(responce.data);
      setloading(false);
    } catch (e) {
      setloading(false);
      setError(error.message);
    }
  }
  // Получение данных товаров
  useEffect(() => {
    fetchProducts();
  });
  // Функция добавление товаров
  const addToBacket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const NewItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, NewItem]);
    } else {
      const NewOrder = order.map((Orderitem, index) => {
        if (index === itemIndex) {
          return {
            ...Orderitem,
            quantity: Orderitem.quantity + 1,
          };
        } else {
          return Orderitem;
        }
      });
      setOrder(NewOrder);
    }
    setAlertName(item.title);
  };
  // Функция удаления товаров
  const removeBacket = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };
  // Функция открытие корзины
  const handleBasketShow = () => {
    setBasketSow(!isBasketShow);
  };
  // перерасчет товаров в корзине добавление
  const incQuantity = (itemId) => {
    const NewOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(NewOrder);
  };
  // перерасчет товаров в корзине удаления
  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  // Закрытие алерта
  const closeAlert = () => {
    setAlertName('');
  };

  return (
    <>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      <div>
        {loading ? <Loading /> : <ProductsList products={products} addToBacket={addToBacket} />}
        {isBasketShow && (
          <BasketList
            order={order}
            handleBasketShow={handleBasketShow}
            removeBacket={removeBacket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        )}
      </div>
      {alertName && <Alerts name={alertName} closeAlert={closeAlert} />}
    </>
  );
}
export { Shop };
