import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router';
 
//editing Movies Component
  export function EditMovies() {
  const { id } = useParams();
  
  // const movie=movies[id];
  const [movie,setMovie]=useState(null);
  useEffect(()=>{
    fetch(`https://616e3509a83a850017caa871.mockapi.io/movies/${id}`)
   .then((data)=>data.json())
   .then((mv)=>setMovie(mv));
 },[id]);
 return(
     movie?<UpdateMovies movie={movie}/>:""
 )
}

 const UpdateMovies=({movie})=>{
  const history=useHistory();
  const [name, setName] =useState(movie.MovieName);
  const [image, setimage] =useState(movie.Poster);
  const [rating1, setrating]=useState(movie.rating);
  const [summary1, setsummary]=useState(movie.summary);
  const [trailer,settrailer]=useState(movie.trailer);
  
 
  return (
      <div className="movieform">
      <TextField value={name} onChange={(ele) => setName(ele.target.value)} id="standard-basic" label="Enter Movie Name" variant="standard" />
      <TextField value={image} onChange={(ele) => setimage(ele.target.value)} id="standard-basic" label="Enter pic url" variant="standard" />
      <TextField value={rating1} onChange={(ele) => setrating(ele.target.value)} id="standard-basic" label="Enter Movie Rating" variant="standard" />
      <TextField value={summary1} onChange={(ele) => setsummary(ele.target.value)} id="standard-basic" label="Enter Movie summary" variant="standard" />
      <TextField value={trailer} onChange={(ele) => settrailer(ele.target.value)} id="standard-basic" label="Enter trailer" variant="standard" />
      <Button onClick={() => {
        const updatedMovie = { MovieName: name, Poster: image, rating: rating1, summary: summary1,trailer:trailer};
        // const copymovies=[...movies];
        // copymovies[id]=updatedMovie;
        // setMovies(copymovies);
        //Method Put
        //body json and id should  be passed as params
        //header content type json        
        fetch(`https://616e3509a83a850017caa871.mockapi.io/movies/${movie.id}`,
        {
          method:"PUT",
          body:JSON.stringify(updatedMovie),
          headers:{
            "Content-Type":"application/json"
          }
                        
        }).then(()=>history.push("/movies"));
      }} variant="outlined">Save</Button>
    </div>
  );

 }
 

