import React, { useState, useEffect } from "react";
import axios from "axios";

const AxioPoke = () => {
  // STATE
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    console.log("use Effect running");
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=807")

      // TRANSLATED TO JSON
      .then((response) => {
        console.log(response);
        setPokes(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ul>
      <h1>Pokemon!</h1>
      {/* DISPLAY POKEMON */}
      {pokes.map((poke, index) => {
        return (
          <li key={index}>
            <h2>
              {index + 1}: {poke.name}
            </h2>
          </li>
        );
      })}
    </ul>
  );
};
// };

export default AxioPoke;
