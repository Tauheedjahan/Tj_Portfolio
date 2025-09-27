import React from "react";
import HeroImage from "../assets/tj.png"; // sirf ye rakho
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home" name="home" className="h-screen w-full bg-[#0B0B0B]">
      <div className="flex flex-col md:flex-row h-full w-full">

        {/* Left: Heading, Paragraph, Button */}
        <div className="w-full md:w-3/5 flex flex-col justify-center bg-red-500 p-8">
          <h2 className="text-5xl sm:text-7xl font-bold text-white">
            Full Stack Web & UI/UX Designer + Data Analyst
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mt-6 max-w-lg">
            I have 4 years of experience building websites, designing user-friendly web experiences,
            and analyzing data to help businesses grow. I create modern, responsive web applications
            using React, Next.js, Tailwind CSS, Adobe Creative Suite, and deliver actionable insights
            through Excel, Python, and data visualization.
          </p>

          <div className="mt-8">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-gray-900 to-black cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-2/5 flex items-center justify-center bg-green-500 p-4">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl w-4/5 md:w-full"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
