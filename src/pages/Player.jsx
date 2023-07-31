import {
  TbPlayerSkipBackFilled,
  TbPlayerSkipForwardFilled,
} from "react-icons/tb";
import { FaPause } from "react-icons/fa";
import { BsPlayFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import {
  clearDispatchAudio,
  fetchAudio,
} from "../feature/slices/fetchAudioSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchChapters } from "../feature/slices/fetchChapterSlice";

const Player = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [myId, setMyId] = useState(parseInt(id));
  const audioState = useSelector((store) => store.audio.audioArr);
  const reciterId = useSelector((store) => store.reciterId.reciterId);
  const [isPlaying, setPlaying] = useState(false);
  const chapters = useSelector((state) => state.chapters.chapters);
  const audioRef = useRef();

  useEffect(() => {
    dispatch(fetchAudio(myId, reciterId));

    return () => dispatch(clearDispatchAudio());
  }, [dispatch, myId, reciterId]);

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  const handleForward = () => {
    if (myId < 114) {
      setMyId(myId + 1);
      setPlaying(false);
    }
  };
  const handleBackward = () => {
    if (myId > 1) {
      setMyId(myId - 1);
      setPlaying(false);
    }
  };

  useEffect(() => {
    dispatch(fetchChapters());
  }, []);

  const chapterInfo = chapters[0]?.chapters[myId - 1];

  let chapterNameSimple, chapterNameArabic;
  if (chapterInfo) {
    chapterNameSimple = chapterInfo.name_simple;
    chapterNameArabic = chapterInfo.name_arabic;
  }

  const togglePlayPause = () => {
    setPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col px-4 justify-center items-center h-screen bg-gradient-to-b from-cyan-700 to-slate-950 text-white">
      <div className=" bg-black w-[280px] sm:w-[309px] md:w-[500px] lg:w-[700px] pb-5 bg-opacity-50 rounded shadow">
        <audio
          ref={audioRef}
          src={audioState[0]?.audio_file?.audio_url}
          preload="metadata"
        >
          Your browser does not support the audio element.
        </audio>
        <div className="mt-6 flex flex-col justify-center p-5 items-center">
          <div className="rounded-[50%] border-2 shadow-lg h-40 w-40 overflow-hidden sm:h-64 sm:w-64">
            <img
              className="object-cover bg-center w-full h-full"
              src="https://images.pexels.com/photos/2233399/pexels-photo-2233399.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <h1 className="text-base text-white sm:text-2xl pt-3">
            {chapterNameSimple}
          </h1>
          <h1 className="text-base text-white sm:text-2xl py-2">
            {chapterNameArabic}
          </h1>
        </div>

        <div className="flex justify-around pt-5 items-center w-full">
          <TbPlayerSkipBackFilled onClick={handleBackward} />
          <div onClick={togglePlayPause}>
            {isPlaying ? <FaPause /> : <BsPlayFill />}
          </div>
          <TbPlayerSkipForwardFilled onClick={handleForward} />
        </div>
      </div>
    </div>
  );
};

export default Player;
