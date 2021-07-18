import { Link } from "react-router-dom";

const BrowseFr = () => {
    return(
        <div className="browse">
            <h2>Parcourez ces leçons et exercices :</h2>
            <div className ="vidLinks">
                <Link to="/feuilleter/Mont Évasion">Mont Évasion</Link><br></br>
                <Link to="/feuilleter/Coup de pied circulaire">Coup de pied circulaire</Link><br></br>
                <Link to="/feuilleter/Takedowns à deux jambes">Takedowns à deux jambes</Link><br></br>
                <Link to="/feuilleter/Jeu de jambes de mouvement de boxe">Exercices de jeu de jambes de mouvement de boxe</Link><br></br>
            </div>
        </div>
    )
}

export default BrowseFr;