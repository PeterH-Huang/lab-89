import ReactPlayer from "react-player";
import {addFav} from"./Savedfr";
import toast, { Toaster } from 'react-hot-toast';


const notice = () =>{
if(addFav("/enregistrées/Jeu de jambes de mouvement de boxe") === false){
    toast.error('Erreur: Vous avez déjà enregistré cette vidéo');
}
else{
    toast.success("Succès: vidéo enregistrée")
}
}

const Vid4Fr = () => {
    return(
        <div className="Vid">

            <h2>Exercices de jeu de jambes de mouvement de boxe</h2>

            <div className = "player">

            <ReactPlayer url="https://www.youtube.com/watch?v=lcIqosv86BY" />
            
            
            </div>

            <h3>Étapes</h3>

            <ol className = "ol">
            <li> Exercice de ficelle de marionnettes </li>
                 <li> Exercice d'Ali Backpedal </li>
                 <li> Exercice de saut </li>
            </ol>     
            <Toaster containerStyle={{    position: 'relative',  }} />

<div className="btn">
<h4>Vous pouvez enregistrer cette vidéo et la regarder à tout moment dans la section enregistrée</h4>
<button onClick={notice}>
Enregistrer la vidéo
</button> </div>

        </div>

        


    )
}

export default Vid4Fr;