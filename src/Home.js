import { Link } from "react-router-dom";


const Home = () => {
    return(
<div className ="home">
<h2>Welcome to MMA eTrainer!/Bienvenue sur MMA eEntraîneur!</h2>

    <div className ="langLinks">
    <h3><img src="https://img.icons8.com/color/35/000000/language.png"/>Select A Language/Sélectionnez une langue:</h3>
    <ol className = "ol">
        <li><Link to="/how To Use/">English</Link></li>
        <li><Link to="/comment utiliser/">Français</Link></li></ol>
    </div>

    <div className="how">
        <h3>How To Use:</h3> 
        <ul>
          <li>You can change your language anytime using the language select section</li>
          <li>Use the browse section to view all lesson and drill videos.</li>
          <li>You can save videos by clicking on the button underneath to the video.</li>
          <li>Go to the saved section to watch videos you saved.</li></ul>
         
          <h3>Comment utiliser:</h3>
          <ul>
          <li>Vous pouvez changer de langue à tout moment en utilisant la section de sélection de langue</li>
           <li>Utilisez la section Parcourir pour afficher toutes les vidéos de cours et d'exercices.</li>
           <li>Vous pouvez enregistrer des vidéos en cliquant sur le bouton situé en dessous de la vidéo.</li>
           <li>Accédez à la section enregistrée pour regarder les vidéos que vous avez enregistrées.</li></ul>
      </div>

</div>


)
    }

export default Home;