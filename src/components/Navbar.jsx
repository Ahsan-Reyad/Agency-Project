import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";

function Navbar({ theme, setTheme }) {
  const [siderbadOpen, setSiderbarOpen] = useState(false);
  return (
    <div className="sm:py-4 flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 sticky top-0 z-20 backdrop-blur-xl font-medium bg-gray-200 dark:bg-gray-700/70">
      <img
        src={theme === "dark" ? assets.logo : assets.logo_dark}
        alt=""
        className=" sm:w-40 w-32 "
      />
      <div
        className={`text-gray-700 dark:text-white sm:text-sm 
          flex sm:items-center gap-5 transition-all
          max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:h-full max-sm:min-h-screen
          max-sm:bg-primary max-sm:text-white max-sm:flex max-sm:flex-col max-sm:pt-20
          max-sm:w-0 max-sm:overflow-hidden
          ${siderbadOpen ? "max-sm:w-60 max-sm:pl-10" : ""}
        `}
      >
        <img
          src={assets.close_icon}
          alt=""
          className="w-5 absolute right-4 top-4 sm:hidden"
          onClick={() => setSiderbarOpen(false)}
        />

        <a
          onClick={() => setSiderbarOpen(false)}
          href="#"
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          onClick={() => setSiderbarOpen(false)}
          href="#services"
          className="sm:hover:border-b"
        >
          Services
        </a>
        <a
          onClick={() => setSiderbarOpen(false)}
          href="#team"
          className="sm:hover:border-b"
        >
          Team
        </a>
        <a
          onClick={() => setSiderbarOpen(false)}
          href="#about"
          className="sm:hover:border-b"
        >
          About
        </a>

        <a
          onClick={() => setSiderbarOpen(false)}
          href="#testimonials"
          className="sm:hover:border-b"
        >
          Testimonials
        </a>
        <a
          onClick={() => setSiderbarOpen(false)}
          href="#contact-us"
          className="sm:hover:border-b"
        >
          Contact-Us
        </a>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          onClick={() => setSiderbarOpen(true)}
          className="w-8 sm:hidden"
        />
        <a
          href="#contact"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all0"
        >
          Connect <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
