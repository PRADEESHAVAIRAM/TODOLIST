import React , {useState} from "react";
import Listitem from './TODO/Listitem';
import "./App.css";

export default function App(){
  const [todoName, setTodoName] = useState("");
  const [List,setList] = useState([]);

  const updateTodoName = (e) =>{
    setTodoName(e.target.value);
  };
  const addTodo = () => {
    setList([
      ...List,
      {
        name:todoName,
        completed: false
  }
]);
    setTodoName("");
  };

  const onDelete = item => {
    let newList = List.filter(Listitem => {
      if (Listitem.name === item.name){
        return false;
      }
      return true;
    });
    setList(newList);
  };

 return(
  <center>
  <div className="todo-list">
    <h3>TODO LIST</h3>
    <input className="input-wrap"
    type="text"
    placeholder="Here..."
    value={todoName}
    onChange={updateTodoName}
    />
    <button onClick={addTodo}>+ </button>
    {
      List.map( item => (<Listitem obj={item} onDelete={onDelete}/>))
    }
    
  </div>
  </center>
 );
};


