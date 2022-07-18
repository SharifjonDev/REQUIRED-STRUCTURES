import React, { useState } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./redux/todoApp/actions/action";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationReducer);
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState("");

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  return (
    <div className="wrapper">
      <br />
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
      <Form
        editFormVisibility={editFormVisibility}
        editTodo={editTodo}
        setEditFormVisibility={setEditFormVisibility}
      />
      <Todos
        handleEditClick={handleEditClick}
        editFormVisibility={editFormVisibility}
      />
      {todos.length > 0 && (
        <button
          className="btn btn-danger btn-md delete-all"
          onClick={() => dispatch(deleteAll())}
        >
          Delete All
        </button>
      )}
    </div>
  );
}

export default App;
