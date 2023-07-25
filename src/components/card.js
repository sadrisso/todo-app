
// import React from 'react'

// export default function Card(props) {

//   return (
//     <div>
//       hi
//     </div>
//   )
// }























// import React, {useState} from 'react'

// export default function Card() {

//   const [user, setUser] = useState({name: '', email: '', password: ''});
//   const {name,email,password} = user;

//   const handelChange = (e) => {
//     setUser({...user, [e.target.name] : e.target.value});
//   }

//   const handelSubmit = (e) => {
//     console.log('form is submitted')
//     console.log(user)
//     e.preventDefault();
//   }

//   return (
//     <div className='card'>
//       <h1>Registration</h1>

//       <form onSubmit={handelSubmit}>
//           <label htmlFor= "name" name="name">Name: </label>
//           <input type="text" name="name" id="name" value={name} required onChange={handelChange}></input> <br/>

//           <label htmlFor='email' name = "email">Email: </label>
//           <input type="email" name="email" id="email" value={email} required onChange={handelChange}></input><br/>

//           <label htmlFor='password' name='password'>passward: </label>
//           <input type="password" name="password" id="password" value={password} required onChange={handelChange}></input><br/>

//           <button type="submit">Register</button>
//       </form>
      
//     </div>
//   )
// }








// import React, { useState } from 'react'

// export default function Usestate() {


//     const [count, setCount] = useState(0);

//     const handelIncrement = () => {
//         setCount(count+1);
//     }


//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={handelIncrement}>increment</button>
//     </div>
//   )
// }







// import React, { Component } from 'react'

// export default class Card extends Component {
  

//     constructor(props){
//         super(props)

//         this.state = {
//             changedValue: ''
//         }
//     }


//     handelOnChange = (e)=>{
//         this.setState({
//             changedValue: e.target.value
//         })
//     }
  
//     render() {
//     return (
//         <div>
//             <input type='text' onChange={this.handelOnChange}></input>
//             <p>{this.state.changedValue}</p>
//         </div>
//     )
//   }
// }

