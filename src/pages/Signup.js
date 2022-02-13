import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function Signup(props) {
  let state = useSelector(s => s)
  let dispatch = useDispatch()
  let [ob, setob] = React.useState({ name: "", phone: "", email: "", password: "" })

  const handleChane = e => {
    let { placeholder, value } = e.target
    setob({ ...ob, [placeholder]: value })
  }
  const signup = () => {
    if (state.users.some(x => x.email === ob.email)) {
      alert("failed to signup")
    }
    else {
      let newuser = { ...ob, id: state.users.length + 1 }
      let allusers = [...state.users, newuser]
      alert("signup successfull")
      dispatch({type:"signup",payload:allusers})
      props.history.push("/login")
    }
  }
  return (
    <div className='form'>
      <h1>signup</h1>
      <p>name</p>
      <input value={ob.name} onChange={handleChane} placeholder='name' />
      <p>email</p>
      <input value={ob.email} onChange={handleChane} placeholder='email' />
      <p>phone</p>
      <input value={ob.phone} onChange={handleChane} placeholder='phone' />
      <p>password</p>
      <input value={ob.password} onChange={handleChane} placeholder='password' />
      <button onClick={signup}>signup</button>
    </div>
  )
}
