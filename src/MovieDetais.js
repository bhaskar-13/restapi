import { useParams } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Button from '@mui/material/Button';
import { useHistory} from "react-router";
import { useEffect, useState } from "react";

//Movies Details Component
export function MovieDetais() 
{
  const { id } = useParams();
  const history=useHistory();
  const [movie,setMovie]=useState({});
  useEffect(()=>{
    fetch(`https://616e3509a83a850017caa871.mockapi.io/movies/${id}`)
   .then((data)=>data.json())
   .then((mv)=>setMovie(mv));
 },[id]);




  let styles = { color: movie.rating < 8 ? "red " : "green", fontWeight: "bold" };
  return (
     <div className="movie-container1">
      <iframe width="100%" height="711" src={movie.trailer} title="youtube" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
      <div className="movie-specs">
        <h1>{movie.MovieName}</h1>
        <h3 className="movierating" style={styles}>⭐{movie.rating}</h3>
      </div>
      <p className="movie-summary">{movie.summary}</p>
      {/* <Button variant="outlined">{KeyboardBackspaceIcon}</Button> */}
      <Button variant="outlined" startIcon={<KeyboardBackspaceIcon/>} onClick={()=>history.goBack()}>Back</Button>
    </div>
  );
}
