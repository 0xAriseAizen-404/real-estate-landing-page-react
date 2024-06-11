import { RiMenu4Fill } from "@remixicon/react";

export const Navbar = () => {
  return (
    <div className="container w-full flex items-center justify-between md:px-10 px-5 py-2 bg-black absolute top-0 left-0 z-10">
      <img src="./images/logo.png" alt="logo" />
      <div className="hidden md:flex items-center space-x-10">
        <a href="#" className="text-white">
          Home
        </a>
        <a href="#" className="text-white">
          About
        </a>
        <a href="#" className="text-white">
          Services
        </a>
        <a href="#" className="text-white">
          Contact
        </a>
      </div>
      <div className="md:hidden flex items-center">
        <RiMenu4Fill size={30} />
      </div>
    </div>
  );
};
