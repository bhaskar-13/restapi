    import { useState } from 'react';
    import { MovieList } from './MovieList';

    export function AddMovie({movies}){
    const [name,setName]=useState("");
    const [image,setimage]=useState("");
    const [rating1,setrating]=useState("");
    const [summary1,setsummary]=useState("");
    const [movie,setMovies]=useState(movies);
    return(  
      
     <div className="movieform">
    <input value={name} onChange={(ele)=>setName(ele.target.value)} type="text" placeholder="Enter Movie Name"/>
    <input value={image} onChange={(ele)=>setimage(ele.target.value)} type="text" placeholder="Enter the Movie image url"/>
    <input value={rating1} onChange={(ele)=>setrating(ele.target.value)}type="text" placeholder="Enter the MovieRating"/>
     <input value={summary1} onChange={(ele)=>setsummary(ele.target.value)}   type="text" placeholder="Enter the Movie Summary"/>
    
    <button onClick={()=>{
      const newMovie={name:name,image:image,rating:rating1,summary:summary1};
      setMovies([...movie,newMovie]);
    }}>Add Movies</button>
     <MovieList movies={movie}/>
    </div>
      
  )
}