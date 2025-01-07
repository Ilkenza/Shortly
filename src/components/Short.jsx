import Aos from "aos";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function Short({ originalUrl, shortUrl }) {
  const [copyStatus, setCopyStatus] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopyStatus(true);

    setTimeout(() => setCopyStatus(false), 2000);
  };
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="w-full bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-md"
      data-aos="fade-in"
    >
      <div className="w-full sm:w-1/2 mb-3 sm:mb-0">
        <p className="max-w-full sm:max-w-[90%] truncate overflow-hidden text-sm md:text-base">
          {originalUrl}
        </p>
      </div>
      <div className="w-[100%] right-0 h-[2px] sm:hidden bg-slate-100 absolute top-11"></div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-3 sm:gap-5 w-full sm:w-1/2 mt-3 sm:mt-0">
        <p className="text-primary-cyan text-sm md:text-base truncate overflow-hidden">
          {shortUrl}
        </p>
        <button
          onClick={handleCopy}
          className={`font-bold text-white rounded-md py-2 w-full sm:w-auto transition-opacity duration-300 ${
            copyStatus
              ? "bg-primary-violet px-[0.8rem] md:px-[1.32rem]"
              : "bg-primary-cyan hover:opacity-50 px-6 md:px-8 "
          }`}
        >
          {copyStatus ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default Short;
