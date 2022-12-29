import { FunctionComponent, useEffect, useState } from "react";
import { addToCart, selectQuantity } from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import AddToCart from "./AddToCart";
import Quantity from "./Quantity";

interface MainSectionProps {}

const MainSection: FunctionComponent<MainSectionProps> = () => {
  const quantity = useAppSelector(selectQuantity);
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState(quantity);
  useEffect(() => {
    setAmount(quantity);
  }, [quantity]);

  return (
    <>
      <section className="flex basis-5/12 items-center sm:m-0 w-full">
        <div className="h-fit w-full m-5 sm:m-0">
          <p className=" text-orange font-bold">SNEAKER COMPANY</p>
          <h1 className="text-very-dark-blue text-3xl sm:text-4xl">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-dark-grayish-blue leading-relaxed">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex sm:flex-col justify-between items-center sm:items-start w-full">
            <div className="flex items-center gap-4">
              <p className="text-very-dark-blue text-2xl font-bold sm:m-0">
                $125.00
              </p>
              <div className="p-2 bg-pale-orange rounded-md text-orange font-bold">
                50%
              </div>
            </div>
            <p className="text-dark-grayish-blue text-lg line-through sm:mt-2 sm:mb-8">
              $250.00
            </p>
          </div>
          <div className="flex flex-col w-full sm:flex-row gap-4">
            <Quantity
              quantity={amount}
              onDecrease={() => setAmount((prev) => prev - 1)}
              onIncrease={() => setAmount((prev) => prev + 1)}
            />
            <AddToCart onClick={() => dispatch(addToCart(amount))} />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
