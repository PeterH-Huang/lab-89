import ReactPlayer from "react-player";
import {addFav} from"./Saved";
import toast, { Toaster } from 'react-hot-toast';


const notice = () =>{
if(addFav("/saved/Boxing Movement Footwork") === false){
    toast.error('Error: You have already saved this video');
}
else{
    toast.success("Success: Video Saved")
}
}

const Vid4 = () => {
    return(
        <div className="Vid">

            <h2>Boxing Movement Footwork Drills</h2>

            <div className = "player">

            <ReactPlayer url="https://www.youtube.com/watch?v=0wYR63ZsbI4" />
            
            
            </div>

            <h3>Steps</h3>

            <ol className = "ol">
                <li> Puppet String Drill </li>
                <li> Ali Backpedal Drill </li>
                <li> Leaping Drill </li>
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

export default Vid4;