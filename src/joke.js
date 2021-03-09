import React from "react"
import './joke.css';



function Joke(props){
    
    return(
        <div className="chuck-jokes">
            
            <br></br>
            <h2>Chuck Norris</h2> <br></br>
            <h4>Truth#: {props.item1.id}</h4> <br></br>
            <iframe title="chuck-norris-gif" src="https://giphy.com/embed/7qZ3ZX1Gu3TZm" width="480" height="325" frameBorder="0"></iframe><br></br>
            <h4>Truth:</h4><br></br>
            <p className="text">{props.item1.joke.replaceAll("&quot;", "''")} </p><br></br>
            <iframe width="560" height="315" title="chuck-norris-montage" src="https://www.youtube.com/embed/OwhI65WL7qA?autoplay=1"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            
        </div>  
    );
}
export default Joke