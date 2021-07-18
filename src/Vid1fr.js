import ReactPlayer from "react-player";
import {addFav} from"./Savedfr";
import toast, { Toaster } from 'react-hot-toast';


const notice = () =>{
if(addFav("/enregistrées/Mont Évasion") === false){
    toast.error('Erreur: Vous avez déjà enregistré cette vidéo');
}
else{
    toast.success("Succès: vidéo enregistrée")
}
}

const Vid1Fr = () => {
    return(
        <div className="Vid">

            <h2>Mont Évasion</h2>

            <div className = "player">

            <ReactPlayer url="https://www.youtube.com/watch?v=lcIqosv86BY" />
            
            
            </div>

            <h3>Étapes</h3>

            <ol className = "ol">
            <li> Utilisez la main du côté où vous souhaitez balayer pour saisir les triceps de votre adversaire. </li>
                 <li> Saisissez la nuque de l'adversaire avec l'autre main et poussez sa tête aussi près de vous que possible. </li>
                 <li> Du même côté que le bras coincé, placez votre pied à l'extérieur et contre le pied de votre adversaire, en emprisonnant sa jambe en place.</li>
                 <li> Pontez vos hanches vers le haut et roulez dans la direction du bras et de la jambe coincés de votre adversaire.</li>
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

export default Vid1Fr;