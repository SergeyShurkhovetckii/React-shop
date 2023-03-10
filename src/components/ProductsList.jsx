import { CardItem } from './Card';
import '../assets/scss/productList.scss';

function ProductsList(props) {
  const { products = [], addToBacket = Function.prototype } = props;

  if (!products.length) {
    return <div>Nothing</div>;
  }
  return (
    <div className="container">
      <h2 className="text-2xl font-medium title">Товары</h2>
      <div className="shop">
        {products.map((item) => {
          return <CardItem key={item.id} {...item} addToBacket={addToBacket} />;
        })}
      </div>
    </div>
  );
}
export { ProductsList };
