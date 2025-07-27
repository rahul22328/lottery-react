import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [todos, SetTodos] = useState([{ task: "Sample Task", id: uuidv4(),isDone:false }]);
  let [newtodo, SetNewtodo] = useState("");

  let updateTodoValue = (event) => {
    SetNewtodo(event.target.value);
  };

  let Addtask = () => {
    if (newtodo.trim() === "") return;
    SetTodos([...todos, { task: newtodo, id: uuidv4() , isDone:false}]);
    SetNewtodo("");
  };

  let Delete= (id) =>{

    SetTodos(todos.filter((todo) => todo.id != id));

  }

  let Upper=()=>{

   
    SetTodos((todos)=>(todos.map((todo)=>{return {...todo,task:todo.task.toUpperCase()}})));

  }

  let updateOne = (id) => {
  SetTodos((prevTasks) =>
    prevTasks.map((todo) =>
      todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo
    )
  );
};

let toggleDone = (id) => {
  SetTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    )
  );
};



  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>📝 Todo List</h2>
        <input
          type="text"
          placeholder="Add a task..."
          value={newtodo}
          onChange={updateTodoValue}
          style={styles.input}
        />
        <button onClick={Addtask} style={styles.button}>Add Task</button>
        <hr style={styles.hr} />
        <h4 style={styles.subheading}>Tasks</h4>
        <ul style={styles.ul}>
          {todos.map((todo) => (
            <li key={todo.id} style={styles.li}><span style={{textDecoration: todo.isDone ? "linethrough": "none"}}>{todo.task}</span>
            <button style={styles.deleteButton} onClick={()=>{Delete(todo.id)}}>Delete</button>
               <button style={styles.deleteButton} onClick={()=>{updateOne(todo.id)}}>Update</button>
               <button style={styles.doneButton} onClick={() => toggleDone(todo.id)}>{todo.isDone ? "Undo" : "Done"}</button>
            </li>
          ))}
        </ul>
        <button onClick={Upper}>UppercaseAll</button>
      </div>
    </div>
  );
}

// 💄 Inline CSS Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    minHeight: "100vh",
    backgroundColor: "#f2f4f7",
    paddingTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    width: "90%",
    maxWidth: "400px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  subheading: {
    marginTop: "20px",
    color: "#444",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  },
  hr: {
    marginTop: "20px",
    marginBottom: "10px",
    borderColor: "#ddd",
  },
  ul: {
    listStyle: "none",
    padding: 0,
  },
  li: {
    background: "#f8f8f8",
    padding: "10px",
    marginBottom: "8px",
    borderRadius: "6px",
    color: "#333",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },

  deleteButton: {
  marginLeft: "10px",
  padding: "6px 10px",
  backgroundColor: "#ff4d4d",   // soft red
  color: "white",
  border: "none",
  borderRadius: "4px",
  fontSize: "14px",
  cursor: "pointer",
  // Optional: hover effect

 

  transition: "background-color 0.3s",
},

doneButton: {
  marginLeft: "10px",
  padding: "6px 10px",
  backgroundColor: "#4cafaf",
  color: "white",
  border: "none",
  borderRadius: "4px",
  fontSize: "14px",
  cursor: "pointer",
  transition: "background-color 0.3s",
},

};
