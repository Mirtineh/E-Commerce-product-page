import { FunctionComponent, useState } from "react";
import { largeImages, thumbnailImages } from "../common/images";
import nextIcon from "../assets/images/icon-next.svg";
import previousIcon from "../assets/images/icon-previous.svg";
import LightBox from "./LightBox";

interface ImagesProps {}

const Images: FunctionComponent<ImagesProps> = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <>
      <div className="flex flex-initial basis-5/12 flex-col w-full gap-8">
        <div className="relative z-0 w-full h-72 sm:h-[500px]">
          <img
            src={largeImages[imageIndex]}
            className="object-cover w-full h-full sm:rounded-xl hover:cursor-pointer"
            onClick={() => setModalOpen(true)}
            alt=""
          />
          <div
            className="absolute sm:hidden flex justify-center items-center w-9 h-9 top-1/2 left-4 bg-white rounded-full"
            onClick={() =>
              setImageIndex((prev) => {
                if (prev === 0) return thumbnailImages.length - 1;
                return prev - 1;
              })
            }
          >
            <img src={previousIcon} alt="" className="w-3 h-3" />
          </div>
          <div
            className="absolute sm:hidden flex justify-center items-center w-9 h-9 top-1/2 right-4 bg-white rounded-full"
            onClick={() =>
              setImageIndex((prev) => {
                if (prev === thumbnailImages.length - 1) return 0;
                return prev + 1;
              })
            }
          >
            <img src={nextIcon} alt="" className="w-3 h-3" />
          </div>
        </div>
        <div className="hidden sm:flex justify-between w-full gap-8">
          {thumbnailImages.map((image, index) => {
            if (index === imageIndex) {
              return (
                <div
                  className="flex relative items-center w-full justify-center hover:cursor-pointer outline outline-orange rounded-xl group"
                  onClick={() => setImageIndex(index)}
                >
                  <img
                    src={image}
                    alt=""
                    className="flex-1 w-full h-full object-cover rounded-xl "
                  />
                  <div className="absolute inset-0 bg-pale-orange bg-opacity-75 rounded-xl"></div>
                </div>
              );
            }
            return (
              <div
                className="flex relative items-center w-full justify-center hover:cursor-pointer rounded-xl group"
                onClick={() => setImageIndex(index)}
              >
                <img
                  src={image}
                  alt=""
                  className="flex-1 w-full h-full object-cover rounded-xl "
                />
                <div className="hidden group-hover:block absolute inset-0 bg-pale-orange bg-opacity-75 rounded-xl"></div>
              </div>
            );
          })}
        </div>
      </div>
      {isModalOpen ? <LightBox closeModal={() => setModalOpen(false)} /> : null}
    </>
  );
};

export default Images;
