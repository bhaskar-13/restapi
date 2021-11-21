 import  { Movie } from "./Movie";
 import  EditIcon from '@mui/icons-material/Edit';
 import  DeleteIcon from '@mui/icons-material/Delete';
 import  IconButton from '@mui/material/IconButton';
 import  { useHistory } from "react-router-dom";
 import  { useState,useEffect } from 'react';
 //Movies List component
 export function MovieList() {


  let history=useHistory();
  const [movie,setMovies]=useState([]);
  const getMoviesList=()=>
  {
   fetch("https://616e3509a83a850017caa871.mockapi.io/movies")
  .then((data)=>data.json())
  .then((mv)=>setMovies(mv))
  }


useEffect(getMoviesList,[]);
  

  return (
    <section className="movie-list">
      {movie.map((mv,index) =><Movie key={index}
        name={mv.MovieName}
        rating={mv.rating}
        summary={mv.summary}
        pic={mv.Poster} 
        id={mv.id}
        editButton={<IconButton
                        onClick={()=>{
                          history.push("/movies/edit/" +mv.id);
                    }}
                        className="deleteButton"
                        aria-label="deleteButton" 
                    >
                       <EditIcon/>
                      </IconButton>}
         deleteButton={<IconButton
                        onClick={()=>{
                          // const deleteindex=index
                          // // console.log("deleting Movies",index);
                          // const remainingMovies=(movies.filter((mv,idx)=>idx!==deleteindex));
                          // setMovies(remainingMovies);
                        // deletemovies(mv.id)
                        fetch(`https://616e3509a83a850017caa871.mockapi.io/movies/${mv.id}`,{
                          method:"DELETE"
                        }).then(()=>getMoviesList());
                        
                       }}
                        className="deleteButton"
                        aria-label="deleteButton" 
                      >
                      <DeleteIcon/>
                      </IconButton>}
     
        />
        
      )}
    </section>
  );
}
 




