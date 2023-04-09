import {React} from "react";
import "./row2.css"
const RowSixth = (props)=>{
    //We use the array of modes provided by props 
    
    //we form array crowdImg by using .map method on each  props.modes 
    
    //Each mode from props has crowd property which is used in mapping

    let crowdImg = props.modes.map((mode,index)=>{
        let colors = ["#e9d1cf", "#e6e8b2", "#c4daae", "#dad6f5", "#cde2e7"]
        let crowds = ["Many Seats Available", "Some Seats Available", "All Seats Occupied : standing space available",
                       "Fully Crowded or packed"]
        let images = ["less.png","standing.png","small.png","full.png"]
        let image="";
        //Assigning img to be displayed acc to mode.crowd
        if(mode.crowd===1){
            image = images[0]
        }
        else if(mode.crowd===2){
            image = images[2]
        }
        else if(mode.crowd===3){
            image = images[3]
        }
        else if(mode.crowd===4){
            image = images[3]
        }
        
        return (
            <div className="crowd" key={`Crowd${index}`} style={{display: "grid", 
                placeContent: "center", background : colors[index], color : "crimson", height: "7rem",
                border: "rgb(0, 255, 213) solid"}}> 
                <div className="logos">
                    {image!=="" && <img src={image} alt="photoS"/>}
                    {mode.crowd===4 && <img src={images[1]} alt="standing"></img>}
                </div>
                <div>
                    <center>    {crowds[mode.crowd-1]}   </center>
                </div>
            </div>
        )
    })
    return(
        <div className="Row2">
            <div className="heading">
                Extent of Crowding in the vehicle
            </div>
            <div className="row2">
                {crowdImg}
            </div>
        </div>
    )
}

export default RowSixth