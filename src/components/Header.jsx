import { useState } from "react";
import logo from "../../public/assets/icons/logo.svg";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="h-20 px-6 md:px-12 lg:px-24 xl:px-36 flex items-center justify-between relative">
      <div className="flex items-center space-x-0 md:space-x-8">
        <a href="">
          <img src={logo} alt="Logo" />
        </a>
        <nav
          className={`absolute top-20 left-[5%] w-[90%] flex flex-col items-center justify-center z-10 bg-primary-violet shadow-md transform transition-transform duration-300 ease-in-out rounded-lg ${
            isActive ? "translate-y-0" : "-translate-y-[130%]"
          } md:relative md:top-auto md:left-auto md:transform-none md:flex md:space-x-6 md:bg-transparent md:shadow-none`}
        >
          <div className="container mx-6 md:mr-0 max-w-screen-lg">
            <ul className="flex flex-col items-center md:flex-row md:space-x-6 text-white md:text-neutral-grayishViolet font-bold after:h-[1px] md:after:hidden after:w-full after:bg-neutral-gray w-full pt-5 md:p-0 pb-0 p-7">
              <li className="p-4 md:p-0">
                <a href="#">Features</a>
              </li>
              <li className="p-4 md:p-0">
                <a href="#">Pricing</a>
              </li>
              <li className="p-4 pb-6 md:p-0">
                <a href="#">Resources</a>
              </li>
            </ul>
            <div className="flex flex-col items-center space-y-4 mt-0 md:mt-6 md:hidden p-7 pt-4 pb-10 w-full">
              <button className="rounded-full text-white md:text-neutral-grayishViolet font-bold px-5 lg:px-7 py-2 lg:py-3">
                Login
              </button>
              <button className="rounded-full font-bold bg-primary-cyan text-white px-5 lg:px-7 py-2 lg:py-3 w-full">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className="hidden md:flex space-x-4 ml-6 md:ml-0">
        <button className="rounded-full text-neutral-grayishViolet font-bold px-5 lg:px-7 py-2 lg:py-3">
          Login
        </button>
        <button className="rounded-full font-bold bg-primary-cyan text-white px-5 lg:px-7 py-2 lg:py-3">
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
