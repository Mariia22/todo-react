import React from 'react';
import { useActions } from '../../hooks/useActions';
import style from './Filter.module.scss';

interface Props {
  name: string
  value: string
  currentFilter: string
}
export const Filter: React.VFC<Props> = ({ name, value, currentFilter }) => {
  const { FilterTodoAction } = useActions();

  function setFilter(event: React.MouseEvent<HTMLButtonElement>) {
    FilterTodoAction(event.currentTarget.value)
  }

  if (value === currentFilter) {
    return <button disabled className={style.todo_total_sort_item_active}>{name}</button>
  }
  return (
    <button className={style.todo_total_sort_item} value={value} onClick={setFilter}>{name}</button>
  )
}
