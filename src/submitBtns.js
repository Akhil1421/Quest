import React from "react"
import { useContext } from "react"
import { ChoicesContext } from "./App"

const SubmitBtn = ()=>{
    const {setSubmit} = useContext(ChoicesContext) //using useContextHook we grab setSubmit function 
    
    //whenver the submit btn is clicked boolean submit becomes false meaning home page will stop to render & mode page will start rendering
    //Also title of doc is also changed on click
    const handleSubmit = ()=>{
        setSubmit(false)
        document.title = "Mode Page"
    }
    return(
        <div className="submitBtn">
            <center><button onClick={handleSubmit}>Submit</button></center>
        </div>
    )
}
export default SubmitBtn