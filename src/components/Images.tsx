import { FunctionComponent, useState } from "react";
import product1 from "../assets/images/image-product-1.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product4 from "../assets/images/image-product-4.jpg";
import produc1thumb from "../assets/images/image-product-1-thumbnail.jpg";
import produc2thumb from "../assets/images/image-product-2-thumbnail.jpg";
import produc3thumb from "../assets/images/image-product-3-thumbnail.jpg";
import produc4thumb from "../assets/images/image-product-4-thumbnail.jpg";
import nextIcon from "../assets/images/icon-next.svg";
import previousIcon from "../assets/images/icon-previous.svg";
import LightBox from "./LightBox";

interface ImagesProps {}

const Images: FunctionComponent<ImagesProps> = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="flex basis-5/12 flex-col w-full gap-8">
        <div className="relative z-0 w-full h-72 sm:h-[500px]">
          <img
            src={product1}
            className="object-cover w-full h-full sm:rounded-xl hover:cursor-pointer"
            onClick={() => setModalOpen(true)}
            alt=""
          />
          <div className="absolute sm:hidden flex justify-center items-center w-9 h-9 top-1/2 left-4 bg-white rounded-full">
            <img src={previousIcon} alt="" className="w-3 h-3" />
          </div>
          <div className="absolute sm:hidden flex justify-center items-center w-9 h-9 top-1/2 right-4 bg-white rounded-full">
            <img src={nextIcon} alt="" className="w-3 h-3" />
          </div>
        </div>
        <div className="hidden sm:flex justify-between w-full gap-8">
          <div className="flex justify-center items-center">
            <img
              src={produc1thumb}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={produc1thumb}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={produc1thumb}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={produc1thumb}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
      {isModalOpen ? <LightBox closeModal={() => setModalOpen(false)} /> : null}
    </>
  );
};

export default Images;
