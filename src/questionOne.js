import React from "react";
import {questionOneOptions} from "./questionOptions";
import { useContext } from "react";
import { ChoicesContext } from "./App";
let QuestionOne = ()=>{
    const {setChoice1} = useContext(ChoicesContext)
    let questionOneOptionsVal = questionOneOptions.map((value, index)=>{
        return (
            <div className="rd-btn" key={`question1 ${index}`}>
                <input type = "radio" name = "transportMean" id= {`q1 ${index+1}`} value= "bus"></input>
                <label htmlFor = {`q1 ${index+1}`}>{value}</label>
            </div>
        )
    })
    let handleChange = (e)=>{
        let c = e.target.id.split(" ")[1]-1
        console.log(e.target.id)
        setChoice1(questionOneOptions[c])
    }
    return(
        <div className="questions" onChange= {handleChange}>
            <p>1.  What is your most frequently used means of travel from your home to work location ?</p>
            <div className="btns">{questionOneOptionsVal}</div>
        </div>
    )
}

export default QuestionOne