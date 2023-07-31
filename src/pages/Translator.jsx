import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchLanguageRoute } from "../feature/slices/fetchLanguageRouteSlice";
import { setTranslationId } from "../feature/slices/manageTranslationId";

const Translator = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((store) => store.languageRoute.languageRouteState);

  useEffect(() => {
    dispatch(fetchLanguageRoute());
  }, []);

  const filterDataBasedOnLanguageParam = state[0]?.translations?.filter(
    (language) =>
      language.language_name.toLowerCase().trim() === name.toLowerCase().trim()
  );
  return (
    <div>
      <div className=" flex flex-col my-4 p-2 justify-center items-start">
        <h1 className="text-[#0C134F] font-semibold mb-2 text-xl  sm:text-2xl">
          Choose Translation: {name}
        </h1>
        {state.length === 0 ? (
          <h1 className="text-3xl text-center w-full h-screen">
            Please wait Loading fetching.............
          </h1>
        ) : (
          <div className="flex sm:px-6 flex-col items-start">
            {filterDataBasedOnLanguageParam?.map((translation) => {
              return (
                <Link
                  to={`/chapter/1`}
                  key={translation.id}
                  onClick={() => dispatch(setTranslationId(translation.id))}
                >
                  <p className="text-[#0C134F] text-xl duration-150 cursor-pointer hover:text-slate-900 hover:underline p-1 sm:text-2xl">
                    {" "}
                    {translation.name}
                  </p>
                  <p className="text-grey-l italic">
                    {"Author: " + translation.author_name}
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Translator;
