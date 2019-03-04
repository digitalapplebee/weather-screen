import React, { Component, Fragment } from 'react'
import axios from 'axios'
import moment from 'moment'
import { TiWeatherCloudy } from 'react-icons/ti'
import { IoMdTime, IoIosCalendar } from 'react-icons/io'
import TemperatureIcon from '../../assets/temperature.svg'
import RefreshIcon from '../../assets/refresh.svg'
import WeatherSun from '../../assets/Weather-sun.svg'
import st from './styles.scss'

const API = "https://api.darksky.net/forecast/da22cd57814b7bb058ba37ba125884b4/53.9,27.56667"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
      currently: {},
    }
  }

  componentWillMount() {
    this.weatherNow()
    // window.addEventListener('scroll', this.getRandomNumber)
  }

  componentDidMount() {
    this.setState({isLoading: true})
  }

  // random 1-255 for color
  // getRandomNumber() {
  //   console.log(Math.floor(Math.random() * (256 - 1)) + 1)
  // }

  weatherNow() {
    axios.get(API)
    .then((response) => {
      console.log(response)
      this.setState({
        data: response.data,
        currently: response.data.currently,
      })
    })
    .then(() => this.setState({ isLoading: false }))
    .catch((error) => {
      console.log(error)
    })
  }

  iconRender() {
    switch(this.state.currently.icon) {
      case ("partly-cloudy-night"):
        return <TiWeatherCloudy className={st.container__icon} />
      default: 
        console.log("Icon not found")
    }
  }

  render() {
    const { isLoading } = this.state
    
    if (isLoading) {
      return (
        <div className={st.container}>
        </div>
      )
    }
    
    // date
    let date = moment.unix(this.state.currently.time).format("DD.MM.YYYY")
    let time = moment.unix(this.state.currently.time).format("H:mm:ss")

    // celsius
    const temperature = ((this.state.currently.temperature - 32) * 5/9).toFixed(1)

    return (
      <Fragment>
        <div className={st.container} onClick={this.weatherNow}>
          <div className={st.info}>
            <div className={st.header__container}>
              <p className={st.title}>Weather today</p>
              <img 
                src={RefreshIcon}
                alt="Refresh"
                className={st.refresh__icon} 
                onClick={this.weatherNow}
              />
            </div>
            <div className={st.location}>
              Location: {this.state.data.timezone}
            </div>
            <div className={st.fb}>
              <img 
                className={st.weather__icon}
                src={WeatherSun}
                alt="Weather"
              />
              <div>
                <div className={st.container__date}>
                  <div className={st.container__date__time}>
                    <IoMdTime />
                    <span>{time}</span>
                  </div>
                  <div className={st.container__date__date}>
                    <IoIosCalendar />
                    <span>{date}</span>
                  </div>
                </div>
                <div className={st.temperature}>
                  <img src={TemperatureIcon} alt="Temperature" />
                  {this.iconRender}
                  <p>{temperature}°C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
