import "./FavoriteButton.css";

export default function FavoriteButton({ onToggleFavorite, isFavorite, id }) {
  function clickHandler() {
    console.log("click Handler");
    onToggleFavorite(id);
  }

  return (
    <div
      className={`
        ${isFavorite ? "filled-favorite-button" : "favorite-button"}`}
      onClick={clickHandler}
    ></div>
  );
}
