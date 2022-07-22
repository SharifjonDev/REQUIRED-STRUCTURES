import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserFetch, Delete, EditUser } from "../store/user/user-action";
import { useNavigate } from "react-router-dom";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(UserFetch());
  }, [dispatch]);

  const isLoading = useSelector((state) => state.user.isLoading);
  const users = useSelector((state) => state.user.users);

  const handleEdit = (id) => {
    dispatch(EditUser(id));
    navigate(`/edit/${id}`);
  };

  const fetchData = () => {
    if (users.length > 0) {
      return users.map((item) => (
        <div className="col-6" key={item.id}>
          <div className="card mb-4">
            <div className="card-body">
              <h3>{item.name}</h3>
              <h4>{item.username}</h4>
              <button
                className="btn btn-warning me-2"
                onClick={() => handleEdit(item.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(Delete(item.id))}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ));
    }

    return <div>No data</div>;
  };

  return (
    <div className="container my-2">
      <h1>Users</h1>
      <div className="row">
        {isLoading && (
          <span className="spinner-border spinner-border-sm text-light" />
        )}
        {!isLoading && fetchData()}
      </div>
    </div>
  );
};

export default User;
