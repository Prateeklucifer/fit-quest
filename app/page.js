import Image from "next/image";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Classes from "./components/Classes";
import CTA from "./components/CTA";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <Hero/>
    <Classes/>
    <CTA/>
    <About/>
    <Contact/>
    </>
  );
}
