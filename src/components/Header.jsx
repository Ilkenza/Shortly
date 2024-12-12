import logo from "../../public/assets/icons/logo.svg";

function Header() {
  return (
    <header className="h-20 px-20 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
        <nav>
          <ul className="flex space-x-6">
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
        <button className="rounded-full border-blue-500 px-7 py-3">
          Login
        </button>
        <button className="rounded-full bg-blue-500 text-white px-7 py-3">
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;
