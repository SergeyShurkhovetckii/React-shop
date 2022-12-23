// Flowbite imports
import { Button } from 'flowbite-react/lib/cjs/components/Button';
// import scss
import '../assets/scss/card.scss';

function CardItem(props) {
  const { id, title, image, price, rating, addToBacket = Function.prototype } = props;
  function click() {
    console.log('click');
  }

  // Изменения кнопки в карточке при добавлении в корзину
  return (
    <div className="card">
      <img className="card__pic" src={image} alt={title} />
      <div className="">
        <h5 className="card__title">{title}</h5>
        {/* Рейтинг */}
        <div className="rating" onClick={() => click()}>
          Rating
          <span>{rating.rate}</span>
        </div>
      </div>
      <div className="card-control">
        <span className="">${price}</span>
        <Button color="light" onClick={() => addToBacket({ id, title, price })}>
          В Корзину
        </Button>
      </div>
    </div>
  );
}
export { CardItem };
