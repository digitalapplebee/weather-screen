import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import { TiWeatherCloudy } from 'react-icons/ti';


import 'reset-css';
import st from './styles.scss'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currently: {},
    };
  }

  componentWillMount() {
    this.weatherNow();

  }

  weatherNow() {
    axios.get('https://api.darksky.net/forecast/da22cd57814b7bb058ba37ba125884b4/53.9,27.56667')
    .then((response) => {
      console.log(response);
      this.setState({
        data: response.data,
        currently: response.data.currently,
      });
    } 
    ).catch((error) => {
      console.log(error);
    });
  };

  iconRender() {
    switch(this.state.currently.icon) {
      case ("partly-cloudy-night"):
        return <TiWeatherCloudy className={st.container__icon} />
      default: 
        console.log("Icon not found");
    }
  }

  render() {
    // isLoading
    
    // date
    var date = moment.unix(this.state.currently.time).format("DD.MM.YYYY");
    let time = moment.unix(this.state.currently.time).format("h:mm:ss");
    // celsius
    const temperature = ((this.state.currently.temperature - 32) * 5/9).toFixed(1);

    return (
      <div className={st.container} onClick={this.weatherNow}>
        <div>
          <p className={st.container__title}>Weather today</p>
          <div>Location: {this.state.data.timezone}</div>
          <div className={st.container__date}>
            <span>{time}</span>
            <span>{date}</span>
          </div>
          <div className={st.container__temperature}>
            {this.iconRender()}
            <p>{temperature}°C</p>
          </div>

        </div>
      </div>
    );
  };
}
