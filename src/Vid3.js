import ReactPlayer from "react-player";
import {addFav} from"./Saved";
import toast, { Toaster } from 'react-hot-toast';


const notice = () =>{
if(addFav("/saved/Double Leg Takedown") === false){
    toast.error('Error: You have already saved this video');
}
else{
    toast.success("Success: Video Saved")
}
}

const Vid3 = () => {
    return(
        <div className="Vid">

            <h2>Double Leg Takedowns</h2>

            <div className = "player">

            <ReactPlayer url="https://www.youtube.com/watch?v=0wYR63ZsbI4" />
            
            
            </div>

            <h3>Steps</h3>

            <ol className = "ol">
                <li> Get close to your opponent. You should be at a distance where you can touch your opponent's shoulder. </li>
                <li> Place your lead foot between your opponent's legs. </li>
                <li> Grab your opponent's leg, with one hand on each leg. </li>
                <li> Pull your opponent's legs towards you and at the same time push your shoulders into your opponent's abdomen.</li>
                <li> Bring your back leg forward and force your opponent to the ground.</li>
            </ol>     
            <Toaster containerStyle={{    position: 'relative',  }} />

<div className="btn">
<h4>You can save this video and watch it anytime in the saved section</h4>
<button onClick={notice}>
  Save Video
</button> </div>

        </div>

        


    )
}

export default Vid3;