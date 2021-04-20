import React, { useEffect, useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import Todo from './components/Todo';
import db from './Firebase/firebase';
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");


  // When the app loads, we need to listen to the database and fetch new todos as they get adde/removed
  useEffect(()=> {
    // this code fires when app.js loads
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data() ))
      setTodos(snapshot.docs.map(doc => doc.data().todo ))
    })
  },[])


  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault() // kill the behaviour of form sumbit like refresh //


        db.collection("todos").add({
          todo: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setTodos((oldval)=>{
          return [...oldval, input]
        });

        setInput(''); // clear the input area when button was clicked //
  }

  return (
    <div className="App">
        <h1>Thank You Clever Programmer 🛩😜</h1>
        <form>
          <FormControl>
              <InputLabel>Write a ToDo</InputLabel>
              <Input type="text" value={input} onChange={handleChange} />
          </FormControl>

          <Button disabled={!input} type="submit" onClick={handleClick} variant="contained" color="primary">
              Add ToDo
          </Button>
        </form>

        <ul>
          {
            todos.map(todo => (
              <Todo todo={todo} />
            ))
          }
        </ul>
    </div>
  );
}

export default App;
