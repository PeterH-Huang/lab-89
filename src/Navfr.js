import { Link } from "react-router-dom";

const NavFr = () => {
    return (
      <nav className="nav">
        <h1>MMA eEntraîneur</h1>
        <div className="links">
  
        <Link to="/Sélection de la langue"><img src="https://img.icons8.com/color/35/000000/language.png"/>Sélection de la langue</Link>
        <Link to="/comment utiliser"><img src="https://img.icons8.com/color/35/000000/help--v1.png"/>comment utiliser</Link>
        <Link to="/feuilleter"><img src="https://img.icons8.com/color/35/000000/watch-tv.png"/>Parcourir les vidéos</Link>
        <Link to="/enregistrées"><img src="https://img.icons8.com/color/35/000000/save--v1.png"/>Vidéos enregistrées</Link>
        </div>
      </nav>
    );
  }
   
  export default NavFr;