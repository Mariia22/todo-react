import React, { MouseEventHandler, SyntheticEvent, useState } from 'react';
import { useTheme } from '../../hooks/Theme.context';
import { DragDropContext, Droppable, Draggable, OnDragEndResponder, DraggableProvided, DropResult } from 'react-beautiful-dnd';
import style from './TodoList.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Todo } from '../../components/Todo/Todo';
import { useActions } from '../../hooks/useActions';
//import { getTodoByFilter } from './../../store/reducers/todoSelectors'
import { FilterConst, TodoState, TodoType } from '../../types/todo';
import { Filter } from '../Filter/Filter';
import { ObjectType, ObjectTypeDeclaration } from 'typescript';


export const TodoList: React.FC = () => {
  const { theme } = useTheme();
  const { todos } = useTypedSelector(state => state.todoList);
  const { ClearAllTodoAction, DragEndAction } = useActions();
  //const [items, setItems] = useState<Array<TodoType>>(todos);
  //TODO: change class button after press
  //const className = active === false ? style.todo_total_sort_item : style.todo_total_sort_item_active

  function deleteAllCompletedTodo() {
    ClearAllTodoAction();
  }

  //TODO: add filter reducer 
  function setFilter(e: React.MouseEvent<HTMLButtonElement>) {
    const newItems = getTodoByFilter(todos, String(e.currentTarget.value))
    //setItems(newItems)
  }

  const getTodoByFilter = (array: Array<TodoType>, filterParam: string): Array<TodoType> => {
    switch (filterParam) {
      case 'ALL':
        return array
      case 'COMPLETED':
        return array.filter((todo: any) => todo.checked)
      case 'ACTIVE':
        return array.filter((todo: any) => !todo.checked)
      default: return array
    }
  }
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
    DragEndAction([source.index, destination.index]);
  }
  return (
    < >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todos" >
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ ...theme } as React.CSSProperties} className={style.list}
            >
              {todos.map((todo, index) => (
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
        <div className={style.todo_total_sort}>
          <button className={style.todo_total_sort_item_active}
            value='ALL' onClick={setFilter}>All</button>
          <button className={style.todo_total_sort_item}
            value='ACTIVE' onClick={setFilter}>Active</button>
          <button className={style.todo_total_sort_item}
            value='COMPLETED' onClick={setFilter}>Completed</button>
        </div>
      </div>
    </>
  )
}
