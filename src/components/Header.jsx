import logo from "../../public/assets/icons/logo.svg";

function Header() {
  return (
    <header className="h-20 px-36 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
        <nav>
          <ul className="flex space-x-6 text-neutral-grayishViolet font-bold">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex space-x-4 ml-8">
        <button className="rounded-full text-neutral-grayishViolet font-bold px-7 py-3">
          Login
        </button>
        <button className="rounded-full font-bold bg-primary-cyan text-white px-7 py-3">
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;
