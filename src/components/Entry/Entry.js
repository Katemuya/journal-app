import FavoriteButton from "../Favorite Button/FavoriteButton";
import "./Entry.css";

export default function Entry({
  id,
  date,
  motto,
  notes,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <p className="date">{date}</p>
      <div className="entry-title">
        <p className="title-text">{motto}</p>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          id={id}
          isFavorite={isFavorite}
        ></FavoriteButton>
      </div>
      <p>{notes}</p>
    </>
  );
}
