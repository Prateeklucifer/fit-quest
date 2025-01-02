import Image from "next/image";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Classes from "./components/Services";
import CTA from "./components/CTA";
import About from "./components/About";
import Contact from "./components/Contact";
import Mentors from "./components/mentors";
import Schedule from "./components/Schedule";

export default function Home() {
  return (
    <>
      <Hero />
      <h3 className="font-bold text-xl lg:text-2xl text-center my-5 md:my-11 font-Montserrat">
        Our Serviecs
      </h3>
      <Classes />
      <h3 className="font-bold text-xl lg:text-2xl text-center mt-20 mb-8 font-Montserrat">
        About Us
      </h3>
      <About />
      <h3 className="font-bold text-xl lg:text-2xl text-center mt-20 mb-8 font-Montserrat">
        Our Timing
      </h3>
      <Schedule />
      <h3 className="font-bold text-xl lg:text-2xl text-center mt-20 mb-8 font-Montserrat">
        Our Trainers
      </h3>
      <Mentors />
      <h3 className="font-bold text-xl lg:text-2xl text-center mt-20 mb-8 font-Montserrat">
        Contact Us
      </h3>
      <Contact />
    </>
  );
}
