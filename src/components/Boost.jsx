import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Boost() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <aside className="bg-primary-violet w-full flex flex-col justify-center items-center overflow-hidden transition-[height] duration-1000 ease-in-out">
      <div
        className="h-[20vh] w-full flex flex-col justify-center items-center gap-5 bg-no-repeat bg-cover lg:bg-bg_boost_desktop bg-bg_boost_mobile bg-[10px_-27px] sm:bg-top"
        data-aos="zoom-out"
      >
        <h2 className="text-white font-bold text-2xl md:text-3xl">
          Boost your links today
        </h2>
        <a
          href="#shorten"
          className="bg-primary-cyan rounded-full px-8 py-[0.6rem] text-white font-bold hover:shadow-[inset_0px_50px_5px_rgba(255,255,255,0.6)] transition-shadow duration-300"
        >
          Get Started
        </a>
      </div>
    </aside>
  );
}

export default Boost;
