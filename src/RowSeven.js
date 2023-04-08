import {React} from "react";
import "./row2.css"
const RowSeventh = (props)=>{
    let serviceImg = props.modes.map((mode,index)=>{
        let colors = ["brown", "#e32636", "#e52b50", "#ff033e", "#cd9575"]
        let service = mode.service
        let img = ""
        if(service===1){
            img = "ordinary.png"
        }
        if(service===2){
            img = "Express Non-AC.png"
        }
        if(service===3){
            img = "Express AC.png"
        }
        let allServices = ["Ordinary", "Express Non-AC", "Express AC"]
        return (
            <div className="service" key={`Serv${index}`} style={{display: "flex", 
            justifyContent: "center", alignItems: "center", background : colors[index], color : "whitesmoke", height: "7rem"}}>
                <div className="images" style={{display: "flex"}}>
                {img!=="" && <img src={img} alt="photoS"/>}
                </div>
                <div>{img!=="" && allServices[mode.service-1]}</div>
            </div>
        )
    })
    return(
        <div className="Row2">
            <div style={{display: "grid", placeContent: "center",color : "goldenrod", background :"brown",
                         border : "rgb(60, 255, 0) solid", marginTop: "0.2rem"}}>
                Service Type
            </div>
            <div className="row2">
                {serviceImg}
            </div>
        </div>
    )
}

export default RowSeventh