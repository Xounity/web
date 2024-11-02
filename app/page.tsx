"use client"
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Event from "@/app/components/Events";
import Hero from "@/app/components/Hero";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <Hero />
      <hr />
      <Event />
      <Link
        passHref
        href="/event"
        className="flex justify-center items-center mb-8"
      >
        <button
          className="contact-btn h-10 mr-2 inline-flex items-center bg-transparent border-solid border-xounity-orange border-2 hover:bg-xounity-orange focus:outline-none hover:bg-transparent py-1 px-3 rounded text-base mt-4 md:mt-0"
          style={{ transitionDuration: "0.5s" }}
        >
          More Events
        </button>
      </Link>
      <hr />
      <About />
      <hr />
      <Contact />
      </>
  );
}
