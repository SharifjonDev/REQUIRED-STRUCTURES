import React from "react";
import { useDispatch } from "react-redux";
import { addTodo, handleEditSubmit } from "../redux/todoApp/actions/action";

const Form = ({ editFormVisibility, editTodo, setEditFormVisibility }) => {
  const [todoValue, setTodoValue] = React.useState("");
  const dispatch = useDispatch();
  const [editValue, setEditValue] = React.useState("");

  React.useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();

    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };

    dispatch(addTodo(todoObj));
    setTodoValue("");
  };

  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };

    dispatch(handleEditSubmit(editedObj));
    setEditValue("");
    setEditFormVisibility(false);
  };
  return (
    <>
      {editFormVisibility === false ? (
        <form className="form-group custom-form" onSubmit={handleSubmit}>
          <label>Add your todo-items</label>
          <div className="input-and-btn d-flex">
            <input
              type="text"
              className="form-control"
              required
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary btn-md">
              Add
            </button>
          </div>
        </form>
      ) : (
        <form className="form-group custom-form" onSubmit={editSubmit}>
          <label>Update your todo-items</label>
          <div className="input-and-btn d-flex">
            <input
              type="text"
              className="form-control"
              required
              value={editValue || ""}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary btn-md">
              UPDATE
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
