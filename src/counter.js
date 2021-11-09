import {useState} from "react";
 function Likecounter()
{  
  let [like,setLike]=useState(0);
  let [dislike,setdislike]=useState(0);
  return(
   <div className="countercontainer">
    <button className="like" onClick={()=>{
      setLike(like+1);
   }}>👍{like}</button>
   

   <button className="like" onClick={()=>{
      setdislike(dislike+1);
   }}>👎{dislike}</button>
   
   </div>
);
}

export {Likecounter};

