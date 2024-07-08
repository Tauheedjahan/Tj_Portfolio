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
          I am a passionate Frontend Developer and Designer, dedicated to crafting visually stunning and user-friendly web experiences. With a keen eye for design and a strong foundation in coding, I bring ideas to life through creative and functional web solutions.
        </p>

        <br />

        <p className="text-xl">
          I specialize in developing responsive, accessible, and engaging websites that deliver exceptional user experiences. My skill set includes HTML, CSS, JavaScript, React, and various design tools that help me create seamless and aesthetically pleasing interfaces.
        </p>

        <br />

        <p className="text-xl">
          I believe in the power of minimalistic designs and thoughtful branding to create a strong online presence. Whether you need a new website, a redesign, or custom graphics, I am here to turn your vision into reality.
        </p>

        <br />

        <p className="text-xl">
          Let's work together to elevate your project and achieve your goals. Connect with me to discuss how we can create a unique and impactful digital experience for your audience.
        </p>
      </div>
    </div>
  );
};

export default About;
