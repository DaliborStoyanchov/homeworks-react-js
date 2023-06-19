import TodoItem from "../../components/TodoItem/TodoItem";
import "./TodoPage.css";

function TodoPage() {
  const todoArray = [
    {
      id: 1,
      text: "Todo1",
      isFinished: false,
      author: "string",
      priority: "high",
    },
    {
      id: 2,
      text: "Todo2",
      isFinished: false,
      author: "string",
      priority: "high",
    },
    {
      id: 3,
      text: "Todo3",
      isFinished: true,
      author: "string",
      priority: "high",
    },
  ];

  const totalTodos = todoArray.length;
  const finishedTodos = todoArray.filter((todo) => todo.isFinished).length;
  const unfinishedTodos = totalTodos - finishedTodos;

  return (
    <>
      <h2>Todo List: </h2>
      <ul>
        <li>
          {todoArray.map((todo, i) => (
            <TodoItem key={todo.id + i} todo={todo} />
          ))}
        </li>
      </ul>
      <div>
        <p>Total Todos: {totalTodos}</p>
        <p>Finished Todos: {finishedTodos}</p>
        <p>Unfinished Todos: {unfinishedTodos}</p>
      </div>
    </>
  );
}

export default TodoPage;
