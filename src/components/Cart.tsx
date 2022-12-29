import { FunctionComponent, useState } from "react";
import CartIcon from "./svgComponents/cartIcon";
import CartDropdown from "./CartDropdown";
import { useAppSelector } from "../store/hooks";
import { selectQuantity } from "../store/cartSlice";
interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const quantity = useAppSelector(selectQuantity);
  return (
    <>
      <div className="relative">
        <div
          className="relative w-6 h-6 hover:cursor-pointer group"
          onClick={() => setCartOpen(true)}
        >
          <CartIcon className="fill-dark-grayish-blue group-hover:fill-very-dark-blue" />
          {quantity > 0 ? (
            <div className="absolute flex justify-center items-center px-1 bg-orange top-0 left-1/3 text-white rounded-md">
              <p className="m-0 text-xs">{quantity}</p>
            </div>
          ) : null}
        </div>
        {cartOpen ? (
          <CartDropdown closeCart={() => setCartOpen(false)} />
        ) : null}
      </div>
    </>
  );
};

export default Cart;
