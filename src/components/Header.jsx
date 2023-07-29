import { TfiWorld } from "react-icons/tfi";
import { AiFillHome } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleSidebarAction } from "../feature/slices/ToggleSidebarSlice";

const Header = () => {
    const dispatch = useDispatch();


    const togglerSidebar = () => {
        dispatch(toggleSidebarAction());
    }


  return (
    <div className="w-full bg-[#0C134F] h-[70px]">
      <div className="flex leading-[70px] justify-between px-2 sm:px-8 mx-auto items-center">
        <div className="flex items-center gap-3">
          <GiHamburgerMenu
            onClick={togglerSidebar}
            className="text-white cursor-pointer text-3xl transition-all duration-300 hover:text-gray-400"
          />
          <h2 className="hidden sm:flex text-white cursor-pointer font-medium text-[22px] transition-all duration-300 hover:text-gray-400">
            Quran wih ❤️ By M.Afaq
          </h2>
          <h2 className="sm:hidden flex text-white cursor-pointer font-medium text-[22px] transition-all duration-300 hover:text-gray-400">
            Quran
          </h2>
        </div>
        <div className="flex items-center gap-3 sm:gap-8">
          <TfiWorld className="w-5 h-6 text-white cursor-pointer transition-all duration-300 hover:text-gray-400" />
          <AiFillHome className="w-6 h-6  text-white cursor-pointer transition-all duration-300 hover:text-gray-400" />
          <FaPlay className="w-4 h-6  text-white cursor-pointer transition-all duration-300 hover:text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Header;
