import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Weather.css";

export const weather_app = [

  {
    id: 71, cityName: "Morbi", dates: "2020-02-16", times: "09:22", tempeature: "25", tempeatureUnit: "fahrenheit", foreCasting: "cloudy", icon: "wi-day-rain",
  },

  {
    id: 72, cityName: "Jamnagar", dates: "2020-06-15", times: "23:22", tempeature: "40", tempeatureUnit: "Celsius", foreCasting: "mist", icon: "wi-day-fog",
  },

];

const WeatherForm = (props) => {
  
  const [tempeatureUnit, setTempUnit] = useState("");
  const [foreCasting, setForeCasting] = useState("");
  
  let icon = useRef();

  const cityname = useRef();
  const date = useRef();
  const time = useRef();
  const temp = useRef();
  
  const navigate = useNavigate();
  
  const tempUnit = (event) => 
  {
    setTempUnit(event.target.value);
  };

  const forecasting = (event) => 
  {
    setForeCasting(event.target.value);
  };

  const weatherHandler = (event) => 
  {
    event.preventDefault();
    
    const cityName = cityname.current.value;
    const dates = date.current.value;
    const times = time.current.value;
    const tempeature = temp.current.value;

    if (cityName.trim() === "") 
    {
      alert("Please Enter Your City Name!!");
    } 
    
    else if (dates === "") 
    {
      alert("Please Enter Valid Date!!");
    } 
    
    else if (times === "") 
    {
      alert("Please Enter Time Duration!!");
    } 
    
    else if (tempeature.trim() === "") 
    {
      alert("Please Enter Temperature!!");
    } 
    
    else if (tempeatureUnit === "") 
    {
      alert("Please Select Temperature Unit!!");
    } 
    
    else if (foreCasting === "") 
    {
      alert("Please Select ForeCasting!!");
    }


    console.log(foreCasting);


    if (foreCasting !== "") {
      
      switch (foreCasting) {
        
        case "sunny":
          icon = "wi-day-sunny";
          break;

        case "cloudy":
          icon = "wi-day-cloudy";
          break;

        case "snowy":
          icon = "wi-day-snow";
          break;

        case "rainy":
          icon = "wi-day-rain";
          break;

        default:
          icon = "wi-day-sunny";
          break;

      }
    }

    const weatherInfo = {
      id: Math.floor ( Math.random() * 1000 ),
      cityName,
      dates,
      times,
      tempeature,
      tempeatureUnit,
      foreCasting,
      icon,
    };

    weather_app.push(weatherInfo);

    props.addHandler(weather_app);

    if ( cityName.trim() && dates && times && tempeature.trim() && tempeatureUnit && foreCasting ) 
    
    {
      
      alert("Your Form Data Is Submitted Successfully!");
      
      navigate("/");

      cityname.current.value = "";
      date.current.value = "";
      time.current.value = "";
      temp.current.value = "";

      setTempUnit(" ");
      setForeCasting(" ");

    }
  };

  return (
    <div>

      <div className="wrapper">

        <u>
          <div className="title">Weather Information Data Form</div>
        </u>
        
          <form onSubmit={weatherHandler}>
            
            <div className="form">
              
              <div className="inputfield">
                <label>City Name:</label>
                <input type="text" placeholder="Enter Your City Name Here" className="input" ref={cityname} />
              </div>

              <div className="inputfield">
                <label>Date:</label>
                <input type="date" className="input" ref={date} />
              </div>

              <div className="inputfield">
                <label>Time:</label>
                <input type="time" className="input" ref={time} />
              </div>

              <div className="inputfield">
              
                <label>Temprature:</label>
                <input type="number" placeholder="Insert Temprature" className="inputs" ref={temp} />
                
                <div className="custom_selects">
                  <select onChange={tempUnit} value={tempeatureUnit}>

                    <option value="">Select Temptature Unit</option>
                    <option value="celsius">Celsius (°C)</option>
                    <option value="fahrenheit">Fahrenheit (°F)</option>

                  </select>
                </div>

              </div>

              <div className="inputfield">
                
                <label>ForeCasting:</label>
                
                <div className="custom_select">
                  <select onChange={forecasting} value={foreCasting}>
                    <option value="">Choose ForeCasting</option>
                    <option value="sunny">Sunny</option>
                    <option value="cloudy">Cloudy</option>
                    <option value="snowy">Snowy</option>
                    <option value="rainy">Rainy</option>
                  </select>
                </div>

              </div>

              <div className="inputfield">
                
                <button type="submit" className="btn">
                  Submit Data
                </button>

              </div>

            </div>

          </form>
      </div>
    </div>
  );
};

export default WeatherForm;