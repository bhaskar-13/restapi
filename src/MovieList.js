 import { Movie } from "./Movie";
 import EditIcon from '@mui/icons-material/Edit';
 import DeleteIcon from '@mui/icons-material/Delete';
 import IconButton from '@mui/material/IconButton';
 export function MovieList({ movies,setMovies}) {
  console.log(movies);
  return (
    <section className="movie-list">
      {movies.map((mv,index) => <Movie key={index}
        name={mv.MovieName}
        rating={mv.rating}
        summary={mv.summary}
        pic={mv.Poster} 
        id={index}
        deleteButton={<IconButton
                        onClick={()=>{
                        
                        }}
                        className="deleteButton"
                        aria-label="deleteButton" 
                      >
                          <EditIcon/>
                      </IconButton>}
        editButton={<IconButton
                        onClick={()=>{
                          const deleteindex=index
                          // console.log("deleting Movies",index);
                          const remainingMovies=(movies.filter((mv,idx)=>idx!==deleteindex));
                          setMovies(remainingMovies);
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
