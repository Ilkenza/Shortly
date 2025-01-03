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
    <section className="px-36 bg-slate-100">
      <div className="relative">
        <div
          className={`w-full absolute ${error ? "-top-[74px]" : "-top-[68px]"}`}
        >
          <div className="bg-primary-violet rounded-xl">
            <form
              className={`lg:bg-bg_shorten_desktop bg-bg_shorten_mobile rounded-xl bg-cover ${
                error ? "p-10 pb-4" : "p-10"
              }`}
              onSubmit={onSubmit}
            >
              <div className="flex justify-center items-center gap-5">
                <input
                  className={`py-4 px-6 rounded-xl w-[85%] outline-none ${
                    error
                      ? "border-2 border-secondary-red placeholder-secondary-red/60"
                      : ""
                  }`}
                  type="text"
                  placeholder="Shorten a link here..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="text-white font-bold bg-primary-cyan py-4 rounded-xl w-[15%]">
                  Shorten It!
                </button>
              </div>
              {error && <p className="text-secondary-red pt-2">{error}</p>}
            </form>
          </div>
        </div>
      </div>
      <div className="pt-11">
        <div className="gap-y-4 flex flex-col overflow-y-auto max-h-[15.8rem] mt-12">
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
