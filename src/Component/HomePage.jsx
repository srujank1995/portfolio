import React from "react";
import HeroImage from "../Assets/ProfileImg.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const HomePage = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Full Stack Developer
        </h2>
          <p className="py-4 max-w-md text-gray-50 font-semibold">
            Dedicated Full Stack Developer with 1 year of hands-on experience,
            specializing in React.js as a primary skill and Core Java with
            Spring Boot as secondary expertise. Proficient in crafting intuitive
            and responsive web interfaces using React.js and adept at building
            robust server-side applications. Committed to delivering
            high-quality solutions, I excel in problem-solving and thrive in
            collaborative, Agile environments. My ability to bridge the gap
            between frontend and back-end development ensures seamless,
            end-to-end application functionality
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="min-[320px]:text-center max-[600px]:bg-sky-300 group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-72"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
