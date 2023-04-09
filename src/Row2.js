import {React} from "react";
import "./row2.css"
const RowTwo = (props)=>{
    //We use the array of modes provided by props to form the corr. image of mode , display transfers if any , display time inside that mode vehicle
    
    //we form array imgInterface by using .map method on each  props.modes
    
    //Each mode from props has transfers, images(array), name, timeInside property which are used while mapping
    
    let imgInterface = props.modes.map((mode,index)=>{
        let check = (mode.transfers===0||mode.transfers===undefined) ? false : true 
        let colors = ["#e9d1cf", "#e6e8b2", "#c4daae", "#dad6f5", "#cde2e7"]
        return (
            <div className="full" key={`img${index}`} style={{backgroundColor : colors[index], color : "crimson"}}>
                    
                    {check && <div style={{display : "flex", justifyContent: "center", alignItems: "center"}}>
                        <p>{mode.transfers} transfers</p></div>} {/*display transfer only if there are any*/}
                
                <div className="logos">
                    <img src = {mode.images[0]} alt={mode.name}/> {/*display image corresponding to that mode*/}
                    {mode.images.length > 1 && <img src={mode.images[1]} alt={mode.name}/>}
                    {check && <img src="right-arrow.png" alt="sym"></img>}
                    {check && <img src={mode.images[0]} alt={mode.name}/>}
                </div>
                    {/*Display the time inside that particular mode*/}
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
                {imgInterface} {/*Displaying each modes corr. picture , transfers & time spent inside*/}
            </div>
        </div>
    )
}

export default RowTwo