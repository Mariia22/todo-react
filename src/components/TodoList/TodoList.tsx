import React from 'react';
import { useTheme } from '../../hooks/Theme.context';
import style from './TodoList.module.scss';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Todo } from '../../components/Todo/Todo';
import { useActions } from '../../hooks/useActions';
import { getTodoByFilter } from './../../store/reducers/todoSelectors'
import { FilterConst, TodoState, TodoType } from '../../types/todo';
import { Filter } from '../Filter/Filter';

export const TodoList: React.FC = () => {
  const { theme } = useTheme();
  const { todos } = useTypedSelector(state => state.todo);
  const { ClearAllTodoAction } = useActions();
  const state = useSelector(state => state);

  getTodoByFilter(todos, 'ALL');
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
          <Filter activeProperty={true} name={'All'} value={'ALL'} onClick={() => { getTodoByFilter(todos, 'ALL') }} />
          <Filter activeProperty={false} name={'Active'} value={'ACTIVE'} onClick={() => { getTodoByFilter(todos, 'ACTIVE') }} />
          <Filter activeProperty={false} name={'Completed'} value={'COMPLETED'} onClick={() => { getTodoByFilter(todos, 'COMPLETED') }} />
        </div>
      </div>
    </>
  )
}
