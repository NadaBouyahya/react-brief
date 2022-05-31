import React from "react";

function ToDoItem(props) {
    var currentId = props.id;
    return (
        <li><input type="checkbox" defaultChecked={(props.status === 1) ? "defaultChecked" : ""} />
            <span>{props.name}</span>
            <input onClick={()=>props.deleteItem(currentId)} type="button" value="remove" />
        </li>
    )
}
export default ToDoItem;