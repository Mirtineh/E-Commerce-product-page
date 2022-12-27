import { FunctionComponent } from "react";
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

interface ImagesProps {}

const Images: FunctionComponent<ImagesProps> = () => {
  return (
    <>
      <div className="flex flex-col w-full gap-10">
        <div className="relative w-full h-72">
          <img
            src={product1}
            className="object-cover w-full h-full sm:rounded-xl"
            alt=""
          />
          <div className="absolute sm:hidden flex justify-center items-center w-9 h-9 top-1/2 left-4 bg-white rounded-full">
            <img src={previousIcon} alt="" className="w-3 h-3" />
          </div>
          <div className="absolute sm:hidden flex justify-center items-center w-9 h-9 top-1/2 right-4 bg-white rounded-full">
            <img src={nextIcon} alt="" className="w-3 h-3" />
          </div>
        </div>
        <div className="hidden sm:flex justify-between w-full">
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
    </>
  );
};

export default Images;