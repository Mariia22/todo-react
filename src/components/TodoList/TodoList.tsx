import React, { useState } from 'react';
import { useTheme } from '../../hooks/Theme.context';
import style from './TodoList.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { TodoType } from '../../types/todo';
import { Todo } from '../../components/Todo/Todo';


export const TodoList: React.FC = () => {
  const { theme } = useTheme();
  const { todos } = useTypedSelector(state => state.todo);

  return (
    <div style={{ ...theme } as React.CSSProperties} className={style.main}>
      {todos.map((todo) => {
        <Todo id={todo.id} text={todo.text} checked={todo.checked} />
      })}
    </div>
  )
}
