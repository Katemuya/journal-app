import "./Form.css";
export default function Form() {
  return (
    <>
      (//Form section)
      <form id="form">
        <h3>NEW ENTRY</h3>
        <label for="motto"> Motto</label>
        <input type="text" id="motto" name="motto"></input>
        <label for="notes">Notes </label>
        <textarea id="notes" name="notes"></textarea>
        <button type="submit" value="submit">
          Create
        </button>
      </form>
    </>
  );
}
