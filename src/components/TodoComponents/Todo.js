import React from "react";


const Todo = props => {
    return (
    <p id={props.id} 
    onClick={props.toggleComplete}>
    {props.task}
  </p>
);
}
export default Todo;;