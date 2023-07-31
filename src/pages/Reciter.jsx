import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearReciter,
  fetchReciter,
} from "../feature/slices/fetchReciterSlice";
import { Link } from "react-router-dom";
import { setReciterId } from "../feature/slices/manageReciterId";

const Reciter = () => {
  const reciterList = useSelector((store) => store.reciter.reciterData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReciter());

    return () => dispatch(clearReciter());
  }, []);

  return (
    <div>
      <div className=" flex flex-col mb-4 p-2 justify-center">
        <h1 className="mb-2 text-xl sm:text-3xl py-5">Choose Reciter:</h1>
        {reciterList[0]?.reciters?.length === 0 ? (
          <h1 className="text-3xl text-center w-full h-screen">
            Please wait Loading fetching....
          </h1>
        ) : (
          <div className="flex flex-col">
            {reciterList[0]?.reciters?.map((reciter) => {
              console.log(reciter.id, "reciters");
              return (
                <Link
                  to={`/player/1`}
                  key={reciter.id}
                  onClick={() => dispatch(setReciterId(reciter.id))}
                >
                  <p className="text-[#0C134F] border-2 border-[#0C134F] text-xl hover:text-white cursor-pointer hover:underline p-2 hover:bg-[#0C134F] sm:text-2xl">
                    {" "}
                    {reciter.name}
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

export default Reciter;
