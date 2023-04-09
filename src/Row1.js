import React from "react";
import "./row1.css"

const RowOne = (props)=>{
    let colors = ["#e9d1cf", "#e6e8b2", "#c4daae", "#dad6f5", "#cde2e7"]
    let modesLayout = props.modes.map((mode,index)=>{
        return(
            <div className="Mode" style={{background : colors[index], color : "crimson"}} key={`mode${index}`}>
                <label>{mode.name}</label>
                <input type = "radio"></input>
            </div>
        )
    })
    return(
        <div className="row">
            {modesLayout}
        </div>
    )
}
export default RowOne