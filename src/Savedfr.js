import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


var favourites = [] 

var regex = new RegExp("/enregistrées/")

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
    toast.success("Succès : vidéos supprimées")
}


const SavedFr = () => {
    return(
        <div className="saved">
            <h2>Vos vidéos enregistrées:</h2>
            <p>Cliquez sur le lien pour regarder la vidéo souhaitée.</p>
        
        {favourites.map(item => 
        
        <Link to={item.toString()}>{item.replace(regex,"")}<br></br></Link>)} 

<Toaster containerStyle={{    position: 'relative',  }} />

<br></br>
<div className="btn">
     <h4>Avertissement! Cliquer sur ce bouton supprimera toutes les vidéos enregistrées. Si vous faites cela, vous devrez les rajouter manuellement.</h4>
<button onClick={notice}>
Effacer toutes les vidéos
</button> </div>
          
          </div>

          
    )
}

export default SavedFr;


