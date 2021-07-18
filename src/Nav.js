import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <h1>MMA eTrainer</h1>
      <div className="links">

      <Link to="/Language Select"><img src="https://img.icons8.com/color/35/000000/language.png"/>Language Select</Link>
      <Link to="/how To Use"><img src="https://img.icons8.com/color/35/000000/help--v1.png"/>How To Use</Link>
      <Link to="/browse"><img src="https://img.icons8.com/color/35/000000/watch-tv.png"/>Browse Videos</Link>
      <Link to="/saved"><img src="https://img.icons8.com/color/35/000000/save--v1.png"/>  Saved Videos</Link>
      </div>
    </nav>
  );
}
 
export default Nav;

