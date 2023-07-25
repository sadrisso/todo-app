import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'
import {v4 as uuidv4} from 'uuid'
import style from './home.module.css'


export default function Home() {

  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), todo}]
    })
  }

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    })
  }

  return (
    <div className={style.container}>
      <h2 style={{color: 'white', marginBottom:'5px'}}>Todo App</h2>
      <NewTodo onAddTodo={handleAddTodo}/>
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
      <footer style={{color: 'white', textAlign: 'center', width: '50%', margin: '0 auto', backgroundColor: 'black', padding: '5px', boxSizing: 'border-box'}}>React JS practice demo <br/>
      Developed by SHOEB DRISSO</footer>
    </div>
  )
}























// import React, {useState} from 'react'
// import Todos from './Todos'
// import style from './home.module.css'
// import NewTodo from './NewTodo'
// import {v4 as uuidv4} from "uuid"

// export default function Home() {

//   const [todos, setTodos] = useState([]);

//   const handelAddTodo = (todo) => {
//     setTodos((prevTodo) => {
//       return [...prevTodo, {id: uuidv4(), todo}]
//     })
//   }

//   const handleRemoveTodo = (id) => {
//     setTodos((prevTodo) => {
//       const filterTodos = prevTodo.filter((todo) => todo.id !== id)
//       return filterTodos;
//     })
//   }

//   return (
//     <div className={style.container}>
//       <NewTodo onAddTodo={handelAddTodo}/>
//       <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
      
//     </div>
//   )
// }




























// import NewTodo from './NewTodo';
// import Todos from './Todos'
// import React, { useState } from 'react'

// export default function Home() {

//     const dummyTodos = ["one", "two"];

//     const [todos, setTodos] = useState(dummyTodos);


//     const handleChange = (newTodo) => {
//         setTodos([...todos, newTodo]);
//     }

//   return (
//     <div>
//        <NewTodo onTodo={handleChange}/>
//        <Todos todos={todos}/>
//     </div>
//   )
// }


























