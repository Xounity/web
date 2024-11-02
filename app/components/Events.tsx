import React from 'react';
import Image from 'next/image';
import harsh from "@/app/images/harsh.webp";
import { StaticImageData } from 'next/image';
import amna from "@/app/images/amna.webp";
import hamza from "@/app/images/hamza.webp";
import Link from 'next/link';

interface EventItemProps {
  href: string;
  imgSrc: StaticImageData;
  title: string;
  description: string;
  watchLink: string;
}

const EventItem: React.FC<EventItemProps> = ({ href, imgSrc, title, description, watchLink }) => (
  <div className="p-4 md:w-1/3 transition-delay-03">
    <Link
      className="rounded-lg overflow-hidden drop-shadow-lg"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      <Image
        alt="event"
        className="object-cover object-center h-64 w-full cursor-pointer hover:scale-110"
        src={imgSrc}
        style={{ transition: "all 0.5s" }}
      />
    </Link>
    <h2 className="text-xl font-medium title-font mt-5">
      {title}
    </h2>
    <p className="text-base font-normal leading-relaxed text-gray-400 mt-2">
      {description}
    </p>
    <Link href={watchLink} target="_blank" rel="noopener noreferrer">
      <button className="text-xounity-orange inline-flex items-center mt-3 hover:text-orange-600 duration-300 ease-in-out font-medium">
        Watch Now
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </Link>
  </div>
);

const Events: React.FC = () => {
  return (
    <>
      <section className="body-font mt-10">
        {/* Current Events start */}
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-4">
            <h1 className="text-center text-3xl font-medium title-font mb-2">
              Recent Events
            </h1>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
              <EventItem
                href="https://www.youtube.com/watch?v=vpBBQ9OX2ho"
                imgSrc={harsh}
                title="How To Pursue Your Career in UI/UX"
                description="By Harsh Advani"
                watchLink="https://www.youtube.com/watch?v=vpBBQ9OX2ho"
              />
              <EventItem
                href="https://youtu.be/aV5YVTzqsoQ?si=8CCx2tRrZ2AKd2JB"
                imgSrc={amna}
                title="Unlocking Data Science"
                description="By Amna Shahzad"
                watchLink="https://youtu.be/aV5YVTzqsoQ?si=8CCx2tRrZ2AKd2JB"
              />
              <EventItem
                href="https://www.youtube.com/watch?v=YuT4maa08xg"
                imgSrc={hamza}
                title="Career Building While Studying"
                description="By Hamza Farooqui"
                watchLink="https://www.youtube.com/watch?v=YuT4maa08xg"
              />
            </div>
          </div>
        </div>
        {/* Current Events end */}
      </section>
    </>
  );
};

export default Events;