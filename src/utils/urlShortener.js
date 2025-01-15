const API_TOKEN = "YOUR_TOKEN";

export async function shortenUrl(url) {
    const response = await fetch(
        `https://api.tinyurl.com/create?api_token=${API_TOKEN}`,
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${API_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url }),
        }
    );

    const data = await response.json();

    if (data.code === 0) {
        return data.data.tiny_url;
    } else {
        throw new Error("Failed to shorten URL");
    }
}

export function validateUrl(inputValue) {
    if (inputValue.trim() === "") {
        return "Please add a link";
    } else {
        const value = inputValue.trim();

        if (!/^https?:\/\//i.test(value)) {
            return "URL must start with 'http://' or 'https://'";
        } else if (!/(https?:\/\/(www\.)?)?[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?/i.test(value)) {
            return "Please include a valid domain ('example.com', 'www.example.com')";
        } else if (!isValidUrl(value)) {
            return "Please add a valid link";
        } else if (value.includes("tinyurl.com")) {
            return "You cannot shorten a TinyURL link.";
        } else {
            return null;
        }
    }
}

function isValidUrl(url) {
    const urlPattern = /^(https?:\/\/)([a-z0-9-]+\.)+[a-z]{2,6}(:\d+)?(\/[^\s]*)?$/i;
    return urlPattern.test(url);
}

export async function handleSubmit(inputValue, setInputValue, setShortenedUrls, setError) {
    const validationError = validateUrl(inputValue);
    if (validationError) {
        setError(validationError);
        return;
    }

    setError("");

    try {
        const shortUrl = await shortenUrl(inputValue.trim());
        setShortenedUrls(prevUrls => [...prevUrls, { originalUrl: inputValue.trim(), shortUrl }]);
        setInputValue("");
    } catch (error) {
        setError("Error shortening URL.");
        console.error(error);
    }
}

