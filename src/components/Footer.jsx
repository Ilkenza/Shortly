import Facebook from "../assets/icons/icon-facebook.svg";
import logo_dark from "../assets/icons/logo_dark.svg";
import X from "../assets/icons/icon-twitter.svg";
import Pinterest from "../assets/icons/icon-pinterest.svg";
import Instagram from "../assets/icons/icon-instagram.svg";

function Footer() {
  return (
    <footer className="bg-neutral-veryDarkViolet px-6 md:px-12 lg:px-24 xl:px-36 pt-16 pb-8 flex flex-col md:flex-row items-center flex-wrap md:items-start">
      <a className="md:w-[25%] lg:w-[30%] mx-auto mb-8 md:mb-0" href="#">
        <img className="mx-auto md:mx-0" src={logo_dark} alt="Logo" />
      </a>
      <ul className="flex flex-col md:flex-row w-full md:w-[75%] lg:w-[70%] gap-8 items-center md:items-start justify-between">
        <li>
          <span className="text-white font-bold mb-4 block text-center md:text-left">
            Features
          </span>
          <ul className="flex flex-col gap-3 text-neutral-gray text-center md:text-left">
            <li>
              <a
                className="hover:text-primary-cyan transition-colors duration-300"
                href=""
              >
                Link Shortening
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary-cyan transition-colors duration-300"
                href=""
              >
                Branded Links
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary-cyan transition-colors duration-300"
                href=""
              >
                Analytics
              </a>
            </li>
          </ul>
        </li>
        <li>
          <span className="text-white font-bold mb-4 block text-center md:text-left">
            Resources
          </span>
          <ul className="flex flex-col gap-3 text-neutral-gray text-center md:text-left">
            <li>
              <a
                className="hover:text-primary-cyan transition-colors duration-300"
                href=""
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary-cyan transition-colors duration-300"
                href=""
              >
                Developers
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary-cyan transition-colors duration-300"
                href=""
              >
                Support
              </a>
            </li>
          </ul>
        </li>
        <li>
          <span className="text-white font-bold mb-4 block text-center md:text-left">
            Company
          </span>
          <ul className="flex flex-col gap-3 text-neutral-gray text-center md:text-left">
            <li>
              <a
                className="hover:text-primary-cyan transition-colors duration-300"
                href=""
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary-cyan transition-colors duration-300"
                href=""
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary-cyan transition-colors duration-300"
                href=""
              >
                Careers
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary-cyan transition-colors duration-300"
                href=""
              >
                Contact
              </a>
            </li>
          </ul>
        </li>
        <ul className="flex gap-5 justify-center">
          <li>
            <a href="">
              <object data={Facebook} type="image/svg+xml"></object>
            </a>
          </li>
          <li>
            <a href="">
              <object data={X} type="image/svg+xml"></object>
            </a>
          </li>
          <li>
            <a href="">
              <object data={Pinterest} type="image/svg+xml"></object>
            </a>
          </li>
          <li>
            <a href="">
              <object data={Instagram} type="image/svg+xml"></object>
            </a>
          </li>
        </ul>
      </ul>
    </footer>
  );
}

export default Footer;
