import React from "react";

import Card from "./Card";
import Layout from "./Layout";


const WeatherCard = ( props ) => {

  return (
    
    <div>
      <Layout />
      
      <h1 style={{ textAlign: "center", marginTop: "40px", fontSize: "30px" }}>
        <u>City Weather Infomation Data</u>
      </h1>

      { props.weatherData.length === 0 ? ( <h3 style={{ textAlign: "center", margin: "90px", fontSize: "60px" }}> No Data Found..!! </h3> ) : (
        
        <ul>
          
          { props.weatherData
            .slice(0)
            .reverse()
            .map((CurrentElement) => {
              
              return (
                <Card
                  key={ CurrentElement.id }
                  id={ CurrentElement.id }
                  cityName={ CurrentElement.cityName }
                  dates={ CurrentElement.dates }
                  foreCasting={ CurrentElement.foreCasting }
                  tempeature={ CurrentElement.tempeature }
                  tempeatureUnit={ CurrentElement.tempeatureUnit }
                  times={ CurrentElement.times }
                  icons={ CurrentElement.icon }
                />
              );

            })}

        </ul>

      )}

    </div>
  );

};

export default WeatherCard;