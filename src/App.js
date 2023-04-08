import {React,createContext, useState} from "react";
import Home from "./homePage"
import Mode from "./modePage"

const ChoicesContext = createContext(null)
function App() {
  const [choice1, setChoice1] = useState("Bus")
  const [choice2, setChoice2] = useState("< 5km")
  const [submit, setSubmit] = useState(true)
  return (
    <ChoicesContext.Provider value={{choice1,setChoice1,  choice2,setChoice2,setSubmit}}>
      <div className="App">
          {submit && <Home/>}
          {!submit && <Mode/>}
      </div>
    </ChoicesContext.Provider>
  );
}

export  {App,ChoicesContext};
