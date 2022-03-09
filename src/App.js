import React, {useState} from "react"
import './App.css';

function App() {



  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);


  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    const newValue =
    {
      value: newTodo,
      completed: false, 
    }
    setTodos([...todos, newValue]);

    setNewTodo("")
  };
  
  const handleTodoDelete = (id) => {
    setTodos(todos.filter((todo, i) => {
      return id !== i;
    }))
}
   const handleToggleComplete = (idx) => {

       const updateTodos = todos.filter((todo,i) => {
          if (idx !== i) {
            
            todo.completed = !todo.completed;

          }
           
          return todo;
          
       });

       setTodos(updateTodos);
       
   }

  return (
    <div style={{ textAlign: "center" }}>
      <form
         onSubmit={(event) => {handleNewTodoSubmit(event);}}>
        <input onChange={(event) => {
            setNewTodo(event.target.value);
          }}
          type="text"
          value={newTodo}
        />

  
        <div>
            <button>Add</button>
        </div>
      </form> 

      {todos.map((todo, i) => {
        return (

          <div key={i}>
          
          
            <span>{todo.value}</span>

            <input type="checkbox" checked={todo.completed} onChange={handleToggleComplete} />
          {  

              todo.completed ?
            <p>Completed</p>:
            'Not Completed'
      }  


            <button 
                onClick={(event) => {
                   handleTodoDelete(i);
                }}
                style={{ marginLeft: "10px"}}
            >
                Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
