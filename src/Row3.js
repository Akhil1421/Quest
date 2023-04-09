import {React} from "react";
const RowThird = (props)=>{
    const timeOutside = props.modes.map((mode,index)=>{
        let colors = ["#e9d1cf", "#e6e8b2", "#c4daae", "#dad6f5", "#cde2e7"]
        return (
            <div className="timeOutside" key={`outside${index}`} style={{display: "flex", 
            justifyContent: "center", alignItems: "center", background : colors[index], color : "crimson",
            border : "rgb(0, 255, 213) solid"}}>
                    {mode.outsideVehicleTime}
            </div>
        )
    })

    return(
        <div className="Row3">
            <div className="heading">
               Total travel time spent outside vehicle
            </div>
            <div className="row3" style={{display: "grid",gap: "0.2rem",marginTop: "0.2rem", gridTemplate : "7rem/1fr 1fr 1fr 1fr 1fr"}}>
                {timeOutside}
            </div>
        </div>
    )
}

export default RowThird