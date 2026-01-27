import React, { useState } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaUser,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home" },
    { id: "about", icon: FaUser, text: "About" },
    { id: "skills", icon: FaCode, text: "Skills" },
    { id: "education", icon: FaGraduationCap, text: "Education" },
    { id: "projects", icon: FaLaptopCode, text: "Projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact" },
  ];

  const handleScroll = (id) => {
    setActiveLink(id);
    setIsMenuOpen(false);

    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="md:fixed md:top-4 md:left-1/2 md:-translate-x-1/2 w-full md:w-auto">
        <div className="p-[2px] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">
          <nav className="bg-gray-900/90 backdrop-blur-md rounded-full px-4 py-2">

            {/* Mobile header */}
            <div className="flex justify-between items-center md:hidden">
              <span className="text-white font-bold">Portfolio</span>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white"
              >
                <FaBars />
              </button>
            </div>

            {/* Menu */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
              <div className="flex flex-col md:flex-row gap-2 md:gap-1 py-4 md:py-0">
                {navLinks.map(({ id, icon: Icon, text }) => (
                  <button
                    key={id}
                    onClick={() => handleScroll(id)}
                    className={`px-4 py-2  text-sm flex items-center gap-2
                      transition-all duration-300
                      ${
                        activeLink === id
                          ? "bg-white/20 text-white"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }
                    `}
                  >
                    <Icon />
                    {text}
                  </button>
                ))}
              </div>
            </div>

          </nav>
        </div>
      </div>

      {/* animation */}
      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s linear infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </header>
  );
}
