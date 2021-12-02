import React, { useState } from 'react';
import { useTheme } from '../../hooks/Theme.context';
import style from './TodoList.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Todo } from '../../components/Todo/Todo';
import { useActions } from '../../hooks/useActions';
import { getTodoByFilter } from './../../store/reducers/todoSelectors'
import { Filters } from '../../types/todo';
import { Filter } from '../Filter/Filter';

export const TodoList: React.FC = () => {
  const { theme } = useTheme();
  const { todos } = useTypedSelector(state => state.todo);
  const { filter } = useTypedSelector(state => state.filter);
  const { ClearAllTodoAction, FilterTodoAction } = useActions();

  function deleteAllCompletedTodo() {
    ClearAllTodoAction();
  }
  return (
    < >
      <ul style={{ ...theme } as React.CSSProperties} className={style.list}>
        {todos.map((todo) => <Todo key={todo.id} text={todo.text} checked={todo.checked} id={todo.id} draggable={true} />)}
      </ul>
      <div style={{ ...theme } as React.CSSProperties} className={style.todo_total}>
        <div className={style.todo_total_items}>{todos.length} items left</div>
        <div className={style.todo_total_completed} onClick={deleteAllCompletedTodo}>Clear Completed</div>
        <div className={style.todo_total_sort}>
          <Filter activeProperty={true} name={'All'} />
          <Filter activeProperty={false} name={'Active'} />
          <Filter activeProperty={false} name={'Completed'} />
        </div>
      </div>
    </>
  )
}
