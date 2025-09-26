import React from "react";
import api from "../assets/portfolio/api.jpg";
import apod from "../assets/portfolio/apod.jpg";
import iptracker from "../assets/portfolio/iptracker.jpg";
import nftportal from "../assets/portfolio/nftportal.jpg";
// import webpostman from "../assets/portfolio/webpostman.jpg"; // Removed unused import
import waveportal from "../assets/portfolio/waveportal.jpg";
import empbusi from "../assets/portfolio/empbusi.png"; // new project image

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: api,
      link: "https://restaurant-sigma-nine.vercel.app/",
      repo: "https://github.com/Tauheedjahan/Restaurant",
    },
    {
      id: 2,
      src: empbusi,
      link: "https://salt-legal-frontend.vercel.app/#/",
      repo: "",
    },
    {
      id: 3,
      src: apod,
      link: "https://fitlife-master-psi.vercel.app/",
      repo: "",
    },
    {
      id: 4,
      src: waveportal,
      link: "https://web-theme-main.vercel.app/",
      repo: "",
    },
    {
      id: 5,
      src: nftportal,
      link: "https://powerzone1.netlify.app/",
      repo: "https://github.com/samir-27/Power-Zone",
    },
    {
      id: 6,
      src: iptracker,
      link: "https://trackmyip.netlify.app/",
      repo: "https://github.com/rahulkarda/IP-Address-Tracker",
    },
  ];

  // Function to handle "Load More" button click
  const handleLoadMore = () => {
    // Open a new page (you can replace the URL with your portfolio page)
        window.open("/more-services", "_blank");
  };

  return (
    // Changed name="portfolio" to name="services" to match NavBar link
    <div id="services"
      name="services"
      className="bg-[#0B0B0B] w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Services
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(link, "_blank")}
                >
                  Visit Website
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-8">
          <button
            className="px-6 py-3 bg-[#272827] hover:bg-[#4F5051] rounded-md text-white font-bold duration-300"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;