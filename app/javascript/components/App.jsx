import React, { useState, useMemo } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React basics', completed: false },
    { id: 2, text: 'Build a todo app', completed: false },
    { id: 3, text: 'Master React hooks', completed: true }
  ]);

  const [inputValue, setInputValue] = useState('');

  // add todo logic
  const addTodo = () => {
    if(inputValue.trim() == ''){ return nil }

    const newTodo = {
      id: Date.now(), text: inputValue, completed: false
    }
    setTodos([...todos, newTodo]);
    setInputValue('');
  };
  // delete todo
  const deleteTodo = (id) => {
    console.log('deleting...', id);
  }

  const sort = useMemo(() => {
    return todos.map((todo) => { todo.id }).sort();
  }, [todos]);

  return (
    <div className='todo-app'>
      <h1>My ToDO list</h1>
      <p>Welcome to Rails + React App</p>

      {/* this is jsx comment */}
      <div className="todo-container">
        <h2>Add a new todo</h2>
        <input type="text"
          placeholder='Enter a todo...'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>

        <h2>My Todos {todos.length}</h2>
        <ul>
          {
            todos.map(todo => (
              <li key={todo.id}>
                {todo.text} {todo.completed ? '✅' : '⏳'}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
