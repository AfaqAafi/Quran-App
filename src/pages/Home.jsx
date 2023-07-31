import { AnimatePresence, motion } from "framer-motion";
import { AiFillPlayCircle } from "react-icons/ai";
import Search from "../components/Search";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChapters } from "../feature/slices/fetchChapterSlice";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const chapters = useSelector((store) => store.chapters.chapters);

  useEffect(() => {
    dispatch(fetchChapters());
  }, []);

  return (
    <div>
      <div className="pb-10 relative">
        <img
          src="./images/bg.png"
          className="bg-center w-full h-[600px]"
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
      <div className="flex flex-col  justify-center ">
        <hr />
        {chapters[0]?.chapters?.length === 0 ? (
          <Shimmer />
        ) : (
          chapters[0]?.chapters?.map((chapter) => {
            return (
              <Link
                to={`/chapter/${chapter.id}`}
                className=" w-full  
                 py-5 px-5 text-white bg-[#0C134F] hover:cursor-pointer "
                key={chapter.id}
              >
                <div className="m-3">
                  <div className="flex flex-row  justify-between text-xl sm:text-2xl">
                    <p className="hover:underline">
                      {chapter.id + ". "}
                      {chapter.name_simple}
                    </p>
                    <p className="font-amiri-quran text-2xl md:text-5xl">
                      {chapter.name_arabic}
                    </p>
                  </div>
                  <h1 className="text-green-bg sm:text-xl text-lgs">
                    Chapter Info:
                  </h1>
                  <p>{"translated name: " + chapter.translated_name.name}</p>
                  <p>{"verses: " + chapter.verses_count}</p>
                  <p>{"Revelead in: " + chapter.revelation_place}</p>
                </div>

                <hr className="mt-5 border-grey-l" />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
