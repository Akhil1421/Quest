import React from "react";
import { useContext } from "react";
import { ChoicesContext } from "./App";
import { questionTwoOptions } from "./questionOptions";
import { modeLessThan5km,  modeLessThan10km ,modeLessThan15km,
        modeLessThan20km , modeLessThan25km, modeMoreThan25km} from "./modesData";
import RowOne from "./Row1";
import RowTwo from "./Row2";

const Mode = ()=>{
    const {choice1, choice2} = useContext(ChoicesContext)
    let data = [modeLessThan5km,  modeLessThan10km ,modeLessThan15km,
        modeLessThan20km , modeLessThan25km, modeMoreThan25km]
    
    let chosenFile = data[0] ;
    
    let modes = []
    for(let i=0;i<questionTwoOptions.length;i++){
        if(choice2===questionTwoOptions[i]){
            chosenFile = data[i];
            console.log(i)
            break;
        }
    }
    let i=1;
    while(modes.length<5){
        let name;
        let images = []
        if(modes.length===0){
            name = "Bus Route 1"
            images.push("bus.png")
        }
        else if(modes.length===1){
            name = "Bus Route 2"
            images.push("bus.png")
            i=2
        }
        if(modes.length===2){
            if(choice2==="< 5km"){
                i=3;
                name = "Walk/Bicycle"
                images.push("relaxing-walk.png")
                images.push("bicycle.png")
            }
            else{
                i=4;
                name = "Metro"
                images.push("train.png")
            }
        }
        else if(modes.length===3){
            if(choice1==="Own Two-Wheeler"){
                i=9;
                name = "Own Two-Wheeler"
                images.push("motorcycle.png")
            }
            else if(choice1==="Own Car"){
                i=8;
                name = "Own Car"
                images.push("car.png")
            }
            else{
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
            if(choice1==="Auto"){
                i=7;
                name = "Auto"
                images.push("rickshaw.png")
            }
            else if(choice1==="Ride Hailing Car"){
                i=5;
                name = "Ride Hailing Car"
                images.push("taxi.png")
            }
            else{
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
        modes.push(fullData)
    }
    
    return(
            <div className="mode">
                <RowOne modes = {modes}/>
                <RowTwo modes = {modes}/>
            </div>
    )
}

export default Mode