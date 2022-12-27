import { FunctionComponent, useState } from "react";
import menuIcon from "../assets/images/icon-menu.svg";
import closeIcon from "../assets/images/icon-close.svg";

interface DropdownMenuProps {
  items: string[];
}

const DropdownMenu: FunctionComponent<DropdownMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sm:hidden">
      {isOpen ? (
        <>
          <button
            className="fixed inset-0 bg-black bg-opacity-75 cursor-default"
            onClick={() => setIsOpen(false)}
            tabIndex={-1}
          ></button>
          <div className="fixed left-0 top-0 w-8/12 h-screen bg-white">
            <div className="flex flex-col mx-8 mt-5">
              <img
                src={closeIcon}
                alt=""
                className="w-4 h-4 mb-8"
                onClick={() => setIsOpen(false)}
              />
              {items.map((item) => (
                <p key={item} className="text-very-dark-blue font-bold">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </>
      ) : (
        <img
          src={menuIcon}
          onClick={() => setIsOpen(true)}
          className="h-4 w-4"
        />
      )}
    </div>
  );
};

export default DropdownMenu;
