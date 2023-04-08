import {React} from "react";
import "./row2.css"
const RowSixth = (props)=>{
    let crowdImg = props.modes.map((mode,index)=>{
        let colors = ["brown", "#e32636", "#e52b50", "#ff033e", "#cd9575"]
        let crowds = ["Many Seats Available", "Some Seats Available", "All Seats Occupied : standing space available",
                       "Fully Crowded or packed"]
        let images = ["less.png","standing.png","small.png","full.png"]
        let image="";
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
            <div className="crowd" key={`Crowd${index}`} style={{display: "flex", 
            justifyContent: "center", alignItems: "center", background : colors[index], color : "whitesmoke", height: "7rem"}}>
                <div className="images" style={{display: "flex"}}>
                {image!=="" && <img src={image} alt="photoS"/>}
                {mode.crowd===4 && <img src={images[1]} alt="standing"></img>}
                </div>
                <div>{crowds[mode.crowd-1]}</div>
            </div>
        )
    })
    return(
        <div className="Row2">
            <div style={{display: "grid", placeContent: "center",color : "goldenrod", background :"brown",
                         border : "rgb(60, 255, 0) solid", marginTop: "0.2rem"}}>
                Extent of Crowding in the vehicle
            </div>
            <div className="row2">
                {crowdImg}
            </div>
        </div>
    )
}

export default RowSixth