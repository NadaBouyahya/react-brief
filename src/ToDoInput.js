import React from "react";
import styles from './todoInput.module.css';

function ToDoInput(props) {
    return (<>
        <div className={styles.content}>
            <h1>My to do list </h1>
            <p>Enter your task here</p>
            <form>
                <input className={styles.inputStyle} type='text' name="todo_item" />
                <input onClick={props.add_todo} className={styles.buttonStyle} type='button' name='button' value="ADD" />
            </form>
        </div>
    </>)
};

export default ToDoInput;