import ReactPlayer from "react-player";
import {addFav} from"./Savedfr";
import toast, { Toaster } from 'react-hot-toast';


const notice = () =>{
if(addFav("/enregistrées/Takedowns à deux jambes") === false){
    toast.error('Erreur: Vous avez déjà enregistré cette vidéo');
}
else{
    toast.success("Succès: vidéo enregistrée")
}
}

const Vid3Fr = () => {
    return(
        <div className="Vid">

            <h2>Takedowns à deux jambes</h2>

            <div className = "player">

            <ReactPlayer url="https://www.youtube.com/watch?v=lcIqosv86BY" />
            
            
            </div>

            <h3>Étapes</h3>

            <ol className = "ol">
            <li> Rapprochez-vous de votre adversaire. Vous devez être à une distance où vous pouvez toucher l'épaule de votre adversaire. </li>
                 <li> Placez votre pied d'attaque entre les jambes de votre adversaire. </li>
                 <li> Saisissez la jambe de votre adversaire, avec une main sur chaque jambe. </li>
                 <li> Tirez les jambes de votre adversaire vers vous et en même temps poussez vos épaules dans l'abdomen de votre adversaire.</li>
                 <li> Amenez votre jambe arrière en avant et forcez votre adversaire au sol.</li>
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

export default Vid3Fr;