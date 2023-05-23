import "./Form.css";
export default function Form({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    onAddEntry(data);
    event.target.reset();
    event.target.elements.motto.focus();
  }
  return (
    <>
      <div>
        <form id="form" onSubmit={handleSubmit}>
          <h3>NEW ENTRY</h3>
          <label for="motto"> Motto</label>
          <input type="text" id="motto" name="motto"></input>
          <label for="notes">Notes </label>
          <textarea id="notes" name="notes"></textarea>
          <button type="submit" value="submit">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
