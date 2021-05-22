import React, { useState } from "react"

function ChangingState() {

  const [ count, setCount ] = useState(0);

  const plusClick = () => {
    setCount(count + 1);
  }

  const minusClick = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={plusClick}>Add!</button>
      <button onClick={minusClick}>Subtract!</button>
    </div>
  )
}

export default ChangingState