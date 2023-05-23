import { useState } from "react";
import "./FavoriteButton.css";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  function clickHandler() {
    setIsFavorite(!isFavorite);
  }

  return (
    <span
      className={`
        ${isFavorite ? "filled-favorite-button" : "favorite-button"}`}
      onClick={clickHandler}
    ></span>
  );
}
