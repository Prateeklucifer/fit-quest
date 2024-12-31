import Link from "next/link";
import React from "react";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Classes",
      href: "/classes",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header>
      <nav className="m-auto container px-4 py-3 font-Montserrat font-medium">
        <div className="wrapper flex justify-between items-center">
          <Link href={"/"} className="logo">
            <h1 className="text-xl lg:text-2xl font-bold">Dance<span className="text-accent">Lab</span></h1>
          </Link>
          <div id="for-mobile" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div id="for-desktop" className="hidden md:flex items-center">
            <ul className="flex items-center gap-6 lg:gap-9">
              {links.map((link) => (
                <li className="" key={link.name}>
                  <Link
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href={"/contact"} className="hidden md:block bg-accent text-white py-1 px-3 rounded font-medium">
            Join Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
