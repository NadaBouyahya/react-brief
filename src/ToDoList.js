import React from "react";
import ToDoItem from "./ToDoItem";

function TodoList(props){
    return(
        <ul>
            {props.myList.map((item) => <ToDoItem key={item.id} deleteItem={props.deleteItem} id={item.id} name={item.name} status={item.status}/>)}
        </ul>
    )
}

export default TodoList;