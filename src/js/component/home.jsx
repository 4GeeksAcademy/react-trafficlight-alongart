import React, { useState} from "react";
import Trafficlight from "./Trafficlight.jsx";




const Home = (props) => {
	const [activeColor, setActiveColor] = useState("red");
	
	return (

		<>
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
