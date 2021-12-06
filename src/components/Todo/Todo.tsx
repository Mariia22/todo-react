import React, { ChangeEvent } from 'react';
import { useActions } from '../../hooks/useActions';
import style from './Todo.module.scss';

interface Props {
  id: number
  checked: boolean,
  text: string,
}
export const Todo: React.FC<Props> = ({ checked, text, id }) => {
  const { ToggleTodoAction } = useActions();

  function handleChangeCheckbox(event: ChangeEvent<HTMLInputElement>) {
    ToggleTodoAction(Number(event.target.value));
  }

  return (
    <label className={style.todoCheckBox}>
      <input className={style.todoInput} checked={checked} type='checkbox' onChange={handleChangeCheckbox} value={id} />
      <span className={style.todoText}>{text}</span>
    </label>
  )
}


