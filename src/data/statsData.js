import brand from "../assets/icons/icon-brand-recognition.svg";
import detailed from "../assets/icons/icon-detailed-records.svg";
import customizable from "../assets/icons/icon-fully-customizable.svg"

const statsData = [
    {
        imgSrc: brand,
        imgAlt: "Brand Recognition",
        title: "Brand Recognition",
        description:
            "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
        offsetClass: "top-0 md:top-0 ",
        hasBefore: false,
    },
    {
        imgSrc: detailed,
        imgAlt: "Detailed Records",
        title: "Detailed Records",
        description:
            "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
        offsetClass: "top-0 md:top-10 before:-top-[5rem] md:before:top-[6.8rem]",
        hasBefore: true,
    },
    {
        imgSrc: customizable,
        imgAlt: "Fully Customizable",
        title: "Fully Customizable",
        description:
            "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        offsetClass: "top-0 md:top-20 before:-top-[5rem] md:before:top-[4.8rem]",
        hasBefore: true,
    },
];

export default statsData;
