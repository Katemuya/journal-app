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
        <form className="form" id="form" onSubmit={handleSubmit}>
          <h3 className="entry-header"> NEW ENTRY</h3>
          <label className="motto-label" for="motto">
            {" "}
            Motto
          </label>
          <input
            className="motto-input"
            type="text"
            id="motto"
            name="motto"
          ></input>
          <label className="notes-label" for="notes">
            Notes{" "}
          </label>
          <textarea className="notes-input" id="notes" name="notes"></textarea>
          <button className="create-button" type="submit" value="submit">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
