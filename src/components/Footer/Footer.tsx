import React from 'react'
import { useTheme } from '../../hooks/Theme.context'
import style from './Footer.module.scss'

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div style={{ ...theme } as React.CSSProperties} className={style.footer}>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://github.com/Mariia22">Maria Ushakova</a>
    </div>
  )
}


