import React, { Component, Fragment } from 'react'
import axios from 'axios'
import moment from 'moment'
import { TiWeatherCloudy } from 'react-icons/ti'
import { IoMdTime, IoIosCalendar } from 'react-icons/io'

import 'reset-css'
import st from './styles.scss'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      currently: {},
    }
  }

  componentWillMount() {
    this.weatherNow()
    window.addEventListener('scroll', this.getRandomNumber)
    // window.addEventListener('click', this.getRandomNumber);
  }

  componentDidMount() {
    this.setState({isLoading: false})
  }

  getRandomNumber() {
    console.log(Math.floor(Math.random() * (256 - 1)) + 1)
  }

  weatherNow() {
    axios.get('https://api.darksky.net/forecast/da22cd57814b7bb058ba37ba125884b4/53.9,27.56667')
    .then((response) => {
      console.log(response)
      this.setState({
        data: response.data,
        currently: response.data.currently,
      })
    } 
    ).catch((error) => {
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
    this.state.isLoading ? '' : ''
    
    // date
    let date = moment.unix(this.state.currently.time).format("DD.MM.YYYY")
    let time = moment.unix(this.state.currently.time).format("H:mm:ss")
    // celsius
    const temperature = ((this.state.currently.temperature - 32) * 5/9).toFixed(1)

    return (
      <Fragment>
        
        <div className={st.container} onClick={this.weatherNow}>
          <div className={st.info}>
            <p className={st.title}>Weather today</p>
            <div className={st.location}>
              Location: {this.state.data.timezone}
            </div>
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
              {this.iconRender}
              <p>{temperature}°C</p>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
