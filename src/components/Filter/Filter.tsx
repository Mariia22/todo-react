import React from 'react';
import { useActions } from '../../hooks/useActions';
import style from './Filter.module.scss';

interface Props {
  name: string
  value: string
  currentFilter: string
  quantity: number
}
export const Filter: React.VFC<Props> = ({ name, value, currentFilter, quantity }) => {
  const { FilterTodoAction } = useActions();

  function setFilter(event: React.MouseEvent<HTMLButtonElement>) {
    FilterTodoAction(event.currentTarget.value)
  }

  if (value === currentFilter) {
    return <button disabled className={style.todo_total_sort_item_active}>{name}({quantity})</button>
  }
  return (
    <button className={style.todo_total_sort_item} value={value} onClick={setFilter}>{name}({quantity})</button>
  )
}
