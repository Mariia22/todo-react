import React from 'react';
import { useTheme } from '../../hooks/Theme.context';
import style from './TodoList.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Todo } from '../../components/Todo/Todo';

export const TodoList: React.FC = () => {
  const { theme } = useTheme();
  const { todos } = useTypedSelector(state => state.todo);

  return (
    < >
      <ul style={{ ...theme } as React.CSSProperties} className={style.list}>
        {todos.map((todo) => <Todo key={todo.id} text={todo.text} checked={todo.checked} />)}
      </ul>
      <div style={{ ...theme } as React.CSSProperties} className={style.todo_total}>
        <div className={style.todo_total_items}>{todos.length} items left</div>
        <div className={style.todo_total_completed}>Clear Completed</div>
        <div className={style.todo_total_sort}>
          <button className={style.todo_total_sort_active}>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
    </>
  )
}
