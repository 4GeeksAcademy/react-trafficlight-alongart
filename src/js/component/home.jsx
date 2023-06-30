import React, { useState} from "react";
import Trafficlight from "./Trafficlight.jsx";




const Home = (props) => {
	const [activeColor, setActiveColor] = useState("red");
    const cycleColors = () => {
        
        const colors = ["red", "yellow", "green"];
        
        const currentColor = colors.indexOf(activeColor);

        const nextColor = (currentColor + 1) % colors.length;
        
        setActiveColor(colors[nextColor]);i
    }
	
	return (

		<>
        <button onClick={cycleColors} className="btn btn-primary btn-lg">Cycle Colors</button>
        <div className="trafficLightTop">.

        </div>
            <div className="trafficLightBG">
                <Trafficlight setColor={setActiveColor} activeColor={activeColor} trafficLightColor="red"/>
                <Trafficlight setColor={setActiveColor} activeColor={activeColor} trafficLightColor="yellow"/>
                <Trafficlight setColor={setActiveColor} activeColor={activeColor} trafficLightColor="green"/>

            </div>
            
		</>
	);
};

export default Home;

