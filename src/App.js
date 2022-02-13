import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Profile from './pages/Profile'
import Logout from './pages/Logout'
import ErrorPage from './pages/ErrorPage'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/Orders" component={Orders} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Logout" component={Logout} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  )
}
