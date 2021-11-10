
import './App.css';
import { MovieList } from './MovieList';
import {AddMovie} from './addmovie';
import { Switch, Route, Link } from "react-router-dom";
import {AddColor}  from './addcolor';




function App() {
const Intialmovies=[{MovieName:"Avatar",Poster:"http://imgs.abduzeedo.com/files/articles/Avatar/4154691413_a695e033a8_o.jpg",rating:7.8,summary:"On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world."},

    {MovieName:"Sivaji",Poster:"https://images.hindustantimes.com/img/2021/06/15/1600x900/Sivaji_The_Boss_1623762218379_1623762234022.jpg",rating:7.5,summary:"Sivaji returns from the US to invest his money here for good causes. But seeing his rising popularity, the politicians cheat him and steal all of his property. Sivaji takes this as a challenge."},

   {MovieName:"Aayirathil Oruvan ",Poster:"https://www.sify.com/uploads/maxresdefault_umxhj8jfiaddb.jpeg",rating:8,summary:"Anitha, a government official, embarks on a journey to find Chandramouli, an archaeologist, who went to Vietnam in order to search for any existence of the prince of the Chola dynasty."},

    {MovieName:"7 Aum Arivu",Poster:"https://im.rediff.com/movies/2011/nov/23sl1.jpg",rating:6.5,summary:"The legendary Bodhi Dharma, a revered fighter and medic who brought Zen to China and was the foundation of the Shaolin temple has almost been forgotten in his place of birth in Tamil Nadu, India. Now a genetic engineering student needs to awaken the Genetic Memory in his descendant today to use ancient and long forgotten skills to prevent a Biological war between the two most populous nations on the earth."},

    {MovieName:"Ghajini ",Poster:"https://instube.com/uploads/images/1584698030.jpg",rating:7.3,summary:"The legendary Bodhi Dharma, a revered fighter and medic who brought Zen to China and was the foundation of the Shaolin temple has almost been forgotten in his place of birth in Tamil Nadu, India. Now a genetic engineering student needs to awaken the Genetic Memory in his descendant today to use ancient and long forgotten skills to prevent a Biological war between the two most populous nations on the earth."}
              
  ];

  // const [name,setName]=useState("");
  // const [image,setimage]=useState("");
  // const [rating1,setrating]=useState("");
  // const [summary1,setsummary]=useState("");
  // const [movie,setMovies]=useState(Intialmovies);

  return (
         <div className="App">
      {/* <div className="movieform">
     <input value={name} onChange={(ele)=>setName(ele.target.value)} type="text" placeholder="Enter Movie Name"/>
     <input value={image} onChange={(ele)=>setimage(ele.target.value)} type="text" placeholder="Enter the Movie image url"/>
     <input value={rating1} onChange={(ele)=>setrating(ele.target.value)}type="text" placeholder="Enter the Movie Rating"/>
     <input value={summary1} onChange={(ele)=>setsummary(ele.target.value)}   type="text" placeholder="Enter the Movie Summary"/>
    
    <button onClick={()=>{
      const newMovie={name:name,image:image,rating:rating1,summary:summary1};
      setMovies([...movie,newMovie]);
    }}>Add Movies</button>
    </div> */}
    <nav>
    <div className="nav">
    <Link to="/movies">Movies</Link>
    <Link to="/addmovies">Add Movies</Link>
    <Link to="/color">color</Link>
    </div>
    </nav>
    <Switch>
    <Route path="/movies">
    <AddMovie  movies={Intialmovies}/>
    </Route>
    <Route path="/addmovies">
    <MovieList movies={Intialmovies}/>
     </Route>
     <Route path="/color">
     < AddColor/>
    </Route>
  
    </Switch>
    </div>
);
}

export default App;

     



 
