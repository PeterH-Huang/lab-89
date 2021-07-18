import ReactPlayer from "react-player";
import {addFav} from"./Saved";
import toast, { Toaster } from 'react-hot-toast';


const notice = () =>{
if(addFav("/saved/Mount Escape") === false){
    toast.error('Error: You have already saved this video');
}
else{
    toast.success("Success: Video Saved")
}
}

const Vid1 = () => {
    return(
        <div className="Vid">

            <h2>Mount Escape</h2>

            <div className = "player">

            <ReactPlayer url="https://www.youtube.com/watch?v=lcIqosv86BY" />
            
            
            </div>

            <h3>Steps</h3>

            <ol className = "ol">
                <li> Use the hand on the side where you want to sweep to grab your opponent’s triceps. </li>
                <li> Grab the back of the opponent's neck with the other hand and push his head as close to you as possible. </li>
                <li> On the same side as the trapped arm, place your foot outside and against your opponent’s foot, trapping his leg in place.</li>
                <li> Bridge your hips upwards and roll in the direction of your opponent’s trapped arm and leg.</li>
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

export default Vid1;