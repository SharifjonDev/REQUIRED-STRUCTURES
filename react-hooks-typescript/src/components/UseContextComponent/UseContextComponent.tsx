import React, { useContext, useState } from "react";
import UserContext, { UserState } from "./store/store";

function CostumerComponent() {
  const user: UserState = useContext(UserContext);

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );
}

function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    first: "Jame",
    last: "Smith",
  });

  return (
    <UserContext.Provider value={user}>
      <CostumerComponent />
      <button
        onClick={() =>
          setUser({
            first: "Josie",
            last: "Walse",
          })
        }
      >
        Change context
      </button>
    </UserContext.Provider>
  );
}

export default UseContextComponent;
