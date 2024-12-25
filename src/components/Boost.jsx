function Boost() {
  return (
    <aside className="bg-primary-violet h-[20vh] w-full flex flex-col justify-center items-center">
      <div className="h-[20vh] w-full flex flex-col justify-center items-center gap-5 bg-no-repeat bg-cover lg:bg-bg_boost_desktop bg-bg_boost_mobile">
        <h2 className="text-white font-bold text-3xl">
          Boost your links today
        </h2>
        <button className="bg-primary-cyan rounded-full px-8 py-[0.6rem] text-white font-bold">
          Get Started
        </button>
      </div>
    </aside>
  );
}

export default Boost;
