import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Movie } from "./Movie";

export default function router(){
    retrun(
        <div className="header">
          <ul>
           <li>
              <Link to="/movies">Movies</Link> 
           </li>
           <li>
               <Link to="/addmovies">Add Movies</Link>
           </li>
           <li>
           <Link to="/colorBox">colorBox</Link>
           </li>
          </ul>

          <Switch>
          <Route path="/movies">
          < Movie/>
          </Route>
          <Route path="/addMovies">

          </Route>
          <Route path="/colorBox">

          </Route>
          </Switch>
        </div>
    )
}
