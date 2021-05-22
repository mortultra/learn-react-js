import React from "react"

function Events() {

  const handleClick = () => {
    console.log("I was clicked");
  }

  const handleHover = () => {
    console.log("I am hovered upon")
  }
  return (
    <div>
      <div className="box" onMouseOver={handleHover}></div>
      <br />
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Events