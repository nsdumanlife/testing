import { useState } from "react";

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <label>
        Todo
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button
        onClick={() => {
          setTodos([text, ...todos]);
          setText("");
        }}
      >
        Add
      </button>
      <div>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </div>
    </div>
  );
}

export default Todo;
