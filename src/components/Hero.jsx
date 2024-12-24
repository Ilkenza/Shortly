import illustration from "../../public/assets/images/illustration-working.svg";
function Hero() {
  return (
    <section className="mt-20 mb-36 px-36 flex flex-row-reverse items-center gap-5 justify-between overflow-x-hidden">
      <img
        className="max-w-4xl relative left-[17rem]"
        src={illustration}
        alt="illustration"
      />
      <div className="">
        <div className="max-w-md">
          <h1 className="text-neutral-veryDarkBlue font-bold text-6xl leading-[1.15]">
            More than just shorter links
          </h1>
          <p className="font-medium text-neutral-grayishViolet text-lg mb-8">
            Build your brand&apos;s recognition and get detailed insight on how
            your links are performing.
          </p>
          <button className="bg-primary-cyan rounded-full font-bold text-white px-8 py-3">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
