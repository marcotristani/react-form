import { use } from "react";
import filmsCheccoZalone from "../assets/data/FilmsCheccoZalone";

import { useState } from "react";

const ListFilms = () => {
  //Variabili stringa film e variabile dove salvare nuovo valore del film
  const [titleFilms, setTitleFilms] = useState(filmsCheccoZalone);
  const [newTitleFilm, setNewTitleFilm] = useState("");
  return (
    <>
      <h2>Film</h2>
      <ul>
        {filmsCheccoZalone.map((film) => (
          <li>{film}</li>
        ))}
      </ul>
      <form>
        <input
          type="text"
          placeholder="Inserisci un nuovo titolo"
          value={newTitleFilm}
          onChange={(e) => setNewTitleFilm(e.target.value)}
        ></input>
      </form>
      {/* prova */}
      <p>{titleFilms}</p>
      <p>{newTitleFilm}</p>
    </>
  );
};
export default ListFilms;
