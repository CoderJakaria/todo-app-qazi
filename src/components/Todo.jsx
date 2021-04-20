import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import "./Todo.css";



const Todo = ({todo}) => {
    return (
        <div>

            <List className="todo_list">
                <ListItem>
                   <ListItemAvatar>
                   </ListItemAvatar> 
                    <ListItemText primary={todo} secondary="Dummy DeadLine ⏰" />
                </ListItem>
            </List>


        </div>
    )
}

export default Todo
