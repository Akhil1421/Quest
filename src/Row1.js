import React from "react";
import "./row1.css"

const RowOne = (props)=>{
    let colors = ["maroon", "magenta", "green", "red", "blue"]
    let modesLayout = props.modes.map((mode,index)=>{
        return(
            <div className="Mode" style={{background : colors[index], color: "whitesmoke"}} key={`mode${index}`}>
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