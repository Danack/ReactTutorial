
import React from 'react';
import ReactDOM from 'react-dom';

import hello_element from './jsx/hello_element.jsx';
import Clock from './jsx/clock.jsx';
import simple_form from './jsx/simple_form.jsx';
import WeatherForecast from './jsx/weather_forecast.jsx';





// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment
// This is a comment





ReactDOM.render(
  <Clock />,
  document.getElementById('clock')
);

// ReactDOM.render(
//   <HelloElement name="PHPSW" />,
//   document.getElementById('react_hello_element_1')
// );

// ReactDOM.render(
//   <SimpleForm maths={{x: 2, y: 4, operand: 'times'}} />,
//   document.getElementById('simple_form')
// );

let weather_fetcher = require('./lib.js').weather_fetcher_stub;

ReactDOM.render(
  <WeatherForecast weather_fetcher={weather_fetcher}/>,
  document.getElementById('weather_forecast')
);

// ReactDOM.render(
//   <WeatherForecast weather_fetcher={weather_fetcher_stub}/>,
//   document.getElementById('weather_forecast_mock')
// );
