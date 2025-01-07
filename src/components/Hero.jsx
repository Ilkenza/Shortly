import Aos from "aos";
import illustration from "../assets/images/illustration-working.svg";
import { useEffect } from "react";
function Hero() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section className="mt-8 md:mt-20 mb-36 sm:mb-24 md:mb-36 pb-3 px-6 md:px-12 lg:px-24 xl:px-36 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-5 justify-between overflow-x-hidden">
      <div
        className="w-full md:w-1/2 flex justify-center md:justify-end"
        data-aos="zoom-in-left"
      >
        <img
          className="max-w-full md:max-w-none md:w-[120%] lg:w-[140%] xl:w-[150%] relative left-24 sm:left-32 md:left-32 lg:left-60 xl:left-64"
          src={illustration}
          alt="illustration"
        />
      </div>
      <div
        className="w-full md:w-1/2 text-center md:text-left"
        data-aos="fade-right"
      >
        <div className="max-w-md mx-auto md:mx-0">
          <h1 className="text-neutral-veryDarkBlue font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight md:leading-[1.15] mb-4">
            More than just shorter links
          </h1>
          <p className="font-medium text-neutral-grayishViolet text-base lg:text-md xl:text-lg mb-8">
            Build your brand&apos;s recognition and get detailed insight on how
            your links are performing.
          </p>
          <a
            className="bg-primary-cyan rounded-full font-bold text-white px-8 py-3 hover:bg-opacity-70 transition-colors duration-300 cursor-pointer "
            href="#shorten"
            id="shorten"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
