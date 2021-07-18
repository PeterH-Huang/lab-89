import ReactPlayer from "react-player";
import {addFav} from"./Saved";
import toast, { Toaster } from 'react-hot-toast';


const notice = () =>{
if(addFav("/saved/Roundhouse Kick") === false){
    toast.error('Error: You have already saved this video');
}
else{
    toast.success("Success: Video Saved")
}
}

const Vid2 = () => {
    return(
        <div className="Vid">

            <h2>Roundhouse Kick</h2>

            <div className = "player">

            <ReactPlayer url="https://www.youtube.com/watch?v=R0WcFxtKFj8" />
            
            
            </div>

            <h3>Steps</h3>

            <ol className = "ol">
                <li> Get into fighting position. </li>
                <li> Raise your arms to be ready to block at any moment. </li>
                <li> Raise the knee of your back leg to the front of your body, "chambering" your kick. </li>
                <li> While pivoting on your other foot, snap your kicking leg forward.</li>
                <li> Bring your kicking leg back and return to fighting position.</li>
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

export default Vid2;