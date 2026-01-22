//Importo font Awesom e chiamo libreria per poter utilizzare icone
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

const GeneratorList = (props) => {
  const { titleFilms, removeFilm } = props;
  return (
    <ul>
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
  );
};

export default GeneratorList;
