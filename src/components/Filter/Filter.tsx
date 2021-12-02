import React from 'react';
import { useActions } from '../../hooks/useActions';
//import { getTodoByFilter } from './../../store/reducers/todoSelectors'
import style from './Filter.module.scss';

interface Props {
  activeProperty: boolean
  name: string
  value: any
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


