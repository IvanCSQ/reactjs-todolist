import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos, handleDeleteToDo } = props;

  return (
    <ul className="main">
      {todos.map((todo, index) => {
        return (
          <TodoCard {...props} key={index} index={index}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
