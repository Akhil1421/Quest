import React from "react";
import { useContext } from "react";
import { ChoicesContext } from "./App";
import { questionTwoOptions } from "./questionOptions";
import { modeLessThan5km,  modeLessThan10km ,modeLessThan15km,
        modeLessThan20km , modeLessThan25km, modeMoreThan25km} from "./modesData";
import RowOne from "./Row1";
import RowTwo from "./Row2";
import RowThird from "./Row3";
import RowFourth from "./Row4";
import RowFifth from "./Rowfifth";
import RowSixth from "./RowSixth";
import RowSeventh from "./RowSeven";

const Mode = ()=>{
    const {choice1, choice2} = useContext(ChoicesContext) //using useContext hook we get values of Choices chosen by user in homePage
    let data = [modeLessThan5km,  modeLessThan10km ,modeLessThan15km,
        modeLessThan20km , modeLessThan25km, modeMoreThan25km] //data from provided files imported
    
    let chosenFile = data[0] ;//initially assumed that user chose <5km distance & bus in homePage so data of 0th file used
    
    let modes = []
    for(let i=0;i<questionTwoOptions.length;i++){
        //iterate over All available choices for distance & chose file according to user provided distance stored in choice2
        if(choice2===questionTwoOptions[i]){
            chosenFile = data[i];
            console.log(i)
            break;
        }
    }
    let i=1;
    //finding out the 5 modes to be displayed
    //initial modes.length = 0 so we push required mode into it 
    while(modes.length<5){
        let name;
        let images = []
        if(modes.length===0){
            //mode.len = 0 means we will fill first mode into it which is of Bus Route 1
            name = "Bus Route 1"
            images.push("bus.png")
        }
        else if(modes.length===1){
            //mode.len = 1 means we will fill second mode into it which is of Bus Route 2
            name = "Bus Route 2"
            images.push("bus.png")
            i=2
        }
        if(modes.length===2){
            //Third mode will be filled here according to choice of distance made by user(choice2)
            if(choice2==="< 5km"){
            //choice2 = <5km we chose walk/bicycle & i=3
                i=3;
                name = "Walk/Bicycle"
                images.push("relaxing-walk.png")
                images.push("bicycle.png")
            }
            else{
            //in any other case we choose metro &  i=4
                i=4;
                name = "Metro"
                images.push("train.png")
            }
        }
        else if(modes.length===3){
            //mode 4 related info is filled here
            if(choice1==="Own Two-Wheeler"){
            //if user had chosen Own Two-Wheeler as choice on first page we choose i=9 & Own Two-Wheeler
                i=9;
                name = "Own Two-Wheeler"
                images.push("motorcycle.png")
            }
            else if(choice1==="Own Car"){
            //if user had chosen Own Car as choice on first page we choose i=8 & Own Car
                i=8;
                name = "Own Car"
                images.push("car.png")
            }
            else{
            //In any other choice we choose randomly b/w both    
                let k = Math.floor(Math.random()*10)
                if(k<=5){
                    i=8;
                    images.push("car.png")
                    name = "Own Car"
                }
                else{
                    i=9;
                    images.push("motorcycle.png")
                    name = "Own Two-Wheeler"
                }
            }
        }
        else if(modes.length===4){
            //5th mode will be filled here
            if(choice1==="Auto"){
            //if user had chosen Auto as choice on first page we choose i=7 & Auto
                i=7;
                name = "Auto"
                images.push("rickshaw.png")
            }
            else if(choice1==="Ride Hailing Car"){
            //if user had chosen Ride hailing as choice on first page we choose i=5 & Ride hailing Car
                i=5;
                name = "Ride Hailing Car"
                images.push("taxi.png")
            }
            else{
            //in any other case we choose randomly b/w two    
                let k = Math.floor(Math.random()*10)
                if(k<=5){
                    i=7;
                    images.push("rickshaw.png")
                    name = "Auto"
                }
                else{
                    images.push("taxi.png")
                    i=5;
                    name = "Ride Hailing Car"
                }
            }
        }
        //chosenFile has Data key which is an array of size 1 with entry being an object
        //we access the keys of that object according to value of i for that iteration
        let fullData = {
            name,
            timeInside :  chosenFile.Data[0][`mode_${i}.ivtt`],
            outsideVehicleTime : chosenFile.Data[0][`mode_${i}.walktime`] + chosenFile.Data[0][`mode_${i}.waittime`],
            delayDueToOutside : chosenFile.Data[0][`mode_${i}.tvariab`],
            cost : chosenFile.Data[0][`mode_${i}.tcost`],
            crowd : chosenFile.Data[0][`mode_${i}.crowd`],
            service : chosenFile.Data[0][`mode_${i}.serv`],
            transfers : chosenFile.Data[0][`mode_${i}.trans`],
            images : images
        }
        //fullData obj contains all info regarding the particualr mode & is pushed in array of modes 
        modes.push(fullData)
    }
    
    return(
            <div className="mode" style={{fontFamily : "Calibri"}}>
            {/*We pass on the array of modes containing info about each mode as props to each row Component*/}    
                <RowOne modes = {modes}/>       {/*First Row imported from Row1.js*/}
                <RowTwo modes = {modes}/>       {/*Second Row imported from Row2.js*/}
                <RowThird modes = {modes}/>     {/*Third Row imported from Row3.js*/}
                <RowFourth modes = {modes}/>    {/*4th Row imported from Row4.js*/}
                <RowFifth modes = {modes}/>     {/*5th Row imported from Rowfifth.js*/}
                <RowSixth modes = {modes}/>     {/*6th Row imported from RowSixth.js*/}
                <RowSeventh modes = {modes}/>   {/*7th Row imported from RowSeventh.js*/}
            </div>
    )
}

export default Mode