import React from "react";
import QuestionOne from "./questionOne";
import QuestionTwo from "./question2";
import SubmitBtn from "./submitBtns";
import "./homePage.css";
const Home = ()=>{
    return(
        <div className="home"> {/*Home page is divided primarily into 3 components Q1, Q2 & SubmitBtn*/}
            <center><h1>User Survey</h1></center>
            <QuestionOne/>    {/*Imported component from questionOne.js*/}
            <QuestionTwo/>    {/*Imported component from question2.js*/}
            <SubmitBtn/>      {/*Imported component from submitBtns.js*/}
        </div>
    )
}

export default Home