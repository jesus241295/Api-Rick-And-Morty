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
      {unique != null ? (
        <div>
          <h2>Personaje con el id {params.id}</h2>
          <p>Con el nombre de {unique.name} </p>
          <img src={unique.image} alt="#" />
        </div>
      ) : (
        "No hay personaje"
      )}
    </>
  );
};

export default UniqueCharacters;
