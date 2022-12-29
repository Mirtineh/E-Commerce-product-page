import { FunctionComponent } from "react";
import closeIcon from "../assets/images/icon-close.svg";
import product1 from "../assets/images/image-product-1.jpg";
import produc1thumb from "../assets/images/image-product-1-thumbnail.jpg";
import nextIcon from "../assets/images/icon-next.svg";
import previousIcon from "../assets/images/icon-previous.svg";
import PreviousArrow from "./svgComponents/previousArrow";
import NextArrow from "./svgComponents/nextArrow";
import CloseIcon from "./svgComponents/closeIcon";
interface LightBoxProps {
  closeModal: () => void;
}

const LightBox: FunctionComponent<LightBoxProps> = ({ closeModal }) => {
  return (
    <>
      <div className="hidden fixed inset-0 z-10 sm:flex justify-center items-center ">
        <button
          className="fixed inset-0 z-10 bg-black bg-opacity-75"
          onClick={() => closeModal()}
        ></button>
        <div className="flex flex-col items-center gap-5 w-1/3 h-fit z-10">
          <div
            className="hover:cursor-pointer group w-fit self-end"
            onClick={() => closeModal()}
          >
            <CloseIcon className="fill-dark-grayish-blue group-hover:fill-orange" />
          </div>
          <div className="relative z-10">
            <img src={product1} className="w-full rounded-2xl" alt="" />
            <div className="absolute z-10 top-1/2 -left-6 flex justify-center items-center w-12 h-12 bg-white rounded-full hover:cursor-pointer group">
              <PreviousArrow className="stroke-dark-grayish-blue group-hover:stroke-orange" />
            </div>
            <div className="absolute z-10 top-1/2 -right-6 flex justify-center items-center w-12 h-12 bg-white rounded-full hover:cursor-pointer group">
              <NextArrow className="stroke-dark-grayish-blue group-hover:stroke-orange" />
            </div>
          </div>

          <div className="flex justify-center gap-6 w-11/12 mt-3">
            <div className="flex relative items-center w-24 justify-center hover:cursor-pointer outline outline-orange rounded-xl group">
              <img
                src={produc1thumb}
                alt=""
                className="flex-1 w-full h-full object-cover rounded-xl "
              />
              <div className="absolute inset-0 bg-pale-orange bg-opacity-75 rounded-xl"></div>
            </div>
            <div className="flex relative items-center w-24 justify-center hover:cursor-pointer rounded-xl group">
              <img
                src={produc1thumb}
                alt=""
                className="flex-1 w-full h-full object-cover rounded-xl "
              />
              <div className="hidden group-hover:block absolute inset-0 bg-pale-orange bg-opacity-75 rounded-xl"></div>
            </div>
            <div className="flex relative items-center w-24 justify-center hover:cursor-pointer rounded-xl group">
              <img
                src={produc1thumb}
                alt=""
                className="flex-1 w-full h-full object-cover rounded-xl "
              />
              <div className="hidden group-hover:block absolute inset-0 bg-pale-orange bg-opacity-75 rounded-xl"></div>
            </div>
            <div className="flex relative items-center w-24 justify-center hover:cursor-pointer rounded-xl group">
              <img
                src={produc1thumb}
                alt=""
                className="flex-1 w-full h-full object-cover rounded-xl "
              />
              <div className="hidden group-hover:block absolute inset-0 bg-pale-orange bg-opacity-75 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LightBox;