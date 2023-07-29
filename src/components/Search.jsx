import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChapters } from "../feature/slice/fetchChapterSlice";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const chapters = useSelector((store) => store.chapters.chapters);
  const [onBlurState, setOnBlurState] = useState(true);

  useEffect(() => {
    dispatch(fetchChapters());
  }, []);

  useEffect(() => {
    let idTimout = setTimeout(() => {
      let filteredSearch = chapters[0]?.chapters?.filter((chapter) =>
        chapter.name_simple.toLowerCase().includes(searchText.toLowerCase())
      );
      setData(filteredSearch);
    }, 300);

    return () => clearTimeout(idTimout);
  }, [searchText]);
  return (
    <div className="relative">
      <input
        className="mb-3 mt-3 sm:mt-8 rounded-full px-4 py-3 sm:px-8 text-xs w-[280px] sm:py-6 sm:text-xl sm:w-[600px] focus:outline-none"
        type="text"
        placeholder="What do you want to read?"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        onBlur={() => setOnBlurState(false)}
        onFocus={() => setOnBlurState(true)}
      />
      {searchText.length > 1 && onBlurState && (
        <div className="absolute w-full bg-slate-700 px-6 py-4 flex flex-col gap-1">
          {data?.map((x) => (
            <div
              key={x.id}
              className="flex p-1 justify-between cursor-pointer rounded duration-300 bg-slate-900 hover:bg-[#0C134F]"
            >
              <h4 className="pl-3 text-2xl text-white font-semibold">
                {x.name_simple}
              </h4>
              <h4 className="pr-3 text-2xl text-white font-semibold">
                {x.name_complex}
              </h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
