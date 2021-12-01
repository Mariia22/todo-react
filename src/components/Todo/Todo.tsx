import React from 'react';
import { useTheme } from '../../hooks/Theme.context';
import style from './Todo.module.scss';

interface Props {
  checked: boolean,
  text: string
}
export const Todo: React.FC<Props> = ({ checked, text }) => {
  const { theme } = useTheme();
  return (
    <li style={{ ...theme } as React.CSSProperties} className={style.todo}>
      <label className={style.todoCheckBox}>
        <input checked={checked} type='checkbox' />
        <span className={style.todoText}>{text}</span>
      </label>

    </li>
  )
}


