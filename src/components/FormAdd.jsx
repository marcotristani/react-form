//Importo font Awesom e chiamo libreria per poter utilizzare icone
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

// creo form con submito che mi va ad aggiungere elemnto alla lista
const FormAdd = (props) => {
  const { addFilm, newTitleFilm, setNewTitleFilm, activeForm } = props;

  return (
    <form onSubmit={addFilm} className={activeForm ? "" : "d-none"}>
      <h2>Aggiungi un nuovo film</h2>
      <label for="input-title">Aggiungi il un nuovo titolo di film</label>
      <input
        id="input-title"
        type="text"
        placeholder="Inserisci il titolo qui"
        value={newTitleFilm}
        // imposto onChange per poter prendere in input valore inserito dall'utente
        onChange={(e) => setNewTitleFilm(e.target.value)}
      />
      <button className="btn-form">
        <FontAwesomeIcon icon="fa-solid fa-upload" bounce />
      </button>
    </form>
  );
};
export default FormAdd;
