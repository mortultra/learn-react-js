import React from 'react';

function ToDoItem(props) {
  const { id, text, completed } = props;
  return (
    <div>
      <div className="checkboxes" key={id}>
          <input type="checkbox" id="check" name="check" checked={completed}/>
          <p>{text}</p>
          <hr/>
      </div>
    </div>
  )
}

export default ToDoItem
