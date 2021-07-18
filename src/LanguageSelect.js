import { Link } from "react-router-dom";
import React from "react";


const LangSel = () => {
    return(
        <div className ="langLinks">
        <h3><img src="https://img.icons8.com/color/35/000000/language.png"/>Select A Language/Sélectionnez une langue:</h3>
        <ol className = "ol">
            <li><Link to="/how To Use/">English</Link></li>
            <li><Link to="/comment utiliser/">Français</Link></li></ol>
        </div>)


}

export default LangSel