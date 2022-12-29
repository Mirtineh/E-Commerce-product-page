import { FunctionComponent } from "react";
import deleteIcon from "../assets/images/icon-delete.svg";
import product1thumbnail from "../assets/images/image-product-1-thumbnail.jpg";

interface CartDropdownProps {
  closeCart: () => void;
}

const CartDropdown: FunctionComponent<CartDropdownProps> = ({ closeCart }) => {
  return (
    <>
      <button
        className="fixed z-10 inset-0 cursor-default bg-black bg-opacity-0 border-none"
        tabIndex={-1}
        onClick={() => closeCart()}
      ></button>
      <div className="fixed sm:absolute z-10 w-fit sm:w-96 top-24 sm:top-10 inset-x-0 mx-auto sm:-left-44 bg-white shadow-xl rounded-md">
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
                <span className="text-very-dark-blue font-bold">$375.00</span>
              </p>
            </div>
            <img src={deleteIcon} alt="" />
          </div>
          <div
            className="bg-orange hover:bg-pale-orange hover:cursor-pointer text-center text-white rounded-md"
            onClick={() => closeCart()}
          >
            <p>Checkout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDropdown;
