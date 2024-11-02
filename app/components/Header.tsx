"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useState} from "react";
import Image from "next/image";
import darklogo from "@/app/images/logo_dark.webp";
import lightlogo from "@/app/images/logo_light.webp";
import Link from "next/link";
import { useTheme } from "../ThemeContext";
import JoinPopup from "./JoinPopup";

const Header = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mob, setMob] = useState(false);
  const [isPopupOpen, setisPopupOpen] = useState(false);
  const openPopup = () => setisPopupOpen(true);
  const closePopup = () => setisPopupOpen(false);

  return (
    <>
      {/* Header start */}
      <header
        className="z-50 bg-transparent top-0 body-font w-full h-24 flex justify-between items-center"
        style={{
          position: "fixed",
          backdropFilter: "blur(5px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-row md:flex-column justify-between items-center">
          <Link
          onClick={closePopup}
            href="/"
            className="flex title-font font-medium items-center mb-4 md:mb-0"
            title="Home"
          >
            <Image
              src={theme === "dark" ? darklogo : lightlogo}
              alt="logo"
              className="w-36 object-cover cursor-pointer"
            />
          </Link>
          <nav className="md:ml-auto flex-wrap flex items-center text-base justify-center menu-items md:flex">
            {/* Desktop Nav */}
            <div className="menu-items hidden md:flex justify-center items-center">
              <Link
              onClick={closePopup}
                passHref
                href="/"
                className={
                  pathname === "/"
                    ? "mr-5 cursor-pointer"
                    : "mr-5 cursor-pointer text-gray-400"
                }
              >
                Home
              </Link>
              <Link
              onClick={closePopup}
                passHref
                href="/about"
                className={
                  pathname === "/about"
                    ? "mr-5 cursor-pointer"
                    : "mr-5 cursor-pointer text-gray-400"
                }
              >
                About
              </Link>
              <Link
              onClick={closePopup}
                passHref
                href="/event"
                className={
                  pathname === "/event"
                    ? "mr-5 cursor-pointer "
                    : "mr-5 cursor-pointer text-gray-400"
                }
              >
                Events
              </Link>
              <Link
              onClick={closePopup}
                passHref
                href="/contact"
                className={
                  pathname === "/contact"
                    ? "mr-5 cursor-pointer"
                    : "mr-5 cursor-pointer text-gray-400"
                }
              >
                Contact
              </Link>
              
                <button
                onClick={openPopup}
                  className="contact-btn tracking-wider h-10 mr-2 inline-flex items-center bg-transparent border-solid border-xounity-orange border-2 hover:bg-xounity-orange focus:outline-none hover:bg-transparent py-1 px-3 rounded text-base mt-4 md:mt-0"
                  style={{ transitionDuration: "0.5s" }}
                >
                  Join Us
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              
            </div>

            <button
              className="mr-5 md:mr-0"
              onClick={toggleTheme}
              title="Toggle theme"
            >
              <i
                className={
                  theme === "light"
                    ? "ri-moon-fill text-black"
                    : "ri-sun-fill text-white"
                }
              ></i>
            </button>

            <div className="md:hidden z-50">
              <button
                className="text-xl"
                onClick={() => {
                  setMob(!mob);
                }}
                title={mob ? "Close menu" : "Open menu"}
              >
                <i className={mob ? "ri-close-line" : "ri-menu-line"}></i>
              </button>
            </div>
          </nav>

          {/* Mobile Nav */}
          {mob && (
            <div
              className={
                theme === "light"
                  ? "bg-white md:hidden fixed top-0 left-0 z-40 h-screen w-full"
                  : "bg-black md:hidden fixed top-0 left-0 z-40 h-screen w-full"
              }
            >
              <div className="h-full w-full flex flex-col items-center justify-evenly">
                <Link
                  passHref
                  href="/"
                  onClick={() => {
                    setMob(!mob);
                  }}
                  className={
                    pathname === "/"
                      ? "mr-5 cursor-pointer"
                      : "mr-5 cursor-pointer text-gray-400"
                  }
                >
                  Home
                </Link>
                <Link
                  passHref
                  href="/about"
                  onClick={() => {
                    setMob(!mob);
                  }}
                  className={
                    pathname === "/about"
                      ? "mr-5 cursor-pointer"
                      : "mr-5 cursor-pointer text-gray-400"
                  }
                >
                  About
                </Link>
                <Link
                  passHref
                  href="/event"
                  onClick={() => {
                    setMob(!mob);
                  }}
                  className={
                    pathname === "/event"
                      ? "mr-5 cursor-pointer"
                      : "mr-5 cursor-pointer text-gray-400"
                  }
                >
                  Events
                </Link>
                <Link
                  passHref
                  href="/contact"
                  onClick={() => {
                    setMob(!mob);
                  }}
                  className={
                    pathname === "/contact"
                      ? "mr-5 cursor-pointer"
                      : "mr-5 cursor-pointer text-gray-400"
                  }
                >
                  Contact
                </Link>
                <Link
                  passHref
                  href="/join"
                  onClick={() => {
                    setMob(!mob);
                  }}
                  className="contact-btn h-10 mr-2 inline-flex items-center bg-transparent border-solid border-xounity-orange border-2 hover:bg-xounity-orange focus:outline-none hover:bg-transparent py-1 px-3 rounded text-base mt-4 md:mt-0"
                  style={{ transitionDuration: "0.5s" }}
                >
                  Join Us
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Header end */}
      {/* Goto Top button */}
      <Link href="#home" target="_self" id="myBtn" title="Go to Top">
        <i className="fa fa-angle-up" />
      </Link>
      {/* home section */}
      {
        isPopupOpen && (
          <JoinPopup onClose={closePopup} />
        )
      }
    </>
  );
};

export default Header;
