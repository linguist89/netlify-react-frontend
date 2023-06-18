import React from "react";

function ContentInput({ instructions, placeholder }){
return(
    <div style={{display:"grid", gridTemplateColumns:"10fr"}}>
        <label style={{paddingBottom:"10px"}}>{instructions}</label>
        <textarea style={{resize:"none", height:"100px", width:"300px", padding:"10px"}}placeholder={placeholder}></textarea>
    </div>
    
);
}

export default ContentInput;