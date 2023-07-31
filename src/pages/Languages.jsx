import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLanguage } from "../feature/slices/fetchLanguageSlice";
import { Link } from "react-router-dom";

const Languages = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.language.language);
  useEffect(() => {
    dispatch(fetchLanguage());
  }, []);

  return (
    <>
      <div className=" flex flex-col mb-4 p-2 justify-center items-center sm:items-start text-[#0C134F]">
        <div className="px-3 sm:px-8 pt-2 pb-10 w-full">
          <h1 className="text-3xl my-4 font-semibold">
            Choose a Language for Translation:
          </h1>
          {language.length === 0 ? (
            <h1 className="text-3xl text-center w-full h-screen">
              Please wait Loading fetching...
            </h1>
          ) : (
            <div className="flex flex-col">
              {language[0]?.languages?.map((language) => {
                return (
                  <Link
                    to={`/translation/${language.name}`}
                    key={language.id}
                    className="duration-300 border-2 hover:bg-[#0C134F] hover:text-white border-gray-400 text-2xl cursor-pointer hover:underline p-1"
                  >
                    {language.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Languages;
