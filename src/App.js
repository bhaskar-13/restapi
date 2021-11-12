import './App.css';
import { MovieList } from './MovieList';
import { Switch, Route, Link,Redirect,useParams} from "react-router-dom";
import {AddColor}  from './addcolor';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function App() {
const Intialmovies=[{MovieName:"Avatar",Poster:"http://imgs.abduzeedo.com/files/articles/Avatar/4154691413_a695e033a8_o.jpg",rating:7.8,summary:"On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.", trailer:"https://www.youtube.com/embed/5PSNL1qE6VY"},

    {MovieName:"Sivaji",Poster:"https://images.hindustantimes.com/img/2021/06/15/1600x900/Sivaji_The_Boss_1623762218379_1623762234022.jpg",rating:7.5,summary:"Sivaji returns from the US to invest his money here for good causes. But seeing his rising popularity, the politicians cheat him and steal all of his property. Sivaji takes this as a challenge.",trailer:"https://www.youtube.com/embed/ElbvEqzPdfo"},

   {MovieName:"Aayirathil Oruvan ",Poster:"https://www.sify.com/uploads/maxresdefault_umxhj8jfiaddb.jpeg",rating:8,summary:"Anitha, a government official, embarks on a journey to find Chandramouli, an archaeologist, who went to Vietnam in order to search for any existence of the prince of the Chola dynasty.",trailer:"https://www.youtube.com/watch?v=T3Gfdes1BaQ"},

    {MovieName:"7 Aum Arivu",Poster:"https://im.rediff.com/movies/2011/nov/23sl1.jpg",rating:6.5,summary:"The legendary Bodhi Dharma, a revered fighter and medic who brought Zen to China and was the foundation of the Shaolin temple has almost been forgotten in his place of birth in Tamil Nadu, India. Now a genetic engineering student needs to awaken the Genetic Memory in his descendant today to use ancient and long forgotten skills to prevent a Biological war between the two most populous nations on the earth.",trailer:"https://www.youtube.com/embed/HZWlRm8vLxc"},

    {MovieName:"Ghajini ",Poster:"https://instube.com/uploads/images/1584698030.jpg",rating:7.3,summary:"The legendary Bodhi Dharma, a revered fighter and medic who brought Zen to China and was the foundation of the Shaolin temple has almost been forgotten in his place of birth in Tamil Nadu, India. Now a genetic engineering student needs to awaken the Genetic Memory in his descendant today to use ancient and long forgotten skills to prevent a Biological war between the two most populous nations on the earth.",trailer:"https://www.youtube.com/embed/j_DshRUOm-o"}
              
  ];

  const [movie,setMovies]=useState(Intialmovies);

  return (
    <div className="App">
    <nav>
    <div className="nav">
    <Link to="/">Home</Link>
    <Link to="/movies">Movies</Link>
    <Link to="/addmovies">Add Movies</Link>
    <Link to="/color">Color</Link>
    </div>
    </nav>
    <Switch>
   
    <Route path="/films">
    <Redirect to="/movies"/>
    </Route>
    <Route path="/movies/:id">
    <MovieDetais movies={movie}/>
    </Route>     
    <Route path="/movies">
    <MovieList movies={movie} setMovies={setMovies} />
    </Route>
    <Route path="/addmovies">
    <AddMovie  movies={movie} setMovies={setMovies}/>
    </Route>
     <Route path="/color">
     < AddColor/>
    </Route>
    <Route exact path="/">
     Welcome To Home
    </Route>
    <Route path="**">
     Not Found
    </Route>
    </Switch>
    </div>
);
}

function AddMovie({movies,setMovies})
{
  const [name,setName]=useState("");
  const [image,setimage]=useState("");
  const [rating1,setrating]=useState("");
  const [summary1,setsummary]=useState("");
 
  return(
    <div className="movieform">
    <TextField value={name} onChange={(ele)=>setName(ele.target.value)}  id="standard-basic" label="Enter Movie Name" variant="standard" />
    <TextField value={image} onChange={(ele)=>setimage(ele.target.value)}  id="standard-basic" label="Enter pic url" variant="standard" />
    <TextField  value={rating1} onChange={(ele)=>setrating(ele.target.value)} id="standard-basic" label="Enter Movie Rating" variant="standard" />
    <TextField value={summary1} onChange={(ele)=>setsummary(ele.target.value)}   id="standard-basic" label="Enter Movie summary" variant="standard" />
    <Button onClick={()=>{
     const newMovie={name:name,image:image,rating:rating1,summary:summary1};
     setMovies([...movies,newMovie]);
   }} variant="outlined">Add Movies</Button>
   </div>
  )
}

function MovieDetais({movies}){
  const {id}=useParams();
  const movie=movies[id];
  let styles = { color: movie.rating < 8 ? "red " : "green", fontWeight: "bold" };
  return(
    <div  className="movie-container1">
    <iframe width="100%" height="711" src={movie.trailer} title="youtube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>  
    <div className="movie-specs">
    <h1>{movie.MovieName}</h1>
    <h3 className="movierating" style={styles}>⭐{movie.rating}</h3>
    </div>
    <p className="movie-summary">{movie.summary}</p>
    </div>
  )
}

export default App;

     



 
