import { FunctionComponent, useState } from "react";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";

interface QuantityProps {
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
}

const Quantity: FunctionComponent<QuantityProps> = ({
  onIncrease,
  onDecrease,
  quantity,
}) => {
  return (
    <div className="flex basis-2/6 justify-between items-center bg-light-grayish-blue rounded-md">
      <button
        className="px-3 self-stretch flex justify-center items-center hover:cursor-pointer border-none bg-black bg-opacity-0"
        disabled={quantity == 0 ? true : false}
        onClick={() => onDecrease()}
        aria-label="decrease quantity"
      >
        <img src={minusIcon} alt="decrease-quantity" className="" />
      </button>
      <p className="text-very-dark-blue font-bold">{quantity}</p>
      <button
        className="px-3 self-stretch flex justify-center items-center hover:cursor-pointer border-none bg-black bg-opacity-0"
        onClick={() => onIncrease()}
        aria-label="increase quantity"
      >
        <img src={plusIcon} alt="increase-quantity" className="" />
      </button>
    </div>
  );
};

export default Quantity;
