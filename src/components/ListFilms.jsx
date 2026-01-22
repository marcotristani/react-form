import { use } from "react";
import filmsCheccoZalone from "../assets/data/FilmsCheccoZalone";

import { useState } from "react";

const ListFilms = () => {
  //Variabili stringa film e variabile dove salvare nuovo valore del film
  const [titleFilms, setTitleFilms] = useState(filmsCheccoZalone);
  const [newTitleFilm, setNewTitleFilm] = useState("");

  //Funzione di azione al submit per aggiungere nuovo film alla lista
  function addFilm(event) {
    event.preventDefault(); //blocco evento naturale pagina ossia il ricaricamento
    if (newTitleFilm !== "") {
      setTitleFilms([...titleFilms, newTitleFilm]); //vado ad aggiungere un nuovo film alla variabile di stato title film
      setNewTitleFilm(""); //pulisco il testo di input
    } else {
      alert("Inserisci un titolo");
    }
  }
  return (
    <>
      <h2>Film</h2>
      <ul>
        {titleFilms.map((film) => (
          <li>{film}</li>
        ))}
      </ul>
      <form onSubmit={addFilm}>
        <input
          type="text"
          placeholder="Inserisci un nuovo titolo"
          value={newTitleFilm}
          onChange={(e) => setNewTitleFilm(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
      {/* prova */}
      <p>{titleFilms}</p>
      <p>{newTitleFilm}</p>
    </>
  );
};
export default ListFilms;
