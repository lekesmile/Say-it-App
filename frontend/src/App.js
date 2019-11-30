import React, { Component } from 'react'
import './App.css'
import Home from './views/Home'
import Login from './views/Login'
import Signup from './views/Signup'
import { Route, Switch } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar />
        <Container >
        <h1> Say it Out !</h1>

        <AddPost />
         
        <Home  />
      
        </Container> */}

        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Signup" component={Signup} />

        </Switch>
        
      </div>
    )
  }
}

