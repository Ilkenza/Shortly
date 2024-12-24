import logo_dark from "../../public/assets/icons/logo_dark.svg";
import Facebook from "../../public/assets/icons/icon-facebook.svg";
import X from "../../public/assets/icons/icon-twitter.svg";
import Pinterest from "../../public/assets/icons/icon-pinterest.svg";
import Instagram from "../../public/assets/icons/icon-instagram.svg";

function Footer() {
  return (
    <footer className="bg-neutral-veryDarkViolet px-36 py-16 flex">
      <a className="w-[30%] mx-auto" href="#">
        <img className="" src={logo_dark} alt="Logo" />
      </a>
      <ul className="flex w-[70%] gap-8 justify-between">
        <li>
          <span className="text-white font-bold mb-4 block">Features</span>
          <ul className="flex flex-col gap-3 text-neutral-gray">
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
          <span className="text-white font-bold mb-4 block">Resources</span>
          <ul className="flex flex-col gap-3 text-neutral-gray">
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
          <span className="text-white font-bold mb-4 block">Company</span>
          <ul className="flex flex-col gap-3 text-neutral-gray">
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
