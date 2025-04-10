export default function Form({ setName, name }) {
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    if (name) {
      alert(`Bonjour ${name}`);
    }
    setName("");
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Entrez votre prenom"
        value={name}
        onChange={handleChange}
        required
      />
      <button type="submit" onClick={handleClick}>
        Accéder à votre espace
      </button>
    </form>
  );
}
