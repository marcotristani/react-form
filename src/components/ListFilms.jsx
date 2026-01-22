//Importo font Awesom e chiamo libreria per poter utilizzare icone
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

//importo array con lista film da documento esterno
import filmsCheccoZalone from "../assets/data/FilmsCheccoZalone";

//importo usestate per poter utilizzare e modificare variabili di stato
import { useState } from "react";

const ListFilms = () => {
  //Variabili stringa film e variabile dove salvare nuovo valore del film
  const [titleFilms, setTitleFilms] = useState(filmsCheccoZalone);
  const [newTitleFilm, setNewTitleFilm] = useState("");
  // variabile che mi identifica numero id da assegnare ai nuovi elementi(parto dalla lunghezza dell'array ricevuto e incremento di uno così da avere id diverso già al primo submit)
  const [numId, setNumId] = useState(titleFilms.length + 1);

  //Funzione di azione al submit per aggiungere nuovo film alla lista
  function addFilm(event) {
    event.preventDefault(); //blocco evento naturale pagina ossia il ricaricamento
    if (newTitleFilm !== "") {
      setNumId(numId + 1); // vado a incrementare variabile numId
      setTitleFilms([...titleFilms, { id: numId, title: newTitleFilm }]); //vado ad aggiungere un nuovo film alla variabile di stato title film
      setNewTitleFilm(""); //pulisco il testo di input
    } else {
      alert("Inserisci un titolo"); //se non viene inserito nessun testo mando alert
    }
  }

  //Funzione per poter rimuovere l'elemento selezionato
  function removeFilm(currentId) {
    const filmRimanenti = titleFilms.filter((film) => film.id !== currentId); //con filter vado a creare array con tutti gli elementi che hanno id diverso dall'elemento riferito all'elemento cliccato
    setTitleFilms(filmRimanenti);
  }
  return (
    <>
      <h2>Film</h2>
      <ul>
        {/* vado a generare la lista con map */}
        {titleFilms.map((film) => (
          <li key={film.id}>
            {film.title}
            {/* bottone con icona di fontawesome che mi va a cancellare l'elemento dall'array */}
            <button className="delete-btn" onClick={() => removeFilm(film.id)}>
              <FontAwesomeIcon icon="fa-solid fa-trash" fade />
            </button>
          </li>
        ))}
      </ul>
      {/* creo form con submito che mi va ad aggiungere elemnto alla lista */}
      <form onSubmit={addFilm}>
        <input
          type="text"
          placeholder="Inserisci un nuovo titolo"
          value={newTitleFilm}
          // imposto onChange per poter prendere in input valore inserito dall'utente
          onChange={(e) => setNewTitleFilm(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
    </>
  );
};
export default ListFilms;
