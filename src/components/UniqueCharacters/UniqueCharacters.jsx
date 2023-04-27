import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { uniqueCharacters } from "../../services/service";

const UniqueCharacters = () => {
  const [unique, setUnique] = useState(null);
  useEffect(() => {
    uniqueCharacters(params.id, setUnique);
  }, []);
  const params = useParams();
  return (
    <>
      <div className="flex justify-center items-center font-sans w-full h-screen bg-stone-900">
        {unique != null ? (
          <div className="rounded-xl w-1/3 bg-stone-700 max-w-3xl  ">
            <div className="flex items-center justify-center font-mono text-2xl rounded-t-2xl text-white	bg-orange-500 h-16 font-bold">
              <h2>Personaje con el ID : {params.id}</h2>
            </div>
            <div className="flex justify-between">
              <div className="w-full p-4 flex flex-col justify-around ">
                <p className="text-xl font-medium ">
                  Nombre:{" "}
                  <span className="text-white font-bold hover:text-orange-500 text-2xl cursor-pointer ">
                    {unique.name}{" "}
                  </span>
                </p>

                <p className="text-xl font-medium  ">
                  Especie:{" "}
                  <span className="text-white hover:text-orange-500 text-lg cursor-pointer ">
                    {unique.species}{" "}
                  </span>
                </p>
                <p className="text-xl font-medium ">
                  Fecha:{" "}
                  <span className="text-white hover:text-orange-500 text-lg cursor-pointer">
                    {unique.created}{" "}
                  </span>
                </p>
                <p className="text-xl font-medium ">
                  Genero:{" "}
                  <span className="text-white hover:text-orange-500 text-lg cursor-pointer">
                    {unique.gender}{" "}
                  </span>
                </p>
              </div>
              <img src={unique.image} alt="#" className="rounded-b-2xl" />
            </div>
          </div>
        ) : (
          "No hay personaje"
        )}
      </div>
    </>
  );
};

export default UniqueCharacters;
