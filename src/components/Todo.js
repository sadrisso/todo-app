import React from 'react'
import style from './todo.module.css'


export default function Todo(props) {

  const {title, desc} = props.todo;
  const {id} = props;

  const handleRemove = (id) => {
    props.onRemoveTodo(id);
  }

  return (
    <article className={style.todo}>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <button onClick={() => handleRemove(id)} className={style.btn}>
        <i className='fa fa-trash fa-2x'></i>
      </button>
    </article>
  )
}
