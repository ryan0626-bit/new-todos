import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
function Todo({ todo, deleteTodo, completedTodo }) {
  return (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
    >
      <div>
        <Checkbox
          checked={todo.isComplete}
          onClick={() => completedTodo(todo.id)}
        />
        <span
          style={{ textDecoration: todo.isComplete ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
        <IconButton onClick={() => {}}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => deleteTodo(todo.id)}>
          <DeleteForeverIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Todo;
