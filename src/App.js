import React, {useState} from "react";

 const App = () => {
  const [temperatureValue , setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState('hot');

  const incrementTemp = ()=>{
    if (temperatureValue ===40) return;

    const newTemperature = temperatureValue +1;

    setTemperatureValue(newTemperature);
     if (newTemperature >= 15) 
     setTemperatureColor('hot')
  } 

  const decrementTemp = ()=>{
    const newTemperature = temperatureValue - 1;
    if(temperatureValue ===-10) return;

    setTemperatureValue(newTemperature);
    if (newTemperature < 15 )
    setTemperatureColor('cold')
  }
  
  return(
    <div className = "app-container">
    
    <div className = "temperature-display-container">
    <div className= {`temperature-display ${temperatureColor}`}>
    <div className={temperatureColor} > {temperatureValue}°C </div>
    </div>
    </div>

    <div className = "button-container">
      <button onClick={()=> incrementTemp()}>+</button>
      <button onClick={()=> decrementTemp()}>-</button>
    </div>
    </div>
  )
 }

 export default App;