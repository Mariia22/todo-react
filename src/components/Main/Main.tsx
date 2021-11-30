import React from 'react';
import { useTheme } from '../../hooks/Theme.context';
import style from './Main.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';


export const Main: React.FC = () => {
  const { theme } = useTheme();
  const list = useTypedSelector(state => state.todo);
  const { AddTodoAction, DeleteTodoAction, ToggleTodoAction, ClearAllTodoAction } = useActions();

  return (
    <div style={{ ...theme } as React.CSSProperties} className={style.main}>
      <h1>Main</h1>
    </div>
  )
}


