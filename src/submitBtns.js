import React from "react"
import { useContext } from "react"
import { ChoicesContext } from "./App"

const SubmitBtn = ()=>{
    const {setSubmit} = useContext(ChoicesContext)
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