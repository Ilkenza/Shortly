import brand from "../../public/assets/icons/icon-brand-recognition.svg";
import detailed from "../../public/assets/icons/icon-detailed-records.svg";
import customizable from "../../public/assets/icons/icon-fully-customizable.svg";

const statsData = [
    {
        imgSrc: brand,
        imgAlt: "Brand Recognition",
        title: "Brand Recognition",
        description:
            "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
        offsetClass: "top-0",
        hasBefore: false,
    },
    {
        imgSrc: detailed,
        imgAlt: "Detailed Records",
        title: "Detailed Records",
        description:
            "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
        offsetClass: "top-10",
        hasBefore: true,
    },
    {
        imgSrc: customizable,
        imgAlt: "Fully Customizable",
        title: "Fully Customizable",
        description:
            "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        offsetClass: "top-20",
        hasBefore: true,
    },
];

export default statsData;
