import React, { Component,useEffect, useState } from 'react';
import axios from 'axios';

import { View, Text } from 'react-native';
let currentWeather = "";
export default class WeatherDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { weatherIcon : '', weatherCondition : ''};
    this.handleChange = this.handleChange.bind(this);
    // const [stateVariable, setStateVariable] = useState('');
    console.log('constructor called');
    currentWeather = {
      location: {
          "localtime": "2021-02-21 8:42",
          "country": "United Kingdom",
          "localtime_epoch": 1613896955,
          "name": "London",
          "lon": -0.11,
          "region": "City of London, Greater London",
          "lat": 51.52,
          "tz_id": "Europe/London"
      },
      current: {
          "feelslike_c": 9.5,
          "feelslike_f": 49.2,
          "wind_degree": 220,
          "last_updated_epoch": 1613896210,
          "temp_c": 11,
          "temp_f": 51.8,
          "cloud": 75,
          "wind_kph": 6.1,
          "wind_mph": 3.8,
          "humidity": 82,
          "uv": 1,
          "last_updated": "2021-02-21 08:30",
          "is_day": 1,
          "precip_in": 0,
          "air_quality": {
              "no2": 13.5,
              "o3": 54.3,
              "us-epa-index": 1,
              "so2": 7.9,
              "pm2_5": 8.6,
              "pm10": 11.3,
              "co": 230.3,
              "gb-defra-index": 1
          },
          "wind_dir": "SW",
          "gust_mph": 10.5,
          "pressure_in": 30.3,
          "gust_kph": 16.9,
          "precip_mm": 0.1,
          condition: {
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              text: "Partly cloudy",
              code: 1003
          },
          "vis_km": 10,
          "pressure_mb": 1009,
          "vis_miles": 6
      }};
  }  
  
  handleChange(changeObject) {
    this.setState(changeObject)
  }

  componentDidMount() {
    //const [stateVariable, setStateVariable] = useState('this is the starting value for the variable'); 
    // send HTTP request
    // save it to the state
    this.state.weatherIcon  = currentWeather.current.condition.icon;
    this.state.weatherCondition = currentWeather.current.condition.text;
    this.handleChange(this);
    axios.get("https://gpoqo55ls2.execute-api.us-east-1.amazonaws.com/default/WeatherHistory?TableName=Test&Key=abc").then(x=>{
      console.log(x);
      console.log('API response');
    });
    console.log('component did mount called!');
  }
  
    render() {
      // <ChildComponent exampleProp={stateVariable} />
      console.log("render called");
      return (<div><h1> Weather today is {this.state.weatherCondition} <img alt="Partly cloudy" src={this.state.weatherIcon} /></h1> </div> );
    }
  };

//   const ChildComponent = (props) => {
//     // const [stateVariable, setStateVariable] = useState('');
//     // useEffect(() => {
//     //     // send HTTP request
//     //     // save response to variable
//     // }, [])
//     return (
//         <div>
//             <h2>{props.exampleProp}</h2>
//         </div>
//     )
// }