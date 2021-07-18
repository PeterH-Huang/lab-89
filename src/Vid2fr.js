import ReactPlayer from "react-player";
import {addFav} from"./Savedfr";
import toast, { Toaster } from 'react-hot-toast';


const notice = () =>{
if(addFav("/enregistrées/Coup de pied circulaire") === false){
    toast.error('Erreur: Vous avez déjà enregistré cette vidéo');
}
else{
    toast.success("Succès: vidéo enregistrée")
}
}

const Vid2Fr= () => {
    return(
        <div className="Vid">

            <h2>Coup de pied circulaire</h2>

            <div className = "player">

            <ReactPlayer url="https://www.youtube.com/watch?v=lcIqosv86BY" />
            
            
            </div>

            <h3>Étapes</h3>

            <ol className = "ol">
            <li> Mettez-vous en position de combat. </li>
                 <li> Levez les bras pour être prêt à bloquer à tout moment. </li>
                 <li> Soulevez le genou de votre jambe arrière vers l'avant de votre corps, "chambrez" votre coup de pied. </li>
                 <li> Tout en pivotant sur votre autre pied, poussez votre jambe de frappe vers l'avant.</li>
                 <li> Ramenez votre jambe de frappe et revenez en position de combat.</li>
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

export default Vid2Fr;