import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addItem() {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  }

  function deleteItem(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleDone(id) {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  }

  return (
    <div className="main">
      
      <section id="center">
        <div>
          <h1>TODO App</h1>
        </div>

        <div className='todo-list'>
          {todos.map((todo) => (
            <div key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleDone(todo.id)}
              />
              <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                {todo.text}
              </span>
              <button className="delete" onClick={() => deleteItem(todo.id)}>Delete</button>
            </div>
          ))}
        </div>

        <div>
          <input
            type="text"
            placeholder='Enter the item to be added'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="add" onClick={addItem}>Add Item</button>
        </div>
      </section>
    </div>
  )
}

export default App