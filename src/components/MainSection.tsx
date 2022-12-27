import { FunctionComponent } from "react";

interface MainSectionProps {}

const MainSection: FunctionComponent<MainSectionProps> = () => {
  return (
    <>
      <section className="m-5">
        <p className=" text-orange font-bold">SNEAKER COMPANY</p>
        <h1 className="text-very-dark-blue text-3xl">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-dark-grayish-blue leading-relaxed">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex sm:flex-col justify-between items-center sm:items-start">
          <div className="flex items-center gap-4">
            <p className="text-very-dark-blue text-2xl font-bold">$125.00</p>
            <div className="p-2 bg-pale-orange rounded-md text-orange font-bold">
              50%
            </div>
          </div>
          <p className="text-dark-grayish-blue text-lg line-through">$250.00</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex justify-between p-3 bg-light-grayish-blue rounded-md"></div>
          <div className="flex justify-center bg-orange p-3 rounded-md"></div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
