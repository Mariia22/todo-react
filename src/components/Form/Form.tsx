import React, { useState } from 'react';
import { useTheme } from '../../hooks/Theme.context';
import style from './Form.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { TodoType } from '../../types/todo';

export const FormComponent: React.FC = () => {
  const { theme } = useTheme();
  const { todos } = useTypedSelector(state => state.todo);
  const { AddTodoAction } = useActions();
  const [value, setValue] = useState<TodoType['text']>('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    AddTodoAction(value);
    console.log(todos);
  }

  return (
    <div style={{ ...theme } as React.CSSProperties} className={style.main}>
      <form onSubmit={handleSubmit}>
        <div className={style.formCheckbox}></div>
        <input style={{ ...theme } as React.CSSProperties} className={style.formInput} type="text"
          placeholder='Create a new todo...' value={value} onChange={(event) => { setValue(event.target.value) }} />
      </form>
    </div>
  )
}