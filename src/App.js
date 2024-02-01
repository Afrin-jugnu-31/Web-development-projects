import React,{ useEffect, useState } from 'react';
import './App.css';
import Form from "./components/form";
import TodoList from './components/TodoList';
function App() {
  
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredtodos] = useState([]);
  useEffect(() => {
    filterHandler();
  },[todos, status]);
  const filterHandler =() => {
    switch('status'){
      case 'completed':
        setFilteredtodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredtodos(todos.filter(todo => todo.completed === false))
        break;
        default:
          setFilteredtodos(todos);
    }
  }
  return (
  
    <div className="App">
      <header>
        <h1>MY Todo List </h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} 
      setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
      
          </div>
  );
}

export default App;
