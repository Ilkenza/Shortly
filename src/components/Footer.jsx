import logo_dark from "../../public/assets/icons/logo_dark.svg";
import Facebook from "../../public/assets/icons/icon-facebook.svg";
import X from "../../public/assets/icons/icon-twitter.svg";
import Pinterest from "../../public/assets/icons/icon-pinterest.svg";
import Instagram from "../../public/assets/icons/icon-instagram.svg";

function Footer() {
  return (
    <footer className="bg-neutral-veryDarkViolet px-6 md:px-12 lg:px-36 py-16 flex flex-col md:flex-row items-center md:items-start">
      <a className="w-[30%] mx-auto mb-8 md:mb-0" href="#">
        <img className="mx-auto md:mx-0" src={logo_dark} alt="Logo" />
      </a>
      <ul className="flex flex-col md:flex-row w-full md:w-[70%] gap-8 items-center md:items-start justify-between">
        <li>
          <span className="text-white font-bold mb-4 block text-center md:text-left">
            Features
          </span>
          <ul className="flex flex-col gap-3 text-neutral-gray text-center md:text-left">
            <li>
              <a href="">Link Shortening</a>
            </li>
            <li>
              <a href="">Branded Links</a>
            </li>
            <li>
              <a href="">Analytics</a>
            </li>
          </ul>
        </li>
        <li>
          <span className="text-white font-bold mb-4 block text-center md:text-left">
            Resources
          </span>
          <ul className="flex flex-col gap-3 text-neutral-gray text-center md:text-left">
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Developers</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
          </ul>
        </li>
        <li>
          <span className="text-white font-bold mb-4 block text-center md:text-left">
            Company
          </span>
          <ul className="flex flex-col gap-3 text-neutral-gray text-center md:text-left">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Our Team</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </li>
        <ul className="flex gap-5 justify-center">
          <li>
            <a href="">
              <img src={Facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={X} alt="X" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Pinterest} alt="Pinterest" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Instagram} alt="Instagram" />
            </a>
          </li>
        </ul>
      </ul>
    </footer>
  );
}

export default Footer;
