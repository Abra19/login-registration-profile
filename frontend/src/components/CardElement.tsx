import { CardsProps } from '../types';

const CardElement = (props: CardsProps) => {
  console.log(props);
  return (
    <div>
      Hello, World!
    </div>
  );
};

export default CardElement;
