import React, { useState } from 'react'
import style from './newTodo.module.css'


export default function NewTodo(props) {

  const [todo, setTodo] = useState({title: '', desc: ''});
  const {title, desc} = todo;

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({title: '', desc: ''});
  }

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return {...oldTodo, [name] : event.target.value}
    })
  }

  return (
   <form onSubmit={handleSubmit} className={style.form}>
    <div className={style.formField}>
      <label htmlFor='title' className={style.formFieldLabel}>title: </label>
      <input type='text' name='title' id='title' value={title} onChange={handleChange} className={style.formFieldInput}></input>
    </div>
    <div className={style.formField}>
      <label htmlFor='desc' className={style.formFieldLabel}>Description: </label>
      <textarea type='text' name='desc' id='desc' value={desc} onChange={handleChange} className={style.formFieldTextarea}></textarea>
    </div>
    <button className={style.button}>Add todo</button>
   </form>
  )
}