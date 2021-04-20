import React, { useState } from 'react';
import { Button, List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core';
import "./Todo.css";
import db from "../Firebase/firebase";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {makeStyles} from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));



const Todo = ({todo}) => {
    const classes = useStyles()

    const [open, setOpen] = useState(false)
    const [input, setInput] = useState("")

    const handleOpen = () => {
        setOpen(true)
    }


    const updateTodo = () => {
        // update the todo with new input text //
        db.collection("todos").doc(todo.id).set({
            todo: input
        }, {merge: true});

        setOpen(false);
    }

    return (
        <div>

            <Modal
              open={open}
              onClose={e => setOpen(false)}
            >
                <div className="edit_area">
                    <h1 className="edit_title">Edit Here</h1>
                    <input placeholder={todo.todo} value={input} onChange={e => setInput(e.target.value)} />
                    <Button className="update_btn" onClick={updateTodo} variant="contained" color="secondary" >Update ToDo</Button>
                </div>
            </Modal>

            <List className="todo_list">
                <ListItem className="list_item">
                   <ListItemAvatar>
                   </ListItemAvatar> 
                    <ListItemText primary={todo.todo} secondary="Dummy DeadLine ⏰" />
                </ListItem>
                
                <div className="btn_wrapper">
                    <Button style={{marginTop: "28px"}} onClick={e => setOpen(true)} variant="contained" color="secondary">Edit</Button>
                    <DeleteForeverIcon className="delete_icon" onClick={event => db.collection("todos").doc(todo.id).delete() } />
                </div>
            </List>


        </div>
    )
}

export default Todo
