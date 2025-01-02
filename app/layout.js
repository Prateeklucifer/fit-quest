"use client";


import { Varela_Round } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminPannel from "./components/AdminPannel";
import { usePathname } from "next/navigation";


const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: ["400"]
});
export default function RootLayout({ children }) {
  let pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${varelaRound.className} antialiased`}
      >
        {pathname.startsWith("/admin") ? <AdminPannel /> : <Navbar />}
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
