import React from "react";
import HeroImage from "../assets/tj.png";   // sirf ye rakho
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home"
      name="home"
      className="h-screen w-full bg-[#0B0B0B] home"
  
    >
      <div className="mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
  {/* ab max-w-screen-lg hata diya */}

      <div className="small-screen hidden">
        <img
          src={HeroImage}
          alt="profile"
                className="rounded-2xl mx-auto w-full md:w-4/5"
          />


        </div>
        <div className="flex flex-col justify-center h-full md:ml-40 mt-32">
          <h2 className="text-6xl sm:text-8xl font-bold text-white">
            Full Stack Web & UI/UX Designer + Data Analyst
          </h2>
          <p className="text-gray-300 py-9 max-w-md">
            I have 4 years of experience building websites,
          designing user-friendly web experiences, and analyzing
            data to help businesses grow. I create modern,
          responsive web applications using React, Next.js, Tailwind
            CSS, Adobe Creative Suite, and deliver actionable
          insights through Excel, Python, and data visualization.
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-900 to-black cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
