import {React} from "react";
const RowFourth = (props)=>{
    //We use the array of modes provided by props to display delay due to traffic 
    
    //Each mode from props has delayDueToOutside property which is used here
    
    const delay = props.modes.map((mode,index)=>{        
        let colors = ["#e9d1cf", "#e6e8b2", "#c4daae", "#dad6f5", "#cde2e7"]
        return (
            <div className="insideFull" key={`delay${index}`} style={{display: "flex", 
            justifyContent: "center", alignItems: "center", background : colors[index], 
            color : "crimson", border : "rgb(0, 255, 213) solid"}}>
                    {mode.delayDueToOutside}
            </div>
        )
    })

    return(
        <div className="Row4">
            <div className="heading">
               Possible delay due to traffic congestion or other uncertainities
            </div>
            <div className="row2">
                {delay}
            </div>
        </div>
    )
}

export default RowFourth