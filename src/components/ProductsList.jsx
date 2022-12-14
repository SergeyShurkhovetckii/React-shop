import { Card } from "./Card";

function ProductsList(props) {
  const { products = [] ,addToBacket = Function.prototype } = props;

  if (!products.length) {
    return <div>Nothing</div>;
  }
  return (
    <div className="shop">
      {products.map((item) => {
        return <Card key={item.id} {...item} addToBacket = {addToBacket} />;
      })}
    </div>
  );
}
export { ProductsList };
