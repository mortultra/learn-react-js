import React from 'react';

function ToDoItem(props) {
  const { id, text, completed, handleCheck } = props;

  return (
    <div>
      <div className="checkboxes" key={id}>
          <input type="checkbox" id="check" name="check" checked={completed} onChange={handleCheck}/>
          <p>{text}</p>
          <hr/>
      </div>
    </div>
  )
}

export default ToDoItem
