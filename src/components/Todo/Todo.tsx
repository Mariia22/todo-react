import React, { ChangeEvent } from 'react';
import { useActions } from '../../hooks/useActions';
import style from './Todo.module.scss';
import { Draggable } from 'react-beautiful-dnd';
import { useTheme } from '../../hooks/Theme.context';

interface Props {
  id: number
  checked: boolean,
  text: string,
  index: number
}
export const Todo: React.FC<Props> = ({ checked, text, id, index }) => {
  const { theme } = useTheme();
  const { ToggleTodoAction } = useActions();

  function handleChangeCheckbox(event: ChangeEvent<HTMLInputElement>) {
    ToggleTodoAction(Number(event.target.value));
  }

  return (
    <Draggable draggableId={'1'} index={index}>
      {provided => (
        <label className={style.todoCheckBox} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <input className={style.todoInput} checked={checked} type='checkbox' onChange={handleChangeCheckbox} value={id} />
          <span className={style.todoText}>{text}</span>
        </label>
      )}
    </Draggable>
  )
}


