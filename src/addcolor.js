import { useState } from "react";
export function AddColor(){
   const [color,setcolor]=useState("pink");
   const styles={backgroundColor:color};
   const [colors,setcolors]=useState(["pink","crimson","teal"]); 
  return(
    <div>
      <input value={color} onChange={(eve)=>setcolor(eve.target.value)} style={styles} placeholder="Enter a color"/>
      <button onClick={()=>setcolors([...colors,color])}>Add Color</button>
      {colors.map((clr,idx)=><ColorBox key={idx} color={clr}/>
      )}

    </div>
   
  );
}

function ColorBox({color}){
   const styles={backgroundColor:color,height:"25px",width:"200px",marginTop:"10px"};
   return(<div style={styles}></div>);    
}



 
