import React from "react";
import HeroImage from "../assets/tj.png";   // sirf ye rakho
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      id="home"
      name="home"
      className="h-screen w-full bg-[#0B0B0B] home"
    >
      <div className="mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

        {/* Left Section - Text Content */}
        <div className="flex flex-col justify-center h-full md:ml-40 mt-32 text-center md:text-left">
          <h2 className="text-4xl sm:text-7xl font-bold text-white leading-tight">
            Frontend Developer & Data Analyst
          </h2>

          <p className="text-gray-300 py-9 max-w-md">
            I design clean, responsive websites and create interactive dashboards that turn data into insights.  
            I specialize in crafting fast, user-friendly web experiences using <strong>React</strong> and <strong>Tailwind CSS</strong>,  
            and transforming business data into visual stories with <strong>Excel</strong>, <strong>Power BI</strong>, and <strong>Python</strong>.
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
                         bg-gradient-to-r from-green-700 to-black cursor-pointer hover:scale-105 transition-transform"
            >
              View My Work
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="big-screen">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
