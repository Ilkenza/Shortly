import { useState } from "react";
import Short from "./Short";
import { handleSubmit } from "../utils/urlShortener";

function Shorten() {
  const [inputValue, setInputValue] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(inputValue, setInputValue, setShortenedUrls, setError);
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 xl:px-36 bg-slate-100">
      <div className="relative">
        <div
          className={`w-full absolute ${
            error
              ? "-top-[82px] sm:-top-[54px] md:-top-[60px] lg:-top-[70px] xl:-top-[74px]"
              : "-top-[68px] sm:-top-[40px] md:-top-[44px] lg:-top-[52px] xl:-top-[68px]"
          }`}
        >
          <div className="bg-primary-violet rounded-xl">
            <form
              className={`sm:bg-bg_shorten_desktop bg-bg_shorten_mobile rounded-xl bg-cover bg-no-repeat bg-[150px_-180px] sm:bg-top ${
                error
                  ? "p-5 pb-4 lg:p-6 lg:pb-5 xl:p-10 xl:pb-8"
                  : "p-5 lg:p-6 xl:p-10"
              }`}
              onSubmit={onSubmit}
            >
              <div className="flex flex-col sm:flex-row justify-center items-start gap-4 lg:gap-5">
                <div className="w-full sm:w-[70%] md:w-4/5 lg:w-[85%] flex flex-col">
                  <input
                    className={`py-2 px-3 md:py-3 lg:py-4 md:px-4 lg:px-6 rounded-md sm:rounded-lg lg:rounded-xl w-full outline-none ${
                      error
                        ? "border-2 border-secondary-red placeholder-secondary-red/60"
                        : ""
                    }`}
                    type="text"
                    placeholder="Shorten a link here..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  {error && (
                    <p className="text-secondary-red text-sm md:text-base pt-2">
                      {error}
                    </p>
                  )}
                </div>
                <button className="text-white font-bold bg-primary-cyan py-2 md:py-3 lg:py-4 rounded-md sm:rounded-lg lg:rounded-xl w-full sm:w-[30%] md:w-1/5 lg:w-[15%]">
                  Shorten It!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className={` ${
          !error
            ? "pt-10 sm:pt-4 lg:pt-6 xl:pt-10"
            : "pt-20 sm:pt-10 md:pt-10 lg:pt-10 xl:pt-16"
        }`}
      >
        <div className="gap-y-4 flex flex-col overflow-y-auto max-h-[15.8rem] mt-12 relative">
          {shortenedUrls.map((urlObj, index) => (
            <Short
              originalUrl={urlObj.originalUrl}
              shortUrl={urlObj.shortUrl}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shorten;
