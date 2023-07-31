import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import {
  clearDispatch,
  fetchByIdChapters,
} from "../feature/slices/fetchChapterByIdSlice";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "../components/Shimmer";
import {
  clearDispatchTranslationById,
  fetchChaptersTranslationById,
} from "../feature/slices/fetchChapterTranslation";
import { setReciterId } from "../feature/slices/manageReciterId";

const Chapter = () => {
  const [showTranslation, setShowTranslation] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const chapterById = useSelector((store) => store.chaptersById.chaptersById);
  const navigate = useNavigate();
  const chapterByIdTranlation = useSelector(
    (store) => store.chaptersByIdTranslation.chapterTranslation
  );
  useEffect(() => {
    dispatch(fetchByIdChapters(id));

    return () => dispatch(clearDispatch());
  }, []);

  useEffect(() => {
    dispatch(fetchChaptersTranslationById(parseInt(id)));

    return () => dispatch(clearDispatchTranslationById());
  }, []);

  function cleanHTMLTags(input) {
    const doc = new DOMParser().parseFromString(input, "text/html");
    return doc.body.textContent || "";
  }

  const handlePlayAudio = () => {
    dispatch(setReciterId(id));
    navigate(`/player/${id}`);
  };

  return (
    <div className="relative">
      <div className="absolute justify-center -top-16 left-0 right-0 xl:top-0 xl:right-2 flex xl:justify-end items-center gap-3">
        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="px-3 text-white text-[17px] border rounded-full hover:text-[#0C134F] hover:border-[#0C134F] hover:bg-white py-2 bg-[#0C134F]"
        >
          {showTranslation ? "Hide Translation" : "Show Translation"}
        </button>
        <FaPlay
          className="text-[#0C134F] text-3xl hover:text-black cursor-pointer"
          onClick={handlePlayAudio}
        />
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
            {chapterById[0]?.verses?.map((verse, index) => {
              const translation = chapterByIdTranlation[0]?.translations[index];
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

                  {showTranslation && (
                    <div className="mt-7">
                      <div
                        className="text-[#0C134F] text-2xl text-center"
                        dir="rtl"
                      >
                        {cleanHTMLTags(translation?.text)}
                      </div>
                    </div>
                  )}
                  <span className="p-2 m-2 text-green-500 italic">
                    {" " + verse.verse_key}
                  </span>
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
