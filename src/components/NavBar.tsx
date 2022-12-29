import { FunctionComponent } from "react";
import logo from "../assets/images/logo.svg";

import Avatar from "./Avatar";
import Cart from "./Cart";
import DropdownMenu from "./DropdownMenu";

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  const menu = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <nav>
      <div className="flex justify-between items-center sm:items-baseline px-5 py-3 sm:p-0">
        <div className="flex justify-between items-center sm:items-start gap-4 sm:gap-10">
          <DropdownMenu items={menu} />
          <img src={logo} alt="" />
          <div className="hidden sm:flex gap-6 text-dark-grayish-blue">
            {menu.map((menuItem) => (
              <div className="flex flex-col justify-between gap-11">
                <p
                  key={menuItem}
                  className="hover:cursor-pointer hover:text-very-dark-blue peer m-0"
                >
                  {menuItem}
                </p>
                <hr className="invisible peer-hover:visible border-0 h-1 bg-orange w-full m-0" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center gap-5 sm:gap-8">
          <Cart />
          <Avatar />
        </div>
      </div>
      <hr className="hidden sm:block h-px bg-dark-grayish-blue bg-opacity-30 border-0 m-0" />
    </nav>
  );
};

export default NavBar;
