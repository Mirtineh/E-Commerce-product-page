import { FunctionComponent } from "react";
import cartIcon from "../assets/images/icon-cart.svg";
interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
  return (
    <img
      src={cartIcon}
      className="w-6 h-6 hover:cursor-pointer hover:text-very-dark-blue"
      alt=""
    />
  );
};

export default Cart;
