import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


var favourites = [] 

var regex = new RegExp("/saved/")

export function addFav(vid){
    if (favourites.includes(vid)){
        return false
    }
    else{
    favourites.push(vid)
return true}
}


const notice = () =>{
    favourites = [] 
    setTimeout(window.location.reload(),10000)
    toast.success("Success: Videos Deleted")
}


const Saved = () => {
    return(
        <div className="saved">
            <h2>Your Saved Videos:</h2>
            <p>Click on the links to watch the desired video</p>
        
        {favourites.map(item => 
        
        <Link to={item.toString()}>{item.replace(regex,"")}<br></br></Link>)} 

<Toaster containerStyle={{    position: 'relative',  }} />

<br></br>
<div className="btn">
     <h4>Warning! Clicking this button will delete all save videos. If you do this, you will have to add them back manually.</h4>
<button onClick={notice}>
  Clear All Videos
</button> </div>
          
          </div>

          
    )
}

export default Saved;


