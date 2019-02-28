import React from 'react'
import st from './styles.scss'

const Header = () => (
  <div className={st.header}>
    <button>Random</button>
    <button>Black</button>
    <button>Invert</button>
    <button>Image</button>
  </div>
)

export default Header