import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shorten from "./components/Shorten";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Shorten />
      <Statistics />
      <Boost />
      <Footer />
      <h6 className="w-full bg-neutral-veryDarkViolet text-center text-white pb-5">
        Made by
        <a
          href="https://ilijakorodic.netlify.app/"
          className="underline hover:text-primary-cyan transition-colors duration-300"
          target="_blank"
        >
          {" "}
          Ilija Korodic
        </a>
      </h6>
    </>
  );
}

export default App;
