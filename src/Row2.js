import {React} from "react";
import "./row2.css"
const RowTwo = (props)=>{
    let imgInterface = props.modes.map((mode,index)=>{
        let check = (mode.transfers===0||mode.transfers===undefined) ? false : true 
        let colors = ["#e9d1cf", "#e6e8b2", "#c4daae", "#dad6f5", "#cde2e7"]
        return (
            <div className="full" key={`img${index}`} style={{backgroundColor : colors[index], color : "crimson"}}>
                    
                    {check && <div style={{display : "flex", justifyContent: "center", alignItems: "center"}}>
                        <p>{mode.transfers} transfers</p></div>}
                
                <div className="logos">
                    <img src = {mode.images[0]} alt={mode.name}/>
                    {mode.images.length > 1 && <img src={mode.images[1]} alt={mode.name}/>}
                    {check && <img src="right-arrow.png" alt="sym"></img>}
                    {check && <img src={mode.images[0]} alt={mode.name}/>}
                </div>
                    <center><p style={{color : "crimson"}}>{mode.timeInside ? mode.timeInside: 0}</p></center>
            </div>
        )
    })
    return(
        <div className="Row2">
            <div className="heading">
               Total travel time spent while inside the vehicle(s)
            </div>
            <div className="row2">
                {imgInterface}
            </div>
        </div>
    )
}

export default RowTwo