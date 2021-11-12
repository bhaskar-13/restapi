//     import { useState } from 'react';
  
//     import TextField from '@mui/material/TextField';
//     import Button from '@mui/material/Button';
  
    
//     import  './App.css';

//     export function AddMovie({movies}){
//     const [name,setName]=useState("");
//     const [image,setimage]=useState("");
//     const [rating1,setrating]=useState("");
//     const [summary1,setsummary]=useState("");
//     const [movie,setMovies]=useState(movies);
//     return(  
      
//      <div className="movieform">
//      <TextField value={name} onChange={(ele)=>setName(ele.target.value)}  id="standard-basic" label="Enter Movie Name" variant="standard" />
//      <TextField value={image} onChange={(ele)=>setimage(ele.target.value)}  id="standard-basic" label="Enter pic url" variant="standard" />
//      <TextField  value={rating1} onChange={(ele)=>setrating(ele.target.value)} id="standard-basic" label="Enter Movie Rating" variant="standard" />
//      <TextField value={summary1} onChange={(ele)=>setsummary(ele.target.value)}   id="standard-basic" label="Enter Movie summary" variant="standard" />
//      <Button onClick={()=>{
//       const newMovie={name:name,image:image,rating:rating1,summary:summary1};
//       setMovies([...movie,newMovie]);
//     }} variant="outlined">Add Movies</Button>
//      <MovieList movies={movie}/>
     
//     </div>
      
//   )
// }