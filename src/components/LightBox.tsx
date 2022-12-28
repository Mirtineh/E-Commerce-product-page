import { FunctionComponent } from "react";

interface LightBoxProps {
  closeModal: () => void;
}

const LightBox: FunctionComponent<LightBoxProps> = ({ closeModal }) => {
  return (
    <>
      <div className="fixed inset-0 z-10 flex justify-center items-center ">
        <button
          className="fixed inset-0 z-10 bg-black bg-opacity-75"
          onClick={() => closeModal()}
        ></button>
        <div className="w-1/3 h-2/3 z-10 bg-orange"></div>
      </div>
    </>
  );
};

export default LightBox;
