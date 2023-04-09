import React from "react";
import { questionTwoOptions } from "./questionOptions";
import { useContext } from "react";
import {ChoicesContext} from "./App"

const QuestionTwo = ()=>{
    const {setChoice2} = useContext(ChoicesContext) //using useContext hook we grab the setChoice2 function to change state
    
    //questionTwoOptions contain different possible choices for the question 2 . We got array by importing it
    
    //We use .map on each of those choice to form radio btn & label for that button
    
    let questionTwoOptionsVal = questionTwoOptions.map((value, index)=>{
        return (
            <div className="rd-btn" key={`question2 ${index}`}>
                <input type = "radio" name = "transportDistance" id= {`q2 ${index+1}`} value= "bus"></input>
            <label htmlFor = {`q2 ${index+1}`}>{value}</label>
            </div>
        )
    })
    
    //Whenever a radio button is checked we set the choice2 to the corresp. button label/value in handleChange function
    
    let handleChange = (e)=>{
        console.log(e.target.id)
        const choiceIndex = e.target.id.split(" ")[1]-1;//grabbing the index of checked radio btn from id of target
        setChoice2(questionTwoOptions[choiceIndex]) //setting choice2 = corr. indexed data in array questionTwoOptions
    }
    
    return(
        <div className="questions" onChange={handleChange}>
            <p>2.  What is the total distance between your home and workplace ?</p>
            <div className="btns">{questionTwoOptionsVal}</div>
        </div>
    )
}

export default QuestionTwo