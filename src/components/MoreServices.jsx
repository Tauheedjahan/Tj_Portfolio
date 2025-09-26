import React from "react";

const MoreServices = () => {
  // Row-wise buttons
  const row1 = ["Show All", "Web Development", "UI/UX Design", "SEO Optimization"];
  const row2 = ["SEO Optimization", "E-commerce Solutions", "Data Analytics"];
  const row3 = ["Maintenance & Support", "Consulting"];

  // Button style
  const buttonClass =
    "px-10 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full duration-300";

  return (
    <div className="bg-[#0B0B0B] w-full text-white min-h-screen flex flex-col items-center px-6 pt-32 pb-12">
      {/* Heading just below Navbar */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        More Ways I Can Help
      </h1>

      {/* Short Paragraph with margin */}
      <p className="text-gray-300 text-center max-w-6xl leading-relaxed text-lg mt-4">
        Delivering complete digital solutions that blend design, development, and data. 
        From building fast and responsive websites to crafting user-friendly interfaces 
        and turning complex data into clear, actionable insights — every service is 
        designed to help businesses grow. With expertise in Full Stack Development, 
        UI/UX Design, and Data Analytics, the focus is on creating modern, scalable, 
        and impactful solutions that combine creativity with technology.
      </p>
      
      {/* Zigzag Buttons in 2 rows */}
      {/* Row 1 */}
      <div className="flex justify-center gap-6 flex-wrap mb-6 pt-20">
        {row1.map((btn, index) => (
          <button key={index} className={buttonClass}>
            {btn}
          </button>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex justify-center gap-6 flex-wrap mb-6">
        {row2.map((btn, index) => (
          <button key={index} className={buttonClass}>
            {btn}
          </button>
        ))}
      </div>

      {/* Row 3 */}
      <div className="flex justify-center gap-6 flex-wrap mb-6">
        {row3.map((btn, index) => (
          <button key={index} className={buttonClass}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoreServices;