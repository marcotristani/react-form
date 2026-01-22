// creo form con submito che mi va ad aggiungere elemnto alla lista
const FormAdd = (props) => {
  const { addFilm, newTitleFilm, setNewTitleFilm } = props;

  return (
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
  );
};
export default FormAdd;
