import React, { useState } from 'react';
import { useTheme } from '../../hooks/Theme.context';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import style from './TodoList.module.scss';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Todo } from '../../components/Todo/Todo';
import { useActions } from '../../hooks/useActions';
//import { getTodoByFilter } from './../../store/reducers/todoSelectors'
import { FilterConst, TodoState, TodoType } from '../../types/todo';
import { Filter } from '../Filter/Filter';

export const TodoList: React.FC = () => {
  const { theme } = useTheme();
  const { todos } = useTypedSelector(state => state.todo);
  const { ClearAllTodoAction } = useActions();

  function deleteAllCompletedTodo() {
    ClearAllTodoAction();
  }
  const onDragEnd = () => {
    //jfijfjfi
  }
  return (
    < >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={'1'}>
          {provided => (
            <ul style={{ ...theme } as React.CSSProperties} className={style.list}>
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ ...theme } as React.CSSProperties}
                className={style.todo}
              >
                {todos.map((todo, index) => (
                  <Todo text={todo.text} checked={todo.checked} id={todo.id} index={index} />
                ))}
                {provided.placeholder}
              </div>
            </ul>)}
        </Droppable>
      </DragDropContext>
      <div style={{ ...theme } as React.CSSProperties} className={style.todo_total}>
        <div className={style.todo_total_items}>{todos.length} items left</div>
        <div className={style.todo_total_completed} onClick={deleteAllCompletedTodo}>Clear Completed</div>
        <div className={style.todo_total_sort}>
          <Filter activeProperty={true} name={'All'} value={'ALL'} />
          <Filter activeProperty={false} name={'Active'} value={'ACTIVE'} />
          <Filter activeProperty={false} name={'Completed'} value={'COMPLETED'} />
        </div>
      </div>
    </>
  )
}
