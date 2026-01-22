//importo array con lista film da documento esterno
import filmsCheccoZalone from "../assets/data/FilmsCheccoZalone";

//importo usestate per poter utilizzare e modificare variabili di stato
import { useState } from "react";

//importo componenti da utilizzare
import GeneratorList from "./GeneratorList";
import FormAdd from "./FormAdd";

const MainContainer = () => {
  //-------------------------DICHIARAZIONE VARIABILI DI STATO-----------------------------------------------------------------//
  //Variabili stringa film e variabile dove salvare nuovo valore del film
  const [titleFilms, setTitleFilms] = useState(filmsCheccoZalone);
  const [newTitleFilm, setNewTitleFilm] = useState("");
  // variabile che mi identifica numero id da assegnare ai nuovi elementi(parto dalla lunghezza dell'array ricevuto e incremento di uno così da avere id diverso già al primo submit)
  const [numId, setNumId] = useState(titleFilms.length + 1);

  //-----------------------------COMPOSIZIONE COMPONENTE -------------------------------------------------//
  return (
    <main>
      <h2>Film</h2>
      <GeneratorList titleFilms={titleFilms} removeFilm={removeFilm} />
      <FormAdd
        addFilm={addFilm}
        newTitleFilm={newTitleFilm}
        setNewTitleFilm={setNewTitleFilm}
      />
    </main>
  );

  //-------------------------------------------SEZIONE FUNZIONI-----------------------------------------------------------------------//

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
  //--------------------------------FINE SEZIONE FUNZIONI ------------------------------------------------//
};
export default MainContainer;
