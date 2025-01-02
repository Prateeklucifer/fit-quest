import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="px-4 py-9 sm:py-12 lg:py-20 container m-auto lg:flex items-center">
      <div className="lg:w-1/2 lg:px-6 xl:px-14">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
          Unleash Your Potential at Fit Quest
        </h1>
        <p className="py-2 lg:py-4 md:text-lg">
          Join us at Fit Quest, where we empower you to reach your fitness goals. Whether you're looking to build strength, lose weight, or improve your overall health, our state-of-the-art facilities and expert trainers are here to guide you every step of the way. Start your journey towards a healthier, stronger you today!
        </p>
        <Link href="/contact" className="bg-accent text-white px-3 py-2 my-5 md:my-8 rounded-sm font-bold md:text-lg block w-fit">
          Get Started
        </Link>
      </div>
      <div
        className="mt-6 flex justify-center items-center lg:w-1/2 lg:px-4"
      >
        <img
          src="/hero.png"
          alt=""
          className="rounded-xl h-72 w-full sm:h-80 lg:h-96 object-cover xl:h-[460px]"
        />
      </div>
    </section>
  );
}