import React from "react";
import "./row1.css"

const RowOne = (props)=>{
    let colors = ["brown", "#e32636", "#e52b50", "#ff033e", "#cd9575"]
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