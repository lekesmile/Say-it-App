import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Container } from '@material-ui/core'
import Home from './views/Home'


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
        <h1> Say it Out !</h1>
         <Home />
        </Container>
        
      </div>
    )
  }
}

