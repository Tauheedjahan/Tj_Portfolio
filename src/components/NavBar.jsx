import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrollTarget, setScrollTarget] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "services" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  // Handle Home / Services clicks
  const handleNavClick = (section) => {
    setScrollTarget(section);
    if (location.pathname !== "/") {
      navigate("/", { replace: false }); // Go to home if not already
    } else {
      // Already on home → scroll immediately
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setNav(false); // Close mobile menu
  };

  // Scroll after route change if needed
  useEffect(() => {
    if (scrollTarget && location.pathname === "/") {
      const el = document.getElementById(scrollTarget);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setScrollTarget(null); // reset
      }
    }
  }, [scrollTarget, location.pathname]);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href="https://dribbble.com/Tjahan"
            target="_blank"
            rel="noreferrer"
          >
            Tauheed
          </a>
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          if (link === "home" || link === "services") {
            return (
              <li
                key={id}
                className="nav-links px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 hover:text-medium-aquamarine duration-200 link-underline"
                onClick={() => handleNavClick(link)}
              >
                {link}
              </li>
            );
          } else {
            return (
              <li
                key={id}
                className="nav-links px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 hover:text-medium-aquamarine duration-200 link-underline"
              >
                <ScrollLink to={link} smooth duration={500}>
                  {link}
                </ScrollLink>
              </li>
            );
          }
        })}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-Medium Aquamarine-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white-500">
          {links.map(({ id, link }) => {
            if (link === "home" || link === "services") {
              return (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                  onClick={() => handleNavClick(link)}
                >
                  {link}
                </li>
              );
            } else {
              return (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <ScrollLink
                    onClick={() => setNav(false)}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {link}
                  </ScrollLink>
                </li>
              );
            }
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
