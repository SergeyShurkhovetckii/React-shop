import { BasketItem } from './BasketItem';
import './../assets/scss/basket.scss';

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeBacket = Function.prototype,
    incQuantity,
    decQuantity,
  } = props;
  const totalPrice = order.reduce((sum, el) => {
    return Math.round(sum + el.price * el.quantity);
  }, 0);
  return (
    <>
      <div className="basket-container">
        <div className="basket-row">
          <h3 className="basket__title">Корзина</h3>
          <div className="basket__close" onClick={handleBasketShow}>
            <svg className="w-6 h-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="basket__content">
          {/* Добавление товаров в корзину и рендер  */}
          <ul>
            <li className="basket__link">
              {order.length ? (
                order.map((item) => (
                  <BasketItem
                    key={item.id}
                    {...item}
                    removeBacket={removeBacket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                  />
                ))
              ) : (
                <li>
                  <p>Корзина пуста добавте товар </p>
                </li>
              )}
            </li>
          </ul>
        </div>
        <div className="price">
          <div>Общая стоимость </div>
          <div className="price__rezult">
            {totalPrice}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
export { BasketList };
