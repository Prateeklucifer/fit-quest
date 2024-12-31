import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="relative md:min-h-[70vh] md:h-[80vh]">
      <div className="absolute w-full h-full top-0 left-0 bg-black/[61%] -z-10"></div>
      <img
        src="/hero.jpg"
        alt="hero.jpg"
        className="absolute top-0 left-0 w-full h-full -z-20 object-cover"
      />
      <div className="container px-4 m-auto py-28 z-30 flex items-start flex-col justify-center h-full md:min-h-[70vh]">
        <h1 className="text-2xl font-bold font-Montserrat mb-2 lg:mb-4 md:text-3xl lg:text-5xl text-white md:w-1/2 xl:text-5xl ">
          Step into the world of dance and
          <span className="bg-accent text-white px-2 py-1 rounded leading-relaxed ml-2">Feel the magic.</span>
        </h1>
        <p className="text-lg mb-10 md:mb-14 text-white md:w-1/2 lg:text-xl">
          Discover the magic of dance at Dance Lab. Whether you're a beginner or pro, join us and let the rhythm move you!
        </p>
        <Link href={"/contact"} className="text-lg py-3 bg-accent text-white px-4 rounded font-semibold lg:text-xl">
          Book Your First Class
        </Link>
      </div>
    </div>
  );
}
