import { useEffect } from 'react';
import { Alert } from 'flowbite-react/lib/cjs/components/Alert';
import '../assets/scss/alert.scss';

function Alerts(props) {
  const { name = ' ', closeAlert = Function.prototype } = props;
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);
  return (
    <>
      <Alert className="alert">
        <span>
          <span className="font-medium">{name}</span>Товар добавлен в корзину
        </span>
      </Alert>
    </>
  );
}
export { Alerts };
