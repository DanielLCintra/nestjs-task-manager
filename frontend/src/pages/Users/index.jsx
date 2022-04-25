import React, { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import {
  GET_USERS_QUERY,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../../graphql/queries";
import "./styles.css";

const Users = () => {
  const [user, setUser] = useState({ name: "", phone: "", email: "" });

  const [getUsers, { data, error }] = useLazyQuery(GET_USERS_QUERY);
  const [isLoading, setIsLoading] = useState(false);

  //data, loading, error
  const [createOneUser, createPayload] = useMutation(CREATE_USER);
  const [updateOneUser, updatePayload] = useMutation(UPDATE_USER);
  const [deleteOneUser, deletePayload] = useMutation(DELETE_USER);

  const createUser = () => {
    createOneUser({ variables: { ...user } });
    setTimeout(() => {
      getUsers();
      setUser({ name: "", phone: "", email: "" });
    }, 500);
  };

  const updateUser = () => {
    console.log("user", user);
    updateOneUser({
      variables: {
        id: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email,
      },
    });
    setUser({ name: "", phone: "", email: "" });
  };

  const deleteUser = (id) => {
    deleteOneUser({
      variables: {
        id,
      },
    });

    setTimeout(() => {
      getUsers();
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
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Phone</th>
                <th>E-mail</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {data.users.nodes.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name} </td>
                  <td>{user.phone} </td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => setUser(user)}>Editar</button>
                    <button onClick={() => deleteUser(user.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

          <button onClick={() => (!!user.id ? updateUser() : createUser())}>
            {!!user.id ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
