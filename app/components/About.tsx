import React from "react";
import mirza from "@/app/images/mirza.webp";
import muhaddis from "@/app/images/Muhaddis-mob.webp";
import ahmed from "@/app/images/Ahmed-mob.webp";
import junaid from "@/app/images/junaid.webp";
import hafeez from "@/app/images/hafeez.webp";
import furqan from "@/app/images/furqan.webp";
import noman from "@/app/images/noman.webp";
import { TeamCard } from "@/app/components/TeamCard";
import { TeamCardMobile } from "@/app/components/TeamCard";

const About = () => {
  return (
    <>
      {/* About Desktop */}

      <section id="about" className="body-font hidden md:flex mt-8">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-medium title-font mb-4">OUR TEAM</h1>
            <p
              className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400"
              style={{ transitionDelay: "0.3s" }}
            >
              Get to know the faces shaping Xounity - our team of diverse
              visionaries.
            </p>
          </div>
          {/* default 200x200 pic */}
          <div className="flex flex-wrap -m-4 justify-center">
            {/* member 1 */}
            <TeamCard
              name="Noman Ahmed"
              title="Community Lead"
              description="Software Engineer | Flutter | App Developer | SMIU Student"
              image={noman}
              linkedinSrc="https://www.linkedin.com/in/nomanpb234/"
              githubSrc="https://github.com/NomanAhmed234"
              instaSrc="https://www.instagram.com/itz_nomanahmed"
            />

            {/* member 2 */}
            <TeamCard
              name="Muhammad Furqan Khalil"
              title="Lead Content Writer"
              description="Web Developer | Freelancer | Creative | Hardworking"
              image={furqan}
              linkedinSrc="https://www.linkedin.com/in/FurqanHun"
              githubSrc="https://github.com/FurqanHun"
              instaSrc="https://www.instagram.com/furqan_hi_hun"
            />

            {/* member 3 */}
            <TeamCard
              name="Ahmed Zaheer"
              title="Onsite Event Manager"
              description="Good Communication | Confident | Organizer"
              image={ahmed}
              linkedinSrc="https://www.linkedin.com/in/ahmed-zaheer-5564b4282/"
              githubSrc="https://github.com/ahmed-khan033"
              instaSrc="https://www.instagram.com/ahmmedkhan03"
            />

            {/* member 4 */}
            <TeamCard
              name="Hafizullah Khokhar"
              title="Community Manager"
              description="Social | Active | Youtuber | Aesthetic | Photographer"
              image={hafeez}
              linkedinSrc="https://www.linkedin.com/in/hafizullahkhokhar1/"
              githubSrc="#"
              instaSrc="https://www.instagram.com/hafizullahkhokhar1"
            />

            {/* member 5 */}
            <TeamCard
              name="Muhaddis Afzal"
              title="Tech Team Lead"
              description="Front-End Developer | Fast Learner | Problem Solver"
              image={muhaddis}
              linkedinSrc="https://www.linkedin.com/in/M-U-H-A-D-D-I-S-bbb65a222/"
              githubSrc="https://github.com/Dantesos33"
              instaSrc="https://www.instagram.com/muhaddis004"
            />

            {/* member 6 */}
            <TeamCard
              name="Mirza Zain"
              title="Tech Team"
              description="MERN Developer | Tech Enthusiast | Motivated"
              image={mirza}
              linkedinSrc="https://www.linkedin.com/in/mirza-zain269/"
              githubSrc="https://github.com/mirza-zain"
              instaSrc="https://www.instagram.com/mirza_zain43"
            />

            {/* member 7 */}
            <TeamCard
              name="Junaid Rashid"
              title="Social Media Manager"
              description="Social | Designer | Formal | Well Dressed"
              image={junaid}
              linkedinSrc="https://www.linkedin.com/in/junaidrashid5955/"
              githubSrc="#"
              instaSrc="https://www.instagram.com/junaidrashid5955"
            />
          </div>
        </div>
      </section>

      {/* About Mobile */}
      <section id="mob-about" className="body-font md:hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-medium title-font mb-4">OUR TEAM</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
              Get to know the faces shaping Xounity - our team of diverse
              visionaries.
            </p>
          </div>
          <div>
            {/* member 1 */}
            <TeamCardMobile
              name="Noman Ahmed"
              title="Community Lead"
              description="Software Engineer | Flutter | App Developer | SMIU Student"
              image={noman}
              linkedinSrc="https://www.linkedin.com/in/nomanpb234/"
              githubSrc="https://github.com/NomanAhmed234"
              instaSrc="https://www.instagram.com/itz_nomanahmed"
            />

            {/* member 2 */}
            <TeamCardMobile
              name="Muhammad Furqan Khalil"
              title="Lead Content Writer"
              description="Web Developer | Freelancer | Creative | Hardworking"
              image={furqan}
              linkedinSrc="https://www.linkedin.com/in/FurqanHun"
              githubSrc="https://github.com/FurqanHun"
              instaSrc="https://www.instagram.com/furqan_hi_hun"
            />

            {/* member 3 */}
            <TeamCardMobile
              name="Ahmed Zaheer"
              title="Onsite Event Manager"
              description="Good Communication | Confident | Organizer"
              image={ahmed}
              linkedinSrc="https://www.linkedin.com/in/ahmed-zaheer-5564b4282/"
              githubSrc="https://github.com/ahmed-khan033"
              instaSrc="https://www.instagram.com/ahmmedkhan03"
            />

            {/* member 4 */}
            <TeamCardMobile
              name="Hafizullah Khokhar"
              title="Community Manager"
              description="Social | Active | Youtuber | Aesthetic | Photographer"
              image={hafeez}
              linkedinSrc="https://www.linkedin.com/in/hafizullahkhokhar1/"
              githubSrc="#"
              instaSrc="https://www.instagram.com/hafizullahkhokhar1"
            />

            {/* member 5 */}
            <TeamCardMobile
              name="Muhaddis Afzal"
              title="Tech Team Lead"
              description="Front-End Developer | Fast Learner | Problem Solver"
              image={muhaddis}
              linkedinSrc="https://www.linkedin.com/in/M-U-H-A-D-D-I-S-bbb65a222/"
              githubSrc="https://github.com/Dantesos33"
              instaSrc="https://www.instagram.com/muhaddis004"
            />

            {/* member 6 */}
            <TeamCardMobile
              name="Mirza Zain"
              title="Tech Team"
              description="MERN Developer | Tech Enthusiast | Motivated"
              image={mirza}
              linkedinSrc="https://www.linkedin.com/in/mirza-zain269/"
              githubSrc="https://github.com/mirza-zain"
              instaSrc="https://www.instagram.com/mirza_zain43"
            />

            {/* member 7 */}
            <TeamCardMobile
              name="Junaid Rashid"
              title="Social Media Manager"
              description="Social | Designer | Formal | Well Dressed"
              image={junaid}
              linkedinSrc="https://www.linkedin.com/in/junaidrashid5955/"
              githubSrc="#"
              instaSrc="https://www.instagram.com/junaidrashid5955"
            />
          </div>
        </div>
      </section>
      {/* About end */}
    </>
  );
};

export default About;
