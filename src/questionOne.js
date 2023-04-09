import React from "react";
import {questionOneOptions} from "./questionOptions";
import { useContext } from "react";
import { ChoicesContext } from "./App";
let QuestionOne = ()=>{
    const {setChoice1} = useContext(ChoicesContext) //using useContext hook we grab the setChoice1 function to change state

    //questionOneOptions contain different possible choices for the question 1 . We got this array by importing it
    
    //We use .map on each of those choice to form radio btn & label for that button

    let questionOneOptionsVal = questionOneOptions.map((value, index)=>{
        return (
            <div className="rd-btn" key={`question1 ${index}`}>
                <input type = "radio" name = "transportMean" id= {`q1 ${index+1}`} value= "bus"></input>
                <label htmlFor = {`q1 ${index+1}`}>{value}</label>
            </div>
        )
    })

    //Whenever a radio button is checked we set the choice2 to the corresp. button label/value in handleChange function
    
    let handleChange = (e)=>{
        let c = e.target.id.split(" ")[1]-1 //grabbing the index of checked radio btn from id of target
        console.log(e.target.id)
        setChoice1(questionOneOptions[c])   //setting choice1 = corr. indexed data in array questionOneOptions
    }
    return(
        <div className="questions" onChange= {handleChange}>
            <p>1.  What is your most frequently used means of travel from your home to work location ?</p>
            <div className="btns">{questionOneOptionsVal}</div>
        </div>
    )
}

export default QuestionOne