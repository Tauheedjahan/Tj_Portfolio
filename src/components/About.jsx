import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-5">
          Hi, I’m <strong>Tauheed Jahan (TJ)</strong> — a Freelance <strong>Web Designer & Data Analyst</strong> passionate about helping businesses grow through creative design and data-driven strategies.
        </p>

        <br />

        <p className="text-xl">
          Over the past few years, I’ve collaborated with startups, entrepreneurs, and small to mid-sized businesses to deliver <strong>modern, responsive websites</strong> and <strong>actionable data insights</strong>. My work focuses on creating web experiences that are fast, user-friendly, and conversion-focused.
        </p>

        <br />

        <p className="text-xl">
          💻 <strong>Web Design & Development:</strong> WordPress, React, HTML, CSS, Next.js, Tailwind CSS — building SEO-friendly, responsive, and visually appealing websites tailored to business goals.
        </p>

        <br />

        <p className="text-xl">
          📊 <strong>Data Analytics:</strong> Python, Excel, Google Sheets — cleaning data, creating visual dashboards, and generating actionable insights to help businesses make smarter decisions.
        </p>

        <br />

        <p className="text-xl">
          I combine creative design with practical analytics to help brands move forward with confidence. Let’s connect and create digital solutions that deliver real results.
        </p>
      </div>
    </div>
  );
};

export default About;
