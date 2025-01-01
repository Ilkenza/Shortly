import { useState } from "react";
import Short from "./Short";

function Shorten() {
  const [inputValue, setInputValue] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [error, setError] = useState("");

  const isValidUrl = (value) => {
    const urlPattern =
      /^(https?:\/\/)([a-z0-9-]+\.)+[a-z]{2,6}(:\d+)?(\/[^\s]*)?$/i;
    return urlPattern.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      setError("Please add a link");
    } else {
      const value = inputValue.trim();

      if (!/^https?:\/\//i.test(value)) {
        setError("URL must start with 'http://' or 'https://'");
      } else if (!/[a-z0-9-]+\.[a-z]{2,6}/i.test(value)) {
        setError(
          "Please include a valid domain ('example.com', 'example.org')"
        );
      } else if (!isValidUrl(value)) {
        setError("Please add a valid link");
      } else if (value.includes("tinyurl.com")) {
        setError("You cannot shorten a TinyURL link.");
      } else {
        setError("");

        try {
          const apiToken =
            "OQZuhZlIQf0HJRMZNFlsCcFLemMgNnls8WcZvcXANbf3DaIyOeYwXXZ4JvGn";

          const response = await fetch(
            `https://api.tinyurl.com/create?api_token=${apiToken}`,
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${apiToken}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                url: value,
              }),
            }
          );

          const data = await response.json();

          if (data.code === 0) {
            const newShortenedUrl = {
              originalUrl: value,
              shortUrl: data.data.tiny_url,
            };

            // Add new shortened URL to the list
            setShortenedUrls((prevUrls) => [...prevUrls, newShortenedUrl]);
            setInputValue("");
          } else {
            setError("Failed to shorten URL. Please try again.");
          }
        } catch (error) {
          setError("Error shortening URL.");
          console.log(error);
        }
      }
    }
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
              onSubmit={handleSubmit}
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
