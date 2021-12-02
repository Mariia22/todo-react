import React from 'react';
import { FilterConst } from '../../types/todo';
import { useActions } from '../../hooks/useActions';
import { getTodoByFilter } from './../../store/reducers/todoSelectors'
import style from './Filter.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface Props {
  activeProperty: boolean
  name: string
  value: any
  onClick?: any
}
export const Filter: React.VFC<Props> = ({ name, activeProperty, value }) => {
  const { FilterTodoAction } = useActions();
  function setFilter(event: any) {
    FilterTodoAction(event.target.value)
  }
  return (
    <button className={`${activeProperty === false ? style.todo_total_sort_item : style.todo_total_sort_item_active}`} value={value} onClick={setFilter}>
      {name}
    </button>
  )
}


