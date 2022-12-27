import { FunctionComponent, useState } from "react";
import cartIcon from "../assets/images/icon-cart.svg";
import product1thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
  const [cartOpen, setCartOpen] = useState(true);
  return (
    <>
      <img
        src={cartIcon}
        className="relative w-6 h-6 hover:cursor-pointer hover:text-very-dark-blue"
        alt=""
      />
      {cartOpen ? (
        <div className="absolute w-20 h-30 top-20 shadow-md">
          <p className="p-4">Cart</p>
          <hr />
          <div className="p-4 flex flex-col">
            <div className="flex">
              <img src={product1thumbnail} alt="" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Cart;
