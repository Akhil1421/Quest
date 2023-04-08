import {React} from "react";
import "./row2.css"
const RowTwo = (props)=>{
    let imgInterface = props.modes.map((mode,index)=>{
        let check = (mode.transfers===0||mode.transfers===undefined) ? false : true 
        return (
            <div className="full" key={`img${index}`}>
                    {check && <p>{mode.transfers} transfers</p>}
                <div className="logos">
                    <img src = {mode.images[0]} alt={mode.name}/>
                    {mode.images.length > 1 && <img src={mode.images[1]} alt={mode.name}/>}
                    {check && <img src="right-arrow.png"></img>}
                    {check && <img src={mode.images[0]} alt={mode.name}/>}
                </div>
                    <p>{mode.timeInside}</p>
            </div>
        )
    })
    return(
        <div>
                <center><p>Total travel time spent while inside the vehicle(s)</p></center>
            <div className="row2">
                {imgInterface}
            </div>
        </div>
    )
}

export default RowTwo