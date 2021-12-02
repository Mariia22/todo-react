import React, { ChangeEvent } from 'react';
import { useTheme } from '../../hooks/Theme.context';
import { useActions } from '../../hooks/useActions';
import style from './Todo.module.scss';

interface Props {
  id: number
  checked: boolean,
  text: string,
  draggable: boolean,
}
export const Todo: React.FC<Props> = ({ id, checked, text, draggable }) => {
  const { theme } = useTheme();
  const { ToggleTodoAction } = useActions();

  function handleChangeCheckbox(event: ChangeEvent<HTMLInputElement>) {
    ToggleTodoAction(Number(event.target.value));
  }

  return (
    <li style={{ ...theme } as React.CSSProperties} className={style.todo} draggable={true}>
      <label className={style.todoCheckBox}>
        <input className={style.todoInput} checked={checked} type='checkbox' onChange={handleChangeCheckbox} value={id} />
        <span className={style.todoText}>{text}</span>
      </label>

    </li>
  )
}


