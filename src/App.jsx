import React from 'react'
import Header from './container/Header'
import Weather from './container/Weather'
import Footer from './container/Footer'
import st from './styles.scss'

import 'reset-css'

const App = () => (
  <div className={st.container}>
    <Header />
    <Weather />
    <Footer />
  </div>
)

export default App