import statsData from "../data/statsData";

function Statistics() {
  return (
    <section className="px-36 bg-slate-100 h-[90vh] flex justify-center flex-col">
      <div className="w-full flex items-center justify-center mb-32">
        <div className="text-center pt-20 max-w-[30rem] w-full">
          <h2 className="font-bold text-neutral-veryDarkBlue text-4xl pb-4">
            Advanced Statistics
          </h2>
          <p className="text-neutral-grayishViolet text-base font-medium leading-7">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>
      <div className="flex gap-7 pb-40">
        {statsData.map((stat, index) => (
          <article
            key={index}
            className={`rounded-sm bg-white px-8 pt-20 pb-10 relative w-1/3 ${
              stat.offsetClass
            } ${
              stat.hasBefore
                ? "before:w-7 before:h-2 before:-left-7 before:bg-primary-cyan before:absolute"
                : ""
            }`}
          >
            <img
              className="bg-primary-violet p-5 rounded-full absolute -top-10 w-20"
              src={stat.imgSrc}
              alt={stat.imgAlt}
            />
            <h3 className="text-neutral-veryDarkBlue text-xl font-bold mb-4">
              {stat.title}
            </h3>
            <p className="text-neutral-grayishViolet leading-7">
              {stat.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
