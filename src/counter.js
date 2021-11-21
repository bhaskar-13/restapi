import {useState} from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import './App.css';

//Like Counter
 function Likecounter()
{  
  let [like,setLike]=useState(0);
  let [dislike,setdislike]=useState(0);
  return(
   <div className="countercontainer">
  

   <Badge badgeContent={like} color="primary">
   <IconButton className="like" onClick={()=>{
      setLike(like+1);
   }} aria-label="like movie" color="primary">
    👍
   </IconButton>
  
</Badge>

<Badge badgeContent={dislike} color="error">
<IconButton className="like" onClick={()=>{
      setdislike(dislike+1);
   }} aria-label="dislike movie" color="error">
    👎
   </IconButton> 
  
</Badge>

    
   </div>
);
}
export {Likecounter};

