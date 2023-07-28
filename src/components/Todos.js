import React from 'react'
import Todo from './Todo'
import style from './todos.module.css'


export default function Todos(props) {
  return (
    <div className={style.todos}>
      {props.todos.map((todo, id) => <Todo todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo} />)}
    </div>
  )
}