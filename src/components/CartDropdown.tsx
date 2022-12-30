import { FunctionComponent } from "react";
import deleteIcon from "../assets/images/icon-delete.svg";
import product1thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import Quantity from "./Quantity";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { emptyCart, selectQuantity } from "../store/cartSlice";

interface CartDropdownProps {
  closeCart: () => void;
}

const CartDropdown: FunctionComponent<CartDropdownProps> = ({ closeCart }) => {
  const quantity = useAppSelector(selectQuantity);
  const dispatch = useAppDispatch();
  return (
    <>
      <button
        className="fixed z-10 inset-0 cursor-default bg-black bg-opacity-0 border-none"
        tabIndex={-1}
        onClick={() => closeCart()}
      ></button>
      <div className="fixed flex flex-col sm:absolute z-10 w-[370px] h-72 top-16 sm:top-10 inset-x-0 mx-auto sm:-left-44 bg-white shadow-xl rounded-md">
        <p className="p-4">Cart</p>
        <hr className="h-px bg-dark-grayish-blue bg-opacity-30 border-0 m-0" />
        {quantity > 0 ? (
          <div className="p-4 pb-6 flex flex-col gap-5">
            {" "}
            <>
              <div className="flex items-center gap-3">
                <img
                  src={product1thumbnail}
                  alt=""
                  className="h-16 w-16 rounded-md"
                />
                <div className="flex flex-col self-stretch justify-around text-dark-grayish-blue">
                  <p className="m-0">Fall Limited Edition Sneakers</p>
                  <p className="m-0">
                    $125.00 X {quantity}{" "}
                    <span className="text-very-dark-blue font-bold">
                      ${(125.0 * quantity).toFixed(2)}
                    </span>
                  </p>
                </div>
                <img
                  src={deleteIcon}
                  className="hover:cursor-pointer"
                  alt=""
                  onClick={() => dispatch(emptyCart())}
                />
              </div>
              <div
                className="bg-orange hover:bg-pale-orange hover:cursor-pointer text-center text-white rounded-md"
                onClick={() => closeCart()}
              >
                <p>Checkout</p>
              </div>
            </>
          </div>
        ) : (
          <div className="flex h-full w-full justify-center items-center">
            <p className="text-dark-grayish-blue">Your cart is empty.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDropdown;
