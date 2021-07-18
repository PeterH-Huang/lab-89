import React from "react";
import How from './How';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Browse from './Browse';
import Saved from './Saved';
import Breadcrumbs from './Breadcrumbs';
import Nav from './Nav';
import Vid1 from './Vid1';
import Vid2 from "./Vid2";
import Home from "./Home";
import LangSel from "./LanguageSelect";
import NavFr from "./Navfr";
import HowFr from "./Howfr";
import BrowseFr from "./Browsefr"
import SavedFr from "./Savedfr";
import Vid3 from "./Vid3";
import Vid4 from "./Vid4";
import Vid1Fr from "./Vid1fr";
import Vid2Fr from "./Vid2fr";
import Vid3Fr from "./Vid3fr";
import Vid4Fr from "./Vid4fr";

function App() {
  return (
    
    <Router>
    <div className="App">
      
  
      <div className="content">

        <Switch>
          <Route exact path="/">
          <Nav />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
          <Home />
          </Route>

          <Route exact path="/Language Select">
          <Nav />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
          <LangSel />
          </Route>

          <Route exact path="/Sélection de la langue">
          <NavFr />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
          <LangSel />
          </Route>

          <Route exact path="/how To Use">
          <Nav />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
          <How />
          </Route>

          <Route exact path="/comment utiliser">
          <NavFr />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
          <HowFr />
          </Route>

          <Route exact path="/browse">
          <Nav />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Browse />
          </Route>

          <Route exact path="/feuilleter">
          <NavFr />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <BrowseFr />
          </Route>

          <Route exact path="/saved">
          <Nav />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Saved />
          </Route>

          <Route exact path="/enregistrées">
          <NavFr />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <SavedFr />
          </Route>

          <Route exact path="/browse/Mount Escape">
          <Nav />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Vid1 />
          </Route>

          <Route exact path="/saved/Mount Escape">
          <Nav />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Vid1 />
          </Route>

          <Route exact path="/browse/Roundhouse Kick">
          <Nav />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Vid2 />
          </Route>

          <Route exact path="/saved/Roundhouse Kick">
          <Nav />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Vid2 />
          </Route>

          <Route exact path="/browse/Double Leg Takedown">
          <Nav />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Vid3 />
          </Route>

          <Route exact path="/saved/Double Leg Takedown">
          <Nav />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Vid3 />
          </Route>

          <Route exact path="/browse/Boxing Movement Footwork">
          <Nav />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Vid4 />
          </Route>

          <Route exact path="/saved/Boxing Movement Footwork">
          <Nav />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Vid4 />
          </Route>

          <Route exact path="/feuilleter/Mont Évasion">
          <NavFr />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Vid1Fr/>
          </Route>

          <Route exact path="/enregistrées/Mont Évasion">
          <NavFr />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Vid1Fr />
          </Route>

          <Route exact path="/feuilleter/Coup de pied circulaire">
          <NavFr />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Vid2Fr />
          </Route>

          <Route exact path="/enregistrées/Coup de pied circulaire">
          <NavFr />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Vid2Fr />
          </Route>

          <Route exact path="/feuilleter/Takedowns à deux jambes">
          <NavFr />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Vid3Fr />
          </Route>

          <Route exact path="/enregistrées/Takedowns à deux jambes">
          <NavFr />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Vid3Fr />
          </Route>

          <Route exact path="/feuilleter/Jeu de jambes de mouvement de boxe">
          <NavFr />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Vid4Fr />
          </Route>

          <Route exact path="/enregistrées/Jeu de jambes de mouvement de boxe">
          <NavFr />
          <div className ="bread"><Breadcrumbs></Breadcrumbs></div>
              <Vid4Fr />
          </Route>
        


        </Switch>

      </div>

    </div>
    </Router>
  );  
}

export default App;
