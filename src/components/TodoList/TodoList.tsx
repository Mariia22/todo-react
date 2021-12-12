import React, { useMemo } from 'react';
import { useTheme } from '../../hooks/Theme.context';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import style from './TodoList.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Todo } from '../../components/Todo/Todo';
import { useActions } from '../../hooks/useActions';
import { selectTodo } from './../../store/reducers/todoSelectors'
import { Filter } from '../Filter/Filter';
import { useMediaQuery } from 'react-responsive';

export const TodoList: React.FC = () => {
  const { theme } = useTheme();
  const { todos } = useTypedSelector(state => state.todoList);
  const filter = useTypedSelector(state => state.filter);
  const { ClearAllTodoAction, DragEndAction } = useActions();
  const isMobile = useMediaQuery({ query: `(max-width: 650px)` });

  const deleteAllCompletedTodo = () => {
    ClearAllTodoAction();
  }
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
    DragEndAction([source.index, destination.index]);
  }
  const visibileFilter = useMemo(() => {
    return selectTodo(todos, filter)
  }, [todos, filter]);

  return (
    <div className={style.todo__list__wrapper}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todos" >
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ ...theme } as React.CSSProperties} className={style.todo__list}
            >
              {visibileFilter.map((todo, index) => (
                <Draggable key={todo.id} index={index} draggableId={String(todo.id)}>
                  {(provided, snapshot) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={snapshot.isDragging ? style.todoSelected : style.todo}
                      key={todo.id}
                    >
                      <Todo checked={todo.checked} text={todo.text} id={todo.id} />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div style={{ ...theme } as React.CSSProperties} className={style.todo_total}>
        <div className={style.todo_total_items}>{todos.length} items left</div>
        <div className={style.todo_total_completed} onClick={deleteAllCompletedTodo}>Clear Completed</div>
        <div className={isMobile ? style.todo_total_sort_mobile : style.todo_total_sort}>
          <Filter value='ALL' name='All' currentFilter={filter} quantity={todos.length} />
          <Filter value='ACTIVE' name='Active' currentFilter={filter} quantity={todos.filter(todo => todo.checked === false).length} />
          <Filter value='COMPLETED' name='Completed' currentFilter={filter} quantity={todos.filter(todo => todo.checked === true).length} />
        </div>
      </div>
    </div>
  )
}
