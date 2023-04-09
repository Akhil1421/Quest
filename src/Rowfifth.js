import {React} from "react";
const RowFifth = (props)=>{
    //We use the array of different modes provided through props to this component to display cost
    //Each mode from props has Cost property which is used here
    const costs= props.modes.map((mode,index)=>{
        let colors = ["#e9d1cf", "#e6e8b2", "#c4daae", "#dad6f5", "#cde2e7"]
        return (
            <div className="delay" key={`Cost${index}`} style={{display: "flex", 
            justifyContent: "center", alignItems: "center", background : colors[index], color : "crimson",
            border: "rgb(0, 255, 213) solid"}}>
                    {mode.cost}
            </div>
        )
    })

    return(
        <div className="Row2">
            <div className="heading">
               Total One way cost of travel
            </div>
            <div className="row5" style={{display: "grid", marginTop: "0.2rem", gridTemplate : "7rem/1fr 1fr 1fr 1fr 1fr", gap: "0.2rem"}}>
                {costs}
            </div>
        </div>
    )
}

export default RowFifth