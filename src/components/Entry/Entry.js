import FavoriteButton from "../Favorite Button/FavoriteButton";
import "./Entry.css";

export default function Entry({ id, date, motto, notes }) {
  return (
    <>
      <p className="date">{date}</p>
      <div className="entry-title">
        <p className="title-text">{motto}</p>
        <FavoriteButton></FavoriteButton>
      </div>
      <p>{notes}</p>
    </>
  );
}
