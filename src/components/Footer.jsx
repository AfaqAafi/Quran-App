import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-ful bg-[#0C134F]">
      <div className="px-24 flex flex-col gap-14 sm:gap-0 sm:flex-row justify-around items-start py-8">
        <div>
          <h2 className="text-white pb-6 font-medium text-xl sm:text-2xl  transition-all duration-300 hover:text-gray-400">
            Quran wih ❤️ By M.Afaq
          </h2>
          <p className="text-white transition-all duration-300 hover:text-gray-400 uppercase text-[19px] leading-7">
            Read your favourite translations and <br /> listen to your favourite
            reciters 🌐
          </p>
        </div>
        <div>
          <h2 className="text-white pb-6 font-medium text-xl sm:text-2xl  transition-all duration-300 hover:text-gray-400">
            Beautiful Voices
          </h2>
          <p className="text-white transition-all duration-300 hover:text-gray-400 text-[19px] uppercase leading-7">
            You can listen any voice all across the world, <br /> which most
            inspired you!
          </p>
        </div>
        <div>
          <h2 className="text-white pb-6 font-medium text-xl sm:text-2xl  transition-all duration-300 hover:text-gray-400">
            Links
          </h2>
          <ul>
            <li className="mb-2">
              <Link
                to="/"
                className="text-white text-[21px] transition-all duration-300 hover:text-gray-400"
                href=""
              >
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/about"
                href=""
                className="text-white text-[21px] transition-all duration-300 hover:text-gray-400"
              >
                About
              </Link>
            </li>

            <li className="mb-2">
              <Link
                to="/change_reciter"
                className="text-white text-[21px] transition-all duration-300 hover:text-gray-400"
                href=""
              >
                Read Quran
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to={`/player/${1}`}
                className="text-white text-[21px] transition-all duration-300 hover:text-gray-400"
                href=""
              >
                Play Audio
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/language"
                className="text-white text-[21px] transition-all duration-300 hover:text-gray-400"
                href=""
              >
                Translation Menus
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <span className="block text-center text-gray-300">
        © 2023 Quran World. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
