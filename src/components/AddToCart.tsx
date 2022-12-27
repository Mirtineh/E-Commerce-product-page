import { FunctionComponent } from "react";
import cartIcon from "../assets/images/icon-cart.svg";

interface AddToCartProps {}

const AddToCart: FunctionComponent<AddToCartProps> = () => {
  return (
    <button className="flex justify-center items-center gap-4 bg-orange p-3 rounded-lg text-white border-none hover:bg-opacity-50 hover:cursor-pointer">
      <img src={cartIcon} alt="" />
      <p className="m-0 font-bold text-lg">Add to cart</p>
    </button>
  );
};

export default AddToCart;
