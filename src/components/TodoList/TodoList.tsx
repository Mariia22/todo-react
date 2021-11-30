import React from 'react';
import { useTheme } from '../../hooks/Theme.context';
import style from './TodoList.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Todo } from '../../components/Todo/Todo';


export const TodoList: React.FC = () => {
  const { theme } = useTheme();
  const { todos } = useTypedSelector(state => state.todo);

  return (
    <ul style={{ ...theme } as React.CSSProperties} className={style.list}>
      {todos.map((todo) => <Todo key={todo.id} text={todo.text} checked={todo.checked} id={todo.id} />)}
    </ul>
  )
}
