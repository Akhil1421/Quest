import React from "react";
import QuestionOne from "./questionOne";
import QuestionTwo from "./question2";
import SubmitBtn from "./submitBtns";
import "./homePage.css";
const Home = ()=>{
    return(
        <div className="home">
            <center><h1>User Survey</h1></center>
            <QuestionOne/>    
            <QuestionTwo/>
            <SubmitBtn/>
        </div>
    )
}

export default Home