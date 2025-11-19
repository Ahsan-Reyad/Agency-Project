import React from "react";
import assets from "../assets/assets";

function Footer({ theme }) {
  return (
    <footer className="mt-20 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 sm:px-12 lg:px-24 xl:px-40 py-14">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        {/* Brand Info */}
        <div className="flex-1">
          <img src={theme === "dark" ? assets.logo : assets.logo_dark} alt="" />
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Crafting modern websites & digital experiences with passion,
            precision & creativity.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <a href="#" className="hover:scale-110 transition">
              <img src={assets.facebook_icon} className="w-7" alt="Facebook" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <img src={assets.linkedin_icon} className="w-7" alt="LinkedIn" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <img src={assets.twitter_icon} className="w-7" alt="Twitter" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold dark:text-white">Quick Links</h3>
          <ul className="mt-3 flex flex-col gap-2">
            <li>
              <a href="#home" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-primary">
                Team
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold dark:text-white">Subscribe</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Get updates, tips & news directly in your inbox.
          </p>

          <div className="mt-4 flex items-center bg-white dark:bg-gray-800 rounded-full overflow-hidden border border-gray-300 dark:border-gray-700">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-transparent outline-none text-gray-700 dark:text-gray-300"
            />
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 pt-6 border-t border-gray-300 dark:border-gray-700 text-center">
        <p className="text-sm dark:text-gray-400">
          © {new Date().getFullYear()} Ahsan Web Studio — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
