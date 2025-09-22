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

        <p className="text-xl mt-5 text-gray-300">
          I’m <strong>Tauheed Jahan (TJ)</strong> — a <strong>Full Stack Developer & UI/UX Designer</strong> with 4+ years of experience building responsive websites and data-driven applications. My journey started with front-end design, and over time I expanded into full stack development to deliver end-to-end digital solutions.
        </p>

        <br />

        <p className="text-xl text-gray-300">
          <strong>What I Do:</strong><br/>
          Frontend: React, Next.js, Tailwind CSS, JavaScript, HTML, CSS<br/>
          Backend: Node.js, Express.js, REST APIs, MongoDB/MySQL<br/>
          Design: UI/UX with Figma, Adobe Creative Suite, minimalistic branding<br/>
          Other: WordPress, SEO, GitHub, deployment & version control
        </p>

        <br />

        <p className="text-xl text-gray-300">
          <strong>My Approach:</strong><br/>
          I believe in combining clean code with thoughtful design to create products that are fast, scalable, and user-friendly. From custom business websites to full-stack applications, I ensure every project delivers both aesthetic appeal and practical functionality.
        </p>

        <br />

        <p className="text-xl text-gray-300">
          <strong>Vision:</strong><br/>
          To help businesses and individuals transform ideas into impactful digital experiences — whether that’s through a modern website, an interactive dashboard, or a complete full-stack solution.
        </p>
      </div>
    </div>
  );
};

export default About;
