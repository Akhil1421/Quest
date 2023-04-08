import React from "react";
import { questionTwoOptions } from "./questionOptions";
import { useContext } from "react";
import {ChoicesContext} from "./App"

const QuestionTwo = ()=>{
    const {setChoice2} = useContext(ChoicesContext)
    let questionTwoOptionsVal = questionTwoOptions.map((value, index)=>{
        return (
            <div className="rd-btn" key={`question2 ${index}`}>
                <input type = "radio" name = "transportDistance" id= {`q2 ${index+1}`} value= "bus"></input>
            <label htmlFor = {`q2 ${index+1}`}>{value}</label>
            </div>
        )
    })
    let handleChange = (e)=>{
        console.log(e.target.id)
        const choiceIndex = e.target.id.split(" ")[1]-1;
        setChoice2(questionTwoOptions[choiceIndex])
    }
    return(
        <div className="questions" onChange={handleChange}>
            <p>2.  What is the total distance between your home and workplace ?</p>
            <div className="btns">{questionTwoOptionsVal}</div>
        </div>
    )
}

export default QuestionTwo