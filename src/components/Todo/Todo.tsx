import React from 'react';
import style from './Todo.module.scss'

interface Props {
  id: number,
  checked: boolean,
  text: string
}
export const Todo: React.FC<Props> = ({ id, checked, text }) => {
  return (
    <li className={style.todo}>
      <input className={style.todoCheckBox} checked={checked} type='checkbox' />
      <label>{text}</label>
    </li>
  )
}


