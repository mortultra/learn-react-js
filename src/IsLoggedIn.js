import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
  }

  render() {
    let userLogIn
    const checking = () => {
      if (this.state.loggedIn === true) {
        userLogIn = "out"
      } else {
        userLogIn = "in"
      }
    }

    checking()

    return (
      <div>
        <h1>You are currently logged: {userLogIn}</h1>
      </div>
    )
  }
}

export default App