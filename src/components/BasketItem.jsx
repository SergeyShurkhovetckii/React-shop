import '../assets/scss/basket_item.scss';
import { Button } from 'flowbite-react/lib/cjs/components/Button';
function BasketItem(props) {
  const {
    id,
    title,
    quantity,
    price,
    removeBacket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  return (
    // <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
    //   {title} x {quantity} = {price * quantity}
    //   <button
    //     onClick={() => removeBacket(id)}
    //     type="button"
    //     className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    //   >
    //     delite
    //   </button>
    //   <svg
    //     onClick={() => incQuantity(id)}
    //     class="w-6 h-6"
    //     fill="none"
    //     stroke="currentColor"
    //     viewBox="0 0 24 24"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <path
    //       stroke-linecap="round"
    //       stroke-linejoin="round"
    //       stroke-width="2"
    //       d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    //     ></path>
    //   </svg>
    // </li>
    <div className="basket-item">
      <div className="basket-item__title">{title}</div>
      <div className="basket-item__control">
        {/* индикатор плюс и минус товар  */}
        <div onClick={() => decQuantity(id)}>
          <svg
            className="w-6 h-6 icon"
            fill=""
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>{quantity}</div>
        <div onClick={() => incQuantity(id)}>
          <svg
            className="w-6 h-6 icon "
            fill=""
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="basket-item__qua"> {price * quantity}</div>
      <Button className="btn-close" pill={true} onClick={() => removeBacket(id)}>
        Удалить
      </Button>
    </div>
  );
}
export { BasketItem };
