import React from 'react'
import TelegramIcon from '../../assets/social/telegram.svg'
import GmailIcon from '../../assets/social/gmail.svg'
import GithubIcom from '../../assets/social/github.svg'
import st from './styles.scss'

const Footer = () => (
  <footer>
    <div className={st.footer}>
      <div className={st.items}>
        <p>digitalapplebee</p>
      </div>
      <div className={st.socials}>
        <img src={TelegramIcon} alt="Telegram" />
        <img src={GmailIcon} alt="Gmail" />
        <img src={GithubIcom} alt="Github" />
      </div>
    </div>
  </footer>
)

export default Footer