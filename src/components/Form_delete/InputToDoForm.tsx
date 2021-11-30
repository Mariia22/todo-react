import React from 'react';
import { useTheme } from '../../hooks/Theme.context';
import style from './InputToDoForm.module.scss'


export const Form: React.FC = () => {
  const { theme } = useTheme();
  return (
    <form className={style.form}>
      <div className={style.formCheckbox}></div>
      <input style={{ ...theme } as React.CSSProperties} className={style.formInput} type="text" placeholder='Create a new todo...' />
    </form>
  )
}


