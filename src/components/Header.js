import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
export default function () {
  const dispatch=useDispatch()
  const state = useSelector(statefromstore => statefromstore)
  const { loggedin } = state
  const logout=()=>{
    dispatch({type:"logout"})
  }
  return (
    <header>
      <h1>Vijay Ecommerce</h1>
      <div>
        <Link to="/">home</Link>
        {!loggedin && <Link to="/login">login</Link>}
        {!loggedin && <Link to="/signup">signup</Link>}
        {loggedin && <Link to="/cart">cart (0)</Link>}
        {loggedin && <Link to="/orders">orders (0)</Link>}
        {loggedin && <Link to="/profile">profile</Link>}
        {loggedin && <Link to="/checkout">checkout</Link>}
        {loggedin && <Link onClick={logout} to="/logout">logout ({state.user.name})</Link>}
      </div>
    </header>
  )
}
