import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Short({ originalUrl, shortUrl }) {
  const [copyStatus, setCopyStatus] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopyStatus(true);

    setTimeout(() => setCopyStatus(false), 2000);
  };

  return (
    <div className="w-full bg-white relative items-center justify-between px-6 py-4 flex rounded-md">
      <p className="max-w-lg truncate overflow-hidden">{originalUrl}</p>
      <div className="flex items-center gap-5 text-neutral-veryDarkBlue">
        <p className="text-primary-cyan">{shortUrl}</p>
        <button
          onClick={handleCopy}
          className={` font-bold text-white rounded-md py-2 ${
            copyStatus
              ? "bg-primary-violet px-[1.32rem]"
              : "bg-primary-cyan px-8 hover:opacity-50"
          }`}
        >
          {copyStatus ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default Short;
