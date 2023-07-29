import { useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {
  clearDispatch,
  fetchByIdChapters,
} from "../feature/slices/fetchChapterByIdSlice";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "../components/Shimmer";
import { fetchChaptersTranslationById } from "../feature/slices/fetchChapterTranslation";

const Chapter = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const chapterById = useSelector((store) => store.chaptersById.chaptersById);
  const chapterByIdTranlation = useSelector(
    (store) => store.chaptersByIdTranslation.chapterTranslation
  );

  useEffect(() => {
    dispatch(fetchByIdChapters(id));

    return () => dispatch(clearDispatch());
  }, []);

  // useEffect(() => {
  //   dispatch(fetchChaptersTranslationById(id));
  // }, []);

  // console.log(chapterByIdTranlation);

  return (
    <div className="relative">
      <div className="absolute justify-center -top-16 left-0 right-0 xl:top-0 xl:right-2 flex xl:justify-end items-center gap-3">
        <button className="px-3 text-white text-[17px] rounded-full border-2 hover:text-[#0C134F] hover:border-[#0C134F] hover:bg-white py-2 bg-[#0C134F]">
          Translation
        </button>
        <FaPlay className="text-[#0C134F] text-3xl hover:text-black cursor-pointer" />
      </div>
      <div className="max-w-[900px]  px-8 mx-auto mt-[80px] xl:mt-10 pb-10">
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
                    className="text-5xl leading-relaxed tracking-widest text-center text-[#0C134F] font-amiri-quran"
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
