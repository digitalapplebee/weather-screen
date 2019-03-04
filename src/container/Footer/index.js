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
        <a href="https://telegram.me/digitalapplebee">
          <img src={TelegramIcon} alt="Telegram" />
        </a>
        <a href="mailto:digitalapplebee@gmail.com">
          <img src={GmailIcon} alt="Gmail" />
        </a>
        <a href="https://github.com/digitalapplebee">
          <img src={GithubIcom} alt="Github" />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer