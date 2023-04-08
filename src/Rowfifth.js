import {React} from "react";
const RowFifth = (props)=>{
    const costs= props.modes.map((mode,index)=>{
        let colors = ["brown", "#e32636", "#e52b50", "#ff033e", "#cd9575"]
        return (
            <div className="delay" key={`Cost${index}`} style={{display: "flex", 
            justifyContent: "center", alignItems: "center", background : colors[index], color : "whitesmoke"}}>
                    {mode.cost}
            </div>
        )
    })

    return(
        <div className="Row5">
            <div style={{display: "grid", placeContent: "center",color : "goldenrod", background :"brown",
                         border : "rgb(60, 255, 0) solid", marginTop: "0.2rem"}}>
               Total One way cost of travel
            </div>
            <div className="row5" style={{display: "grid", gridTemplate : "7rem/1fr 1fr 1fr 1fr 1fr"}}>
                {costs}
            </div>
        </div>
    )
}

export default RowFifth