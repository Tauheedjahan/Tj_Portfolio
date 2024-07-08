import React from "react";
import uiux from "../assets/uiux.png"; // Import the UI/UX icon
import figma from "../assets/figma.png"; // Import the Figma icon
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import wordpress from "../assets/wordpress.png"; // Import the WordPress icon
import indesign from "../assets/indesign.png"; // Import the Adobe InDesign icon
import illustrator from "../assets/illustrator.png"; // Import the Adobe Illustrator icon
import photoshop from "../assets/photoshop.png"; // Import the Adobe Photoshop icon

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    // Add the Adobe InDesign icon object
    {
      id: 7,
      src: indesign,
      title: "Adobe InDesign",
      style: "shadow-pink-500",
    },
    // Add the Adobe Illustrator icon object
    {
      id: 8,
      src: illustrator,
      title: "Adobe Illustrator",
      style: "shadow-yellow-500",
    },
    // Add the Adobe Photoshop icon object
    {
      id: 9,
      src: photoshop,
      title: "Adobe Photoshop",
      style: "shadow-blue-400",
    },
    // Add the WordPress icon object
    {
      id: 10,
      src: wordpress,
      title: "WordPress",
      style: "shadow-green-500",
    },
    // Add the UI/UX icon object
    {
      id: 11,
      src: uiux,
      title: "UI/UX",
      style: "shadow-purple-600",
    },
    // Add the Figma icon object
    {
      id: 12,
      src: figma,
      title: "Figma",
      style: "shadow-pink-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="py-17">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with and used them in my projects.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
