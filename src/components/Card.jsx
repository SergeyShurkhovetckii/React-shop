function Card( props ) {
    const { id , title ,image, price ,rating ,addToBacket = Function.prototype } = props;
  return (
    <div className="flex flex-col w-full max-w-sm p-5 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          className="p-8 rounded-t-lg"
          src={image}
          alt={title}/>
      <div className="flex-grow px-5 pb-5 ">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {rating.rate}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <button
          onClick={() => addToBacket({
            id,
            title,
            price
          })}
            className="text-white bg-blue-700
             hover:bg-blue-800 focus:ring-4 focus:outline-none
              focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
              text-center dark:bg-blue-600 dark:hover:bg-blue-700
               dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
  );
}
export { Card };
