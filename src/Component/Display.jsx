import React , { useRef } from "react";

import "./Weather_Card.css";
import "./Display.css";


const Card = (props) => {
  
  let color = useRef();
  
  const convertDate = new Date(props.dates);

  const finalDate = convertDate.toLocaleString(
    "en-US", 
  {

    year: "numeric",
    month: "long",
    day: "numeric",

  });


  const ConverterForTime = props.times.split(":");
  const TimePeriods = ConverterForTime[0] >= 12 ? "PM" : "AM";
  

  const hours = ConverterForTime[0] % 12;
  const finalHours = hours ? hours : 12;
  

  const minutes = ConverterForTime[1].length < 2 ? 
  `0${ConverterForTime[1]}` : ConverterForTime[1];
  

  const time = `${finalHours} : ${minutes}  ${TimePeriods}`;


  if ( ConverterForTime[0] >= 1 && ConverterForTime[0] <= 7 ) 
  {
    color = "night";
  } 

  else if ( ConverterForTime[0] > 7 && ConverterForTime[0] <= 12 ) 
  {
    color = "white";
  } 

  else if ( ConverterForTime[0] > 12 && ConverterForTime[0] <= 19 ) 
  {
    color = "yellow";
  } 

  else if ( ConverterForTime[0] > 19 && ConverterForTime[0] <= 23 ) 
  {
    color = "night";
  } 

  else 
  {
    color = "night";
  }
  

  return (
    <>
      <div className={`widget ${color}`}>
        
        <div className="left-panel panel">
          
          <div className="date">
            
            Time: {time} 

          </div>

          <div className="date">
            
          <div className="date">
              
            Date: {finalDate}
            
            </div>

          </div>
          
          <div className="city">

            City: {props.cityName}

          </div>

          <div className="forecast">

            ForeCasting: {props.foreCasting}

          </div>
          
          <div className="temp">

            {props.tempeature}&deg;
            {props.tempeatureUnit === "fahrenheit" ? "F" : "C"}

          </div>
        
        </div>
        
        
        <div className="right-panel panel">

          <h1>

            <span className={`wi ${props.icons}`}></span>

          </h1>

        </div>

      </div>

    </>
    
  );
};

export default Card;