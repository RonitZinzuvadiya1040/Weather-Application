import React from "react";

import Layout from "./Layout";
import WeatherForm from "./Weather_Form";

const Weather = (props) => {
  
  const sortArray = (arr) => {
    props.onHandArray(arr);
  };
  
  return (
    <>
      <Layout />
      <WeatherForm addHandler={sortArray} />
    </>
  );
};

export default Weather;