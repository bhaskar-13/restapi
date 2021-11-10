import { useState } from "react";
import { Likecounter } from "./counter";
export function Movie({ name, rating, summary, pic }) {
  let [show, setshow] = useState(true);
  let styles = { color: rating < 8 ? "red " : "green", fontWeight: "bold" };
  let displaydescp = { display: show ? "block" : "none" };
  return (
     <div className="movie-container">
      <img className="movie-poster" src={pic} alt={name} />
      <div className="movie-specs">
        <h1 className="movie-name">{name}</h1>
        <p className="movierating" style={styles}>⭐{rating}</p>
      </div>
      <button onClick={() => setshow(!show)}>Hide Description</button>
      <p style={displaydescp} className="movie-summary">{summary}</p>
      <Likecounter />
    </div>
  );
}
