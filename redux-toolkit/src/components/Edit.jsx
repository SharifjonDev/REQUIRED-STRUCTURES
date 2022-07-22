import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewUser, EditUser } from "../store/user/user-action";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  const [inputName, setName] = useState("");
  const [InputUsername, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: inputName,
      username: InputUsername,
    };
    dispatch(addNewUser(newUser));
    setName("");
    setUsername("");
    navigate("/user");
  };

  useEffect(() => {
    dispatch(EditUser());
  }, [dispatch]);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-6 offset-3">
          <h2>Update a new blog</h2>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    required={true}
                    type="text"
                    className="form-control"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    value={inputName}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    required={true}
                    type="text"
                    className="form-control"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={InputUsername}
                  />
                </div>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="btn btn-primary"
                >
                  {isLoading && (
                    <span className="spinner-border spinner-border-sm text-light" />
                  )}
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
