import { Link } from "react-router-dom";

const Browse = () => {
    return(
        <div className="browse">
            <h2>Browse Through These Lessons and Drills:</h2>
            <div className ="vidLinks">
                <Link to="/browse/Mount Escape">Mount Escape</Link><br></br>
                <Link to="/browse/Roundhouse Kick">Roundhouse Kick</Link><br></br>
                <Link to="/browse/Double Leg Takedown">Double Leg Takedown</Link><br></br>
                <Link to="/browse/Boxing Movement Footwork">Boxing Movement Footwork Drills</Link><br></br>
            </div>
        </div>
    )
}

export default Browse;