import React, { useState } from "react";
import AIJobImg from "../assets/aijob.png";
import SKTImg from "../assets/skt.png";
import RFMImg from "../assets/rfm.png";
import ScrapImg from "../assets/scrap.png";
import Glitch from "../assets/glitch.png";
import Nexi from "../assets/nexi.png";
import Webproto from "../assets/Webproto.png";
import Game from "../assets/game.png";
import Cara from "../assets/cara.png";
import Financecom from "../assets/financecom.png";
import Hotel from "../assets/hotel.png";
import Finance from "../assets/finance.png";

const MoreServices = () => {
  // Row-wise buttons
  const row1 = ["Show All", "Web Development", "UI/UX Design", "E-commerce Solutions"];
  const row2 = ["Data Visualization", "SEO Optimization", "Data Analytics"];
  const row3 = ["Maintenance & Support", "Consulting"];

  // Button style
  const buttonClass =
    "px-10 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full duration-300";

  // Cards Data
  const cards = [
    { id: 1, title: "Data Analytics - Ai Job Maarket Analysis", category: "Data Analytics", image: AIJobImg, website: "https://github.com/Tauheedjahan/ai-job-market-analysis" },
    { id: 2, title: "E-commerce Solutions - Ecommerce Website", category: "E-commerce Solutions", image: SKTImg, website: "https://e-commerce-web-ebon.vercel.app/" },
    { id: 3, title: "Data Visualization - RFM KMeans Customer Segmentation", category: "Data Visualization", image: RFMImg, website: "https://github.com/Tauheedjahan/rfm-kmeans-customer-segmentation" },
    { id: 4, title: "Data Analytics - Book Scraping", category: "Data Analytics", image: ScrapImg, website: "https://github.com/Tauheedjahan/scrap_web" },

    { id: 5, title: "Web Development - Glitch Blog Website", category: "Web Development", image: Glitch, website: "https://blog.glitch.com/industry-news" },
    { id: 6, title: "Web Development - Semiconductor Technology", category: "Web Development", image: Nexi, website: "https://www.nexxicon.com/" },
    { id: 7, title: "UI/UX Design - Website Prototype", category: "UI/UX Design", image: Webproto, website: "https://www.figma.com/proto/Wi8xwG4rH7FNZ788NustX6/Website-Prototype" },
    { id: 8, title: "Web Development - Fully responsive gaming website", category: "Web Development", image: Game, website: "https://codewithsadee.github.io/gamics/" },

    { id: 9, title: "E-commerce Solutions - Modern React Storefront", category: "E-commerce Solutions", image: Cara, website: "https://govind-ecommerce.netlify.app/" },
    { id: 10, title: "Web Development - Static Finance Company website", category: "Web Development", image: Financecom, website: "https://financeproject-static.netlify.app/" },
    { id: 11, title: "Web Development - Responsive Hotel Booking Website", category: "Web Development", image: Hotel, website: "https://staybooker.netlify.app/" },
    { id: 12, title: "UI/UX Design - Mobile App Prototype", category: "UI/UX Design", image: Finance, website: "https://www.figma.com/proto/VCE6FA..." },
  ];

  // State for active filter
  const [activeCategory, setActiveCategory] = useState("Show All");

  // Filtered cards logic
  const filteredCards =
    activeCategory === "Show All"
      ? cards
      : cards.filter((card) => card.category === activeCategory);

  return (
    <div className="bg-[#0B0B0B] w-full text-white min-h-screen flex flex-col items-center px-6 pt-32 pb-12">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        More Ways I Can Help
      </h1>

      {/* Paragraph */}
      <p className="text-gray-300 text-center max-w-6xl leading-relaxed text-lg mt-4">
        Delivering complete digital solutions that blend design, development, and data. 
      </p>

      {/* Buttons */}
      {[row1, row2, row3].map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-6 flex-wrap mb-6 pt-6">
          {row.map((btn, index) => (
            <button
              key={index}
              className={`${buttonClass} ${activeCategory === btn ? "bg-red-800" : ""}`}
              onClick={() => setActiveCategory(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      ))}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full max-w-7xl">
        {filteredCards.map((card) => (
          <div key={card.id} className="relative h-80 border-2 rounded-xl overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-8">
              <h2 className="text-xl font-bold px-8 mt-8">{card.title}</h2>
              <div className="flex flex-col items-center">
                <button
                  className="px-12 py-2 bg-red-600 hover:bg-red-700 rounded-full font-bold mb-2"
                  onClick={() => window.open(card.website, "_blank")}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreServices;
