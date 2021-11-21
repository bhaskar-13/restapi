import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  { useHistory } from "react-router-dom";

//Adding Movies Compoent

  export function AddMovie({ movies, setMovies }) {
  const [name, setName] = useState("");
  const [image, setimage] = useState("");
  const [rating1, setrating] = useState("");
  const [summary1, setsummary] = useState("");
  const [trailer,settrailer]=useState("");
  const history=useHistory();

  return (
      <div className="movieform">
      <TextField value={name} onChange={(ele) => setName(ele.target.value)} id="standard-basic" label="Enter Movie Name" variant="standard" />
      <TextField value={image} onChange={(ele) => setimage(ele.target.value)} id="standard-basic" label="Enter pic url" variant="standard" />
      <TextField value={rating1} onChange={(ele) => setrating(ele.target.value)} id="standard-basic" label="Enter Movie Rating" variant="standard" />
      <TextField value={summary1} onChange={(ele) => setsummary(ele.target.value)} id="standard-basic" label="Enter Movie summary" variant="standard" />
      <TextField value={trailer} onChange={(ele) => settrailer(ele.target.value)} id="standard-basic" label="Enter trailer" variant="standard" />
      <Button onClick={() => {
        const newMovie = { MovieName: name, Poster: image, rating: rating1, summary: summary1,trailer:trailer};
        fetch(`https://616e3509a83a850017caa871.mockapi.io/movies`,
        {
          method:"POST",
          body:JSON.stringify(newMovie),
          headers:{
            "Content-Type":"application/json"
          }
                        
        }).then(()=>history.push("/movies"));
       
      }} variant="outlined">Add Movies</Button>
    </div>
  );
}
