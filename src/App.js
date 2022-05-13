import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from "react";
import Todo from './components/Todo';

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  
  const handleNewTodoSubmit = (e) =>{
    e.preventDefault();
    if (newTodo.length == 0) return;
    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos([...todos, todoItem]);
    setNewTodo("");

    
  }; 
  
  function destroy(delId) {
    setTodos(todos.filter((todo, i) => i !== delId));
  };

  const handleToggle = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx == i) {
        todo.complete = !todo.complete;
      }
      return todo
    });
    setTodos(updatedTodos);
    

  }

  return (
    <div className="App">
      <h1>To Do List:</h1>
      <form onSubmit={(e) => {
        handleNewTodoSubmit(e);
      }}>
        <input onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        type="text" 
        value={newTodo}/>
        <div>
          <button className='my-2'>Add a task!</button>
        </div>
        
      </form>

      {
      todos.map((todo, i) => {
        const todoClasses = [];
        if (todo.complete){
          todoClasses.push("text-decoration-line-through");
        }

        return <Todo 
        key={i} 
        todo={todo} 
        handleToggle={handleToggle} 
        i={i} 
        destroy={destroy} />
        })}
        </div>

  );}



export default App;