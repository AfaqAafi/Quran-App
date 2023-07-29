import { useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {
  clearDispatch,
  fetchByIdChapters,
} from "../feature/slices/fetchChapterByIdSlice";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "../components/Shimmer";

const Chapter = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const chapterById = useSelector((store) => store.chaptersById.chaptersById);
  // console.log(chapterById[0].verses);
  useEffect(() => {
    dispatch(fetchByIdChapters(id));

    return () => dispatch(clearDispatch());
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-0 right-10 flex items-center gap-3">
        <button className="px-12 text-white text-[21px] rounded-full border-2 hover:text-[#0C134F] hover:border-[#0C134F] hover:bg-white py-4 bg-[#0C134F]">
          Translation
        </button>
        <FaPlay className="text-[#0C134F] text-5xl hover:text-black cursor-pointer" />
      </div>
      <div className="max-w-[1800px]  px-8 mx-auto mt-10 pb-10">
        <img
          src="/images/verse.png"
          className="object-contain mb-8 bg-gray-300 rounded px-8 py-4"
          alt="image"
        />
        {chapterById.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="w-full shadow-lg flex flex-col gap-1 bg-gray-300 rounded">
            {chapterById[0]?.verses?.map((verse) => {
              // const translation = Translation[index];
              return (
                <div
                  key={verse.id}
                  className="cursor-pointer border-b-2 border-green-500 py-8"
                >
                  <p
                    className="text-5xl leading-relaxed tracking-widest text-center text-green-600 font-amiri-quran"
                    dir="rtl"
                  >
                    {verse.text_indopak}{" "}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chapter;
