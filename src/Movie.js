import { useState } from "react";
import { Likecounter } from "./counter";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useHistory } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
export function Movie({ name, rating, summary, pic ,id,deleteButton,editButton}) {
  let [show, setshow] = useState(true);
  let history=useHistory();
  let styles = { color: rating < 8 ? "red " : "green", fontWeight: "bold" };
  let displaydescp = { display: show ? "block" : "none" };
  return (
     <Card  className="movie-container">
      <img className="movie-poster" src={pic} alt={name} />
      <CardContent>
      <div className="movie-specs">
        <h1 className="movie-name">{name}
        <IconButton  onClick={()=>history.push('/movies/' +id)} aria-label="more-info" color="primary">
        {<InfoIcon/>}
      </IconButton>
        <IconButton  onClick={() => setshow(!show)} aria-label="hide-show" color="primary">
        {show ?<ExpandLessIcon/> :<ExpandMoreIcon/>}
      </IconButton>
        </h1>
        <p className="movierating" style={styles}>⭐{rating}</p>
      </div>
      <p style={displaydescp} className="movie-summary">{summary}</p>
      <CardActions>
      <Likecounter />
      {deleteButton}
      {editButton}
      </CardActions>
      </CardContent>
    </Card>
  );
}
