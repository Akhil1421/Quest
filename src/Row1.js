import React from "react";
import "./row1.css"

const RowOne = (props)=>{
    //colors array is here to give diff color to each of modes column
    let colors = ["#e9d1cf", "#e6e8b2", "#c4daae", "#dad6f5", "#cde2e7"]

    //We use the array of different modes provided through props to this component to display Name of mode  & a radio btn

    //Each mode from props has name property which is used here
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
            {modesLayout} {/*Displaying each modes name & radiobtn for each in a row*/}
        </div>
    )
}
export default RowOne