import {React} from "react";
const RowFourth = (props)=>{
    const delay = props.modes.map((mode,index)=>{
        let colors = ["brown", "#e32636", "#e52b50", "#ff033e", "#cd9575"]
        return (
            <div className="delay" key={`delay${index}`} style={{display: "flex", 
            justifyContent: "center", alignItems: "center", background : colors[index], color : "whitesmoke"}}>
                    {mode.delayDueToOutside}
            </div>
        )
    })

    return(
        <div className="Row4">
            <div style={{display: "grid", placeContent: "center",color : "goldenrod", background :"brown",
                         border : "rgb(60, 255, 0) solid", marginTop: "0.2rem"}}>
               Possible delay due to traffic congestion or other uncertainities
            </div>
            <div className="row4" style={{display: "grid", gridTemplate : "7rem/1fr 1fr 1fr 1fr 1fr"}}>
                {delay}
            </div>
        </div>
    )
}

export default RowFourth