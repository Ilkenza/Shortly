import { useState } from "react";
import logo from "../assets/icons/logo.svg";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <header className="h-20 px-6 md:px-12 lg:px-24 xl:px-36 flex items-center justify-between relative top-0 left-0 w-full z-20">
      <div className="flex items-center space-x-0 md:space-x-8">
        <a href="">
          <img src={logo} alt="Logo" />
        </a>
        <nav
          className={`absolute top-20 left-[5%] w-[90%] mx-auto flex flex-col items-center justify-center z-10 bg-primary-violet shadow-md rounded-lg
    md:relative md:top-auto md:left-auto md:transform-none md:space-x-6 md:bg-transparent md:shadow-none md:opacity-100
    ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"}
    transition-all duration-300 ease-in-out`}
        >
          <div className="container mx-6 md:mr-0 max-w-screen-lg">
            <ul className="flex flex-col items-center md:flex-row md:space-x-6 text-white md:text-neutral-grayishViolet font-bold w-full pt-5 md:p-0 pb-0 p-7 after:h-[1px] after:opacity-50 after:w-full after:bg-slate-400 md:after:hidden z-20 relative">
              <li className="p-4 md:p-0">
                <a
                  href="#"
                  className="hover:text-neutral-gray md:hover:text-neutral-veryDarkViolet transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li className="p-4 md:p-0">
                <a
                  className="hover:text-neutral-gray md:hover:text-neutral-veryDarkViolet transition-colors duration-300"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li className="p-4 pb-6 md:p-0 ">
                <a
                  href="#"
                  className="hover:text-neutral-gray md:hover:text-neutral-veryDarkViolet transition-colors duration-300"
                >
                  Resources
                </a>
              </li>
            </ul>
            <div className="flex flex-col items-center space-y-4 mt-0 md:mt-6 md:hidden p-7 pt-4 pb-10 w-full">
              <button className="rounded-full text-white md:text-neutral-grayishViolet font-bold px-5 lg:px-7 py-2 lg:py-3 hover:text-neutral-gray md:hover:text-neutral-veryDarkViolet transition-colors duration-300">
                Login
              </button>
              <button className="rounded-full font-bold bg-primary-cyan text-white px-5 lg:px-7 py-2 lg:py-3 w-full hover:shadow-[inset_0px_50px_5px_rgba(255,255,255,0.6)] transition-shadow duration-300">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className="hidden md:flex space-x-4 ml-6 md:ml-0">
        <button className="rounded-full text-neutral-grayishViolet font-bold px-5 lg:px-7 py-2 lg:py-3 hover:text-neutral-gray md:hover:text-neutral-veryDarkViolet transition-colors duration-300">
          Login
        </button>
        <button className="rounded-full font-bold bg-primary-cyan text-white px-5 lg:px-7 py-2 lg:py-3 hover:shadow-[inset_0px_50px_5px_rgba(255,255,255,0.6)] transition-shadow duration-300">
          Sign Up
        </button>
      </div>
      <button
        className={`md:hidden hamburger hamburger--collapse z-20 ${
          isActive ? "is-active" : ""
        }`}
        type="button"
        onClick={toggleHamburger}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </header>
  );
}

export default Header;
