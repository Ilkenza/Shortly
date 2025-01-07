import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import statsData from "../data/statsData";

function Statistics() {
  const [animation, setAnimation] = useState("zoom-in");

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });

    const updateAOSAnimations = () => {
      if (window.innerWidth < 768) {
        setAnimation("fade-up");
        setAnimation("zoom-in-up");
      }
      Aos.refresh();
    };

    updateAOSAnimations();
    window.addEventListener("resize", updateAOSAnimations);

    return () => {
      window.removeEventListener("resize", updateAOSAnimations);
    };
  }, []);

  return (
    <section className="px-6 md:px-12 lg:px-24 xl:px-36 bg-slate-100 flex justify-center flex-col relative">
      <div
        className="w-full flex items-center justify-center mb-32"
        data-aos={animation}
      >
        <div className="text-center pt-20 max-w-[30rem] w-full">
          <h2 className="font-bold text-neutral-veryDarkBlue text-3xl md:text-4xl pb-4">
            Advanced Statistics
          </h2>
          <p className="text-neutral-grayishViolet text-base font-medium leading-7">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>

      {/* Sekcija sa statistikom - koristi default "fade-in" animaciju */}
      <div className="flex md:flex-row flex-col justify-center items-center gap-20 md:gap-7 pb-40">
        {statsData.map((stat, index) => (
          <article
            key={index}
            className={`rounded-sm bg-white px-6 lg:px-8 pt-16 lg:pt-20 pb-8 lg:pb-10 relative w-full md:w-1/3 flex flex-col items-center ${
              stat.offsetClass
            } ${
              stat.hasBefore
                ? "before:w-2 before:h-11 md:before:w-7 md:before:h-2 md:before:-left-7 before:bg-primary-cyan before:absolute"
                : ""
            }`}
            data-aos="fade-in"
          >
            <img
              className="bg-primary-violet p-5 rounded-full absolute -top-10 w-20"
              src={stat.imgSrc}
              alt={stat.imgAlt}
            />
            <h3 className="text-neutral-veryDarkBlue text-lg lg:text-xl font-bold mb-4">
              {stat.title}
            </h3>
            <p className="text-neutral-grayishViolet text-sm lg:text-base leading-7">
              {stat.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
