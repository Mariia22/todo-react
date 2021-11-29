import React from 'react';
import { useTheme } from '../../hooks/Theme.context';
import style from './Main.module.scss'


export const Main: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div style={{ ...theme } as React.CSSProperties} className={style.main}>
      <h1>Main</h1>
    </div>
  )
}


