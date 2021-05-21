import React from 'react'
import reactDom from 'react-dom'
import { Component } from 'react'

// #1
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
      </div>
    )
  }
}

// #2
class Header extends Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}

// #3

class Greeting extends Component {
  render() {
    const date = new Date()
    const hour = date.getHours()
    let timeOfDay
    return (
      <div>
        <p>It's {timeOfDay}</p>
      </div>
    )
  }
}