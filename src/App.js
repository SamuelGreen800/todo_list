import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from "react";

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
          todoClasses.push("text-decoration-line-through");}

        return (<div key={i} className="mx-auto my-2">
          <table className='d-flex justify-content-center'>
                <tr>
                  <td><input checked={todo.complete} type="checkbox" className='mx-2 justify-content-center' onChange={(e) => {
                    handleToggle(i);
                  }}></input></td>

                  <td className={todoClasses.join(" ")}>{todo.text}</td>  
                  <td><button className='mx-4 btn btn-sm  btn-danger' onClick={(e) => {
                    destroy(i);}}>Delete</button>
                  </td>
              </tr>
              </table>
          </div>);
          
        })}
        </div>

  )};



export default App;