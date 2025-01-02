import Link from "next/link";
import React from "react";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Trainer",
      href: "/trainer",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="bg-neutral-800 text-white">
      <nav className="m-auto container px-4 py-6">
        <div className="wrapper flex justify-between items-center">
          <Link href={"/"} className="logo">
            <h1 className="text-xl lg:text-2xl font-bold">Fit<span className="text-accent">Quest</span></h1>
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
        </div>
      </nav>
    </header>
  );
}
