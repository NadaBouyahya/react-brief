import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import TodoInput from './ToDoInput';
import TodoList from './ToDoList';

function TodoContainer() {

  var todoData = JSON.parse(localStorage.getItem("l"));

  // // const [todo_list, setTodo_list] = useState(todoData);
  const [todo_list, setTodo_list] = useState([{"id":1, "name":"l", "status":0}]);

  function add_todo(e) {
    var input = e.target.previousSibling;
    var myObject = {
      "id": todo_list[todo_list.length - 1].id + 1,
      "name": input.value,
      "status": 0
    };
    setTodo_list([...todo_list, myObject]);
  }
  function deleteItem(id) {
    var list = todo_list;
    list.splice(todo_list.indexOf(id), 1);
    setTodo_list(
      [
        // ...todo_list.slice(0, todo_list.indexOf(id) - 1),
        // ...todo_list.slice(todo_list.indexOf(id), todo_list.length - 1)
        // ...todo_list.splice(1, todo_list.indexOf(id))
        ...list
      ]
    )
  }

  useEffect(() => {
    localStorage.setItem("l", JSON.stringify(todo_list));
    console.log(todo_list)
  }, [todo_list]);


  return (
    <>
      <TodoInput add_todo={add_todo} />
      <TodoList myList={todo_list} deleteItem={deleteItem} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoContainer />
);