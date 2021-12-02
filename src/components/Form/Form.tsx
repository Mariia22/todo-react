import React, { useState } from 'react';
import { useTheme } from '../../hooks/Theme.context';
import style from './Form.module.scss';
import { useActions } from '../../hooks/useActions';
import { TodoType } from '../../types/todo';

export const FormComponent: React.FC = () => {
  const { theme } = useTheme();
  const { AddTodoAction } = useActions();
  const [value, setValue] = useState<TodoType['text']>('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    AddTodoAction(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input style={{ ...theme } as React.CSSProperties} className={style.formInput} type="text"
        placeholder='Create a new todo...' value={value} onChange={(event) => { setValue(event.target.value) }} />
    </form>
  )
}