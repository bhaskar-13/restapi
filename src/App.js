import './App.css';
import { MovieList } from './MovieList';
import { Switch, Route, Link,Redirect} from "react-router-dom";
import { MovieDetais } from './MovieDetais';
import { AddMovie } from './addmovies';
import {EditMovies} from "./editmovies";



function App() {

  return (
    //Routing section
    <div className="App">
    <nav>
    <div className="nav"> 
    <Link to="/movies">Movies</Link>
    <Link to="/addmovies">Add Movies</Link> 
    </div>
    </nav>
   
    <Switch>
    
    
   
    <Route path="/films">
    <Redirect to="/movies"/>
    </Route>

    <Route path="/movies/edit/:id">
    <EditMovies />
    </Route>

    <Route path="/movies/:id">
    <MovieDetais/>
    </Route>

    <Route path="/movies">
    <MovieList />
    </Route>

    <Route path="/addmovies">
    <AddMovie  />
    </Route>

    
    <Route path="">
    <Redirect to="/movies"/>
    <MovieList />
   </Route> 

    <Route path="**">
     Not Found
    </Route>

    
    </Switch>
    </div>
);
}

export default App;


     



 
