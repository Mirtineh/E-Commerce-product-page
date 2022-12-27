import { FunctionComponent, useState } from "react";
import cartIcon from "../assets/images/icon-cart.svg";
import product1thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import deleteIcon from "../assets/images/icon-delete.svg";
interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <div className="relative w-6 h-6">
        <img
          src={cartIcon}
          className="w-6 h-6 hover:cursor-pointer hover:text-very-dark-blue"
          onClick={() => setCartOpen(true)}
          alt=""
        />
        {cartOpen ? (
          <>
            <button
              className="fixed inset-0 cursor-default bg-black bg-opacity-0 border-none"
              tabIndex={-1}
              onClick={() => setCartOpen(false)}
            ></button>
            <div className="absolute w-96 top-10 -left-44 bg-white shadow-xl rounded-md">
              <p className="p-4">Cart</p>
              <hr />
              <div className="p-4 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <img
                    src={product1thumbnail}
                    alt=""
                    className="h-16 w-16 rounded-md"
                  />
                  <div className="flex flex-col self-stretch justify-around text-dark-grayish-blue">
                    <p className="m-0">Fall Limited Edition Sneakers</p>
                    <p className="m-0">
                      $125.00 X 3{" "}
                      <span className="text-very-dark-blue font-bold">
                        $375.00
                      </span>
                    </p>
                  </div>
                  <img src={deleteIcon} alt="" />
                </div>
                <div className="bg-orange text-center text-white rounded-md">
                  <p>Checkout</p>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
