import Short from "./Short";

function Shorten() {
  return (
    <section className="mx-36 relative">
      <div className="w-full absolute -top-[68px]">
        <div className="bg-primary-violet rounded-xl">
          <form className=" lg:bg-bg_shorten_desktop bg-bg_shorten_mobile rounded-xl flex justify-center items-center p-10 gap-5">
            <input
              className="py-4 px-6 rounded-xl w-[85%]"
              type="text"
              placeholder="Shorten a link here..."
            />
            <button className="text-white font-bold bg-primary-cyan py-4 rounded-xl w-[15%] ">
              Shorten It!
            </button>
          </form>
          <p className="text-secondary-red hidden">Please add a link</p>
        </div>
      </div>
      <div>
        <Short />
      </div>
    </section>
  );
}

export default Shorten;
