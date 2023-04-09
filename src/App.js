import {React,createContext, useState} from "react";
import Home from "./homePage"
import Mode from "./modePage"

const ChoicesContext = createContext(null)   //context created to provide choice1 for question1 & choice2 for question 2 
function App() {
  const [choice1, setChoice1] = useState("Bus")  //choice of question1 set as a state 
  const [choice2, setChoice2] = useState("< 5km") //choice of question2 set as a state
  const [submit, setSubmit] = useState(true)      //boolean telling us whether user has submitted form on homepage 
  return (
    <ChoicesContext.Provider value={{choice1,setChoice1,  choice2,setChoice2,setSubmit}}> {/*providing choice & choice changing functions to children*/}
      <div className="App">
          {submit && <Home/>} {/*if user has not submitted the choices on page1 , homePage will render*/}  
          {!submit && <Mode/>}{/*if user has submitted the choices on page1 , ModePage will render*/}  
      </div>
    </ChoicesContext.Provider>
  );
}

export  {App,ChoicesContext};
