import LogoSneakes from "../../assets/images/logo.svg";
import AvatarImage from "../../assets/images/image-avatar.png";
import MenuIcon from "../icons/MenuIcon";
import CartIcon from "../icons/CartIcon";
import IconClose from "../icons/IconClose";
import NavLinkHeader from "./NavLinkHeader";
import { useState } from "react";

const MainHeader = () => {
  const [navClass, setNavClass] = useState("hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0");

  const handleOpenMenu = () => {
    setNavClass(
      "absolute top-0 left-0 h-full p-8 gap-y-5 font-bold w-4/5 bg-white flex flex-col md:flex-row md:mr-auto md:flex md:gap-4 md:static md:p-0"
    );
  };

  const handleCloseMenu = () => {
    setNavClass(
        "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
    );
  };

  return (
    <>
      <header className="container mx-auto flex items-center gap-8 bg-white px-4">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>

        <img className="mr-auto mb-1 h-5 md:mr-0" src={LogoSneakes} alt="" />

        <nav className={navClass}>
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <IconClose />
          </button>
          <NavLinkHeader text="Collections" />
          <NavLinkHeader text="Men" />
          <NavLinkHeader text="Women" />
          <NavLinkHeader text="About" />
          <NavLinkHeader text="Contact" />
        </nav>

        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img className="w-10" src={AvatarImage} alt="" />
        </div>
      </header>
      <span className="container mx-auto hidden h-[1px] w-full bg-gray-500 md:block"></span>
    </>
  );
};

export default MainHeader;
