import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

import filmsCheccoZalone from "../assets/data/FilmsCheccoZalone";

import { useState } from "react";

const ListFilms = () => {
  //Variabili stringa film e variabile dove salvare nuovo valore del film
  const [titleFilms, setTitleFilms] = useState(filmsCheccoZalone);
  const [newTitleFilm, setNewTitleFilm] = useState("");
  const [numId, setNumId] = useState(titleFilms.length + 1);

  //Funzione di azione al submit per aggiungere nuovo film alla lista
  function addFilm(event) {
    event.preventDefault(); //blocco evento naturale pagina ossia il ricaricamento
    if (newTitleFilm !== "") {
      setNumId(numId + 1);
      setTitleFilms([...titleFilms, { id: numId, title: newTitleFilm }]); //vado ad aggiungere un nuovo film alla variabile di stato title film
      setNewTitleFilm(""); //pulisco il testo di input
    } else {
      alert("Inserisci un titolo");
    }
  }

  function removeFilm(index) {
    const filmRimanenti = titleFilms.filter((film, i) => i !== index);
    setTitleFilms(filmRimanenti);
  }
  return (
    <>
      <h2>Film</h2>
      <ul>
        {titleFilms.map((film) => (
          <li key={film.id}>
            {film.title}
            <button className="delete-btn" onClick={() => removeFilm(film.id)}>
              <FontAwesomeIcon icon="fa-solid fa-trash" fade />
            </button>
          </li>
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
    </>
  );
};
export default ListFilms;
