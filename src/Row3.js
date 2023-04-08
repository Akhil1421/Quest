import {React} from "react";
const RowThird = (props)=>{
    const timeOutside = props.modes.map((mode,index)=>{
        let colors = ["brown", "#e32636", "#e52b50", "#ff033e", "#cd9575"]
        return (
            <div className="timeOutside" key={`outside${index}`} style={{display: "flex", 
            justifyContent: "center", alignItems: "center", background : colors[index], color : "whitesmoke"}}>
                    {mode.outsideVehicleTime}
            </div>
        )
    })

    return(
        <div className="Row3">
            <div style={{display: "grid", placeContent: "center",color : "goldenrod", background :"brown",
                         border : "rgb(60, 255, 0) solid", marginTop: "0.2rem"}}>
               Total travel time spent outside vehicle
            </div>
            <div className="row3" style={{display: "grid", gridTemplate : "7rem/1fr 1fr 1fr 1fr 1fr"}}>
                {timeOutside}
            </div>
        </div>
    )
}

export default RowThird