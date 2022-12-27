import { FunctionComponent } from "react";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";

interface QuantityProps {}

const Quantity: FunctionComponent<QuantityProps> = () => {
  return (
    <div className="flex basis-2/6 justify-between items-center px-5 bg-light-grayish-blue rounded-md">
      <img src={minusIcon} alt="" className="hover:cursor-pointer" />
      <p className="text-very-dark-blue font-bold">0</p>
      <img src={plusIcon} alt="" className="hover:cursor-pointer" />
    </div>
  );
};

export default Quantity;
