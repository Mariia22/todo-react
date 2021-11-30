import React from 'react';
import style from './Todo.module.scss'

interface Props {
  id: number,
  checked: boolean,
  text: string
}
export const Todo: React.FC<Props> = ({ id, checked, text }) => {
  console.log(id, checked, text);
  return (
    <div key={id}>
      <div className={style.formCheckbox}>{checked}</div>
      {text}
    </div>
  )
}


