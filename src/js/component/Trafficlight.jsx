import React from "react";


export default function Trafficlight(props) {

    // deconstruct props
    const { trafficLightColor, activeColor, setColor } = props;
    
    const isActive = activeColor === trafficLightColor ? 'active-traffic-light' : '';

    return(

        <div onClick={() => setColor(trafficLightColor)}

            className={`
        traffic-light 
        ${trafficLightColor}
        ${isActive}
        `}>
        
             
        </div>
    )
}