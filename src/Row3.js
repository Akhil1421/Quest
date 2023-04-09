import {React} from "react";
const RowThird = (props)=>{
    //We use the array of modes provided by props to display time spent outside the vehicle 
    
    //timeOutside is array formed by .map on props.modes to return elements displaying timeOutside the vehicle

    //Each mode from props has outsideVehicleTime property which is used here
    
    const timeOutside = props.modes.map((mode,index)=>{
        let colors = ["#e9d1cf", "#e6e8b2", "#c4daae", "#dad6f5", "#cde2e7"]
        return (
            <div className="insideFull" key={`outside${index}`} style={{display: "flex", 
            justifyContent: "center", alignItems: "center", background : colors[index], color : "crimson",
            border : "rgb(0, 255, 213) solid"}}>
                    {mode.outsideVehicleTime}
            </div>
        )
    })

    return(
        <div className="Row3">
            <div className="heading">
               Total travel time spent outside vehicle
            </div>
            <div className="row2">
                {timeOutside} {/*Displaying each modes time spent outside*/}
            </div>
        </div>
    )
}

export default RowThird