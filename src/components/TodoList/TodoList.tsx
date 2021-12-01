import React, { useState } from 'react';
import { useTheme } from '../../hooks/Theme.context';
import style from './TodoList.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Todo } from '../../components/Todo/Todo';
import { useActions } from '../../hooks/useActions';

export const TodoList: React.FC = () => {
  const { theme } = useTheme();
  const { filter, todos } = useTypedSelector(state => state.todo);
  const { ClearAllTodoAction, FilterAllTodoAction, FilterActiveTodoAction, FilterCompletedTodoAction } = useActions();
  const [allProperty, setAllProperty] = useState<boolean>(true);
  const [activeProperty, setActiveProperty] = useState<boolean>(false);
  const [completedProperty, setCompletedProperty] = useState<boolean>(false);
  const [flag, setFlag] = useState<boolean>(false);


  function changeActiveClass(all: boolean, active: boolean, completed: boolean, flag: boolean): void {
    setAllProperty(all);
    setActiveProperty(active);
    setCompletedProperty(completed);
    setFlag(flag)
  }
  function deleteAllCompletedTodo() {
    changeActiveClass(true, false, false, false);
    ClearAllTodoAction();
  }
  function showAllTodo() {
    changeActiveClass(true, false, false, false);
    FilterAllTodoAction();
  }
  function showActiveTodo() {
    changeActiveClass(false, true, false, true);
    FilterActiveTodoAction();
  }
  function showCompletedTodo() {
    changeActiveClass(false, false, true, true);
    FilterCompletedTodoAction();
  }
  return (
    < >
      <ul style={{ ...theme } as React.CSSProperties} className={style.list}>
        {flag
          ? filter.map((todo) => <Todo key={todo.id} text={todo.text} checked={todo.checked} id={todo.id} />)
          : todos.map((todo) => <Todo key={todo.id} text={todo.text} checked={todo.checked} id={todo.id} />)}
      </ul>
      <div style={{ ...theme } as React.CSSProperties} className={style.todo_total}>
        <div className={style.todo_total_items}>{todos.length} items left</div>
        <div className={style.todo_total_completed} onClick={deleteAllCompletedTodo}>Clear Completed</div>
        <div className={style.todo_total_sort}>
          <button className={`${allProperty === false ? style.todo_total_sort_item : style.todo_total_sort_item_active}`}
            onClick={showAllTodo}>All</button>
          <button className={`${activeProperty === false ? style.todo_total_sort_item : style.todo_total_sort_item_active}`}
            onClick={showActiveTodo}>Active</button>
          <button className={`${completedProperty === false ? style.todo_total_sort_item : style.todo_total_sort_item_active}`}
            onClick={showCompletedTodo}>Completed</button>
        </div>
      </div>
    </>
  )
}
