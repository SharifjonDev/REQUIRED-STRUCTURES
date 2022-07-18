import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-icons-kit";
import { edit2 } from "react-icons-kit/feather/edit2";
import { trash } from "react-icons-kit/feather/trash";
import { removeTodo, handleCheckbox } from "../redux/todoApp/actions/action";

const Todos = ({ editFormVisibility, handleEditClick }) => {
  const todos = useSelector((state) => state.operationReducer);
  const dispatch = useDispatch();

  return todos.map((todo) => (
    <div key={todo.id} className="todo-box" style={{ marginBottom: "10px" }}>
      <div className="content">
        {editFormVisibility === false && (
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(handleCheckbox(todo.id))}
          />
        )}
        <p
          style={
            todo.completed === true
              ? {
                  textDecoration: "line-through",
                  margin: "0px",
                  paddingLeft: "10px",
                }
              : { textDecoration: "none", margin: "0px", paddingLeft: "10px" }
          }
        >
          {todo.todo}
        </p>
      </div>
      <div className="actions-box">
        {editFormVisibility === false && (
          <>
            <span>
              <Icon onClick={() => handleEditClick(todo)} icon={edit2} />
            </span>
            <span>
              <Icon
                onClick={() => dispatch(removeTodo(todo.id))}
                icon={trash}
              />
            </span>
          </>
        )}
      </div>
    </div>
  ));
};

export default Todos;
