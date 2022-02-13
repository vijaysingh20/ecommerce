import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function Login() {
  let state = useSelector(s => s)
  let dispatch = useDispatch()
  let [ob,setob]=React.useState({email:"",password:""})

  const handleChane=e=>{
    let {placeholder,value}=e.target
    setob({...ob,[placeholder]:value})
  }
  const login = () => {
    if(state.users.some(x=>x.email===ob.email && x.password===ob.password))
    {
      let me=state.users.find(x=>x.email===ob.email && x.password===ob.password)
      alert("login")
      dispatch({type:"login",user:me})
    }
    else{
      alert("failed")
    }
  }
  return (
    <div className='form'>
      <h1>Login</h1>
      <p>email</p>
      <input value={ob.email} onChange={handleChane} placeholder='email' />
      <p>password</p>
      <input value={ob.password} onChange={handleChane} placeholder='password' />
      <button onClick={login}>login</button>
    </div>
  )
}
