import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// import styles from './assets/stylesheets/application.css';
import style from '../../../styles/main.scss';


class WeatherSearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange(event) {
    if (this.state.timeoutID !== undefined) {
       clearTimeout(this.state.timeoutID);
    }
    let newTimeoutID = setTimeout(() => this.props.handler(this.state.value), 600);
    this.setState({
      timeoutID: newTimeoutID
    });

    this.setState({value: event.target.value});
  }

  handleBlur() {
    this.props.handler(this.state.value);
  }

  render() {
    return (
      <div className='react_input'>
        <input type="text"
           name="location"
               value={this.state.value}
           placeholder="Enter a city"
           onChange={(e) => this.handleChange(e)}
           onBlur={(e) => this.handleBlur(e)}/>
      </div>
    );
  }
}

function ListItem(props) {
    const wc = props.weather_condition;
    const styles = {width: '100px', marginBottom: "-35px"};

    return (
      <li className="weather_condition"><span>{wc.time}
          <img src={"" + wc.icon} style={styles}/> {wc.description} : {wc.temp}
      </span></li>)
}

class WeatherResults extends React.Component {
  render() {
    const listItems = this.props.weather_conditions.map((weather_condition) =>
      <ListItem key={weather_condition.dt}
                weather_condition={weather_condition}
                 />
    );
    return (
      <div>
        {listItems}
      </div>
    );
  }
}

export default class WeatherForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather_conditions: []
    };
  }

  cityUpdateHandler(city) {
    this.setState({
      timeoutID: undefined
    });

    const success_callback = (data) => {
      this.setState({weather_conditions: data})
    };

    this.props.weather_fetcher(city, success_callback);
  }

  render() {
    return (
      <div>
        <WeatherSearchBox handler={(city) => this.cityUpdateHandler(city)} />
        <WeatherResults weather_conditions={this.state.weather_conditions} />
      </div>
    );
  }
}
