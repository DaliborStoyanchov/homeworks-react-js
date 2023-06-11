import classes from "./TodoItem.module.css";

function TodoItem({ todo }) {
  return (
    <div
      className={classes.todoItem}
      style={{
        backgroundColor: todo.isFinished ? "lightgreen" : "lightcoral",
      }}
    >
      <p>
        {todo.text},{todo.author},{todo.priority}
      </p>
      <input type="checkbox" defaultChecked={todo.isFinished} />
    </div>
  );
}

export default TodoItem;
