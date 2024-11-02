import React from 'react'
import Image from "next/image";
import replace from "@/app/images/replacement.webp";
import instagram from "@/app/images/instagram.webp";
import discord from "@/app/images/discord.webp";
import facebook from "@/app/images/facebook.webp";
import linkedin from "@/app/images/linkedin.webp";
import telegram from "@/app/images/telegram.webp";
import wa_channel from "@/app/images/wa-channel.webp";
import whatsapp from "@/app/images/whatsapp.webp";
import youtube from "@/app/images/youtube.webp";
import Link from "next/link";


const Hero = () => {
  return (
    <>
    {/* Hero start */}
    <section id="home" className=" body-font mt-10">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 delay-200">
            <Image
              className="object-cover object-center rounded"
              src={replace}
              alt="replace"
            />
            {/* https://dummyimage.com/720x600 */}
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="main-heading title-font sm:text-4xl text-3xl mb-4 font-medium delay-75">
              Diverse Minds, One Vision
            </h1>
            <p className="mb-8 leading-relaxed delay-100 text-gray-400">
              Join us at Xounity, where diverse minds foster innovation and unite
              under one vision. Together, we&apos;re creating a zone for an inclusive
              future. #Xounity
            </p>
            <div className="flex justify-center delay-100">
              {/* add socialmedia circle logos link with links here */}
              <div className="social-icons flex items-center justify-center gap-4 flex-wrap">
                <Link href="https://www.instagram.com/xounity1" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <Image
                    src={instagram}
                    alt="instagram"
                    id="s1"
                    className="social-icon w-10 object-cover"
                  />
                </Link>
                <Link href="https://www.linkedin.com/company/xounity" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <Image
                    src={linkedin}
                    alt="linkedin"
                    id="s2"
                    className="social-icon w-10 object-cover"
                  />
                </Link>
                <Link href="https://www.facebook.com/xounity1" target="_blank" rel="noopener noreferrer" title="Facebook">
                  <Image
                    src={facebook}
                    alt="facebook"
                    id="s3"
                    className="social-icon w-10 object-cover"
                  />
                </Link>
                <Link href="https://discord.com/invite/V9mJaQUAu4" target="_blank" rel="noopener noreferrer" title="Discord">
                  <Image
                    src={discord}
                    alt="discord"
                    id="s4"
                    className="social-icon w-10 object-cover"
                  />
                </Link>
                <Link href="https://www.youtube.com/@xounity1" target="_blank" rel="noopener noreferrer" title="YouTube">
                  <Image
                    src={youtube}
                    alt="youtube"
                    id="s5"
                    className="social-icon w-10 object-cover"
                  />
                </Link>
                <Link href="https://t.me/xounity1" target="_blank" rel="noopener noreferrer" title="Telegram">
                  <Image
                    src={telegram}
                    alt="telegram"
                    id="s6"
                    className="social-icon w-10 object-cover"
                  />
                </Link>
                <Link href="https://chat.whatsapp.com/Dglys3PUmK3Ktt2OOyKdY6" target="_blank" rel="noopener noreferrer" title="WhatsApp Community">
                  <Image
                    src={whatsapp}
                    alt="whatsapp community"
                    id="s7"
                    className="social-icon w-10 object-cover"
                  />
                </Link>
                <Link href="https://whatsapp.com/channel/0029VaYhJmD9cDDVJLuqao0Y" target="_blank" rel="noopener noreferrer" title="WhatsApp Channel">
                  <Image
                    src={wa_channel}
                    alt="whatsapp channel"
                    id="s8"
                    className="social-icon w-10 object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero end */}
    </>
  )
}

export default Hero