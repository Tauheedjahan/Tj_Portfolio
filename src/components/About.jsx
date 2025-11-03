import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-[#0B0B0B] text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-5">
          I’m <strong>Tauheed Jahan (TJ)</strong> — a{" "}
          <strong>Frontend Developer & Data Analyst</strong> passionate about
          designing intuitive web interfaces and transforming data into
          actionable insights. I love creating websites that not only look great
          but also perform efficiently — helping businesses connect better with
          their audience.
        </p>

        <br />

        <p className="text-xl">
          <strong>What I Do:</strong>
          <br />
          🌐 <strong>Frontend Development:</strong> React, Next.js, Tailwind CSS, JavaScript, HTML, CSS  
          🎨 <strong>UI/UX Design:</strong> Figma, Adobe Creative Suite, responsive layouts  
          📊 <strong>Data Analytics:</strong> Excel, Power BI, Python, Google Sheets, Data Visualization  
          ⚙️ <strong>Other Tools:</strong> WordPress, GitHub, SEO, and project deployment
        </p>

        <br />

        <p className="text-xl">
          <strong>My Approach:</strong>
          <br />
          I focus on merging clean design with functional data insights.
          Every project I build is aimed at improving user experience, visual
          appeal, and decision-making through a balance of design and analytics.
        </p>

        <br />

        <p className="text-xl">
          <strong>Vision:</strong>
          <br />
          To empower businesses with creative digital experiences — from sleek
          web designs to intelligent data dashboards that tell meaningful stories
          through numbers.
        </p>
      </div>
    </div>
  );
};

export default About;
