//import logo from './logo.svg';
import { useState } from 'react';
//import './App.css';

function App() {

  const [todolist, setTodolist] = useState([])

  console.log(todolist)

  const handleAdd = (text) => {
      setTodolist(prev => [...prev, {id: prev.length, text: text}])
  }

  return (
    <div className="App" style={{padding: 32}}>
      <input name="thing-to-add" />
      <button onClick={() => {
        let text = document.getElementsByName("thing-to-add")[0].value;
        document.getElementsByName("thing-to-add")[0].value = ""; 
        handleAdd(text);
      }}>Add</button>
      <ul>
      {
        todolist.map(item => 
          (
            <li key={item.id}>
              {item.text}
            </li>
          )
        )
      }
      </ul>
    </div>
  );
}

export default App;
