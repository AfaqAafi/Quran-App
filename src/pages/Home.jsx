import { AnimatePresence, motion } from "framer-motion";
import { AiFillPlayCircle } from "react-icons/ai";
import Search from "../components/Search";
const Home = () => {
  return (
    <div>
      <div className="pb-10 relative">
        <img
          src="./images/bg.png"
          className="bg-center w-full h-[500px]"
          alt="myImage"
        />
        <div className="flex px-3 flex-col gap-4 w-full h-full absolute top-0 mt-14 md:mt-0 justify-start md:justify-center items-center">
          <AnimatePresence>
            <div className="flex">
              {"Welcome to Quran Application!".split("").map((char, i) => {
                return (
                  <motion.h1
                    className="text-2xl sm:text-4xl md:text-5xl font-medium text-white"
                    key={i}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {char === " " ? <span>&nbsp;</span> : char}
                    <div className="border-b-8 mt-2 border-gray-50 w-full  "></div>
                  </motion.h1>
                );
              })}
            </div>
          </AnimatePresence>
          <p className="text-white text-center sm:text-left font-semibold text-xl sm:text-2xl bg-gray-800 p-1 rounded px-2">
            Click below to play melodious recitations 📖
          </p>
          <AiFillPlayCircle className="text-white text-5xl cursor-pointer" />
          {/* Search component 🚀  */}
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
