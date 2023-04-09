import {React} from "react";
const RowSeventh = (props)=>{
    ///We use the array of modes provided by props 
    
    //we form array serviceImg by using .map method on each  props.modes 
    
    //Each mode from props has service property which is used in mapping

    let serviceImg = props.modes.map((mode,index)=>{
        let colors = ["#e9d1cf", "#e6e8b2", "#c4daae", "#dad6f5", "#cde2e7"]
        let service = mode.service
        let img = ""
        if(service===1){
            img = "ordinary"
        }
        if(service===2){
            img = "Express Non-AC"
        }
        if(service===3){
            img = "Express AC"
        }
        //img contains service of that mode
        let allServices = ["Ordinary", "Express Non-AC", "Express AC"]
        return (
            <div className="service" key={`Serv${index}`} style={{display: "grid", 
            placeContent: "center", background : colors[index],color : "crimson", height: "7rem",
            border: "rgb(0, 255, 213) solid"}}>

                <div className="logos">
                    {img!=="" && <img src="sitting.png" alt="photoS" style={{height: "4rem", width: "4rem"}}/>}
                    {img==="Express AC" && <img src="freezer.png" alt="freezer"/>} 
                </div>
                
                <div>
                    {img!=="" && allServices[mode.service-1]}
                </div>
            </div>
        )
    })
    return(
        <div className="Row2">
            <div className="heading">
                Service Type
            </div>
            <div className="row2">
                {serviceImg}
            </div>
        </div>
    )
}

export default RowSeventh