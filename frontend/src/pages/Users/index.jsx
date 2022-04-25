import React, { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_USERS_QUERY, CREATE_USER } from "../../graphql/queries";

const Users = () => {
  const [user, setUser] = useState({ name: "", phone: "", email: "" });

  const [getUsers, { data, error }] = useLazyQuery(GET_USERS_QUERY);
  const [isLoading, setIsLoading] = useState(false);

  //data, loading, error
  const [createOneUser, createPayload] = useMutation(CREATE_USER);

  const createUser = () => {
    createOneUser({ variables: { ...user } });
    setTimeout(() => {
      getUsers();
      setUser({ name: "", phone: "", email: "" });
    }, 500);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="home">
      <h1>Users</h1>
      <div className="users-list">
        {data ? (
          <ul>
            {data.users.nodes.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : error ? (
          <h1>An error was found</h1>
        ) : (
          ""
        )}

        <div>
          <h3>Create User</h3>

          <div>
            <label>Name</label>
            <input
              value={user.name || ""}
              type="text"
              placeholder="Insert the user name..."
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>

          <div>
            <label>Phone</label>
            <input
              value={user.phone || ""}
              type="text"
              placeholder="Insert the user phone..."
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
          </div>

          <div>
            <label>E-mail</label>
            <input
              value={user.email || ""}
              type="text"
              placeholder="Insert the user e-mail..."
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <button onClick={() => createUser()}>
            {(!createPayload.loading || createPayload.data) && "Save"}
            {createPayload.loading && "Submitting..."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
