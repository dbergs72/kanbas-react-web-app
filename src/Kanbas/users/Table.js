import React, { useState, useEffect } from "react";
import * as client from "./client";
import {
  BsFillCheckCircleFill,
  BsPencil,
  BsPlusCircleFill,
} from "react-icons/bs";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    _id: Date.now(),
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER",
  });
  const selectUser = async (usr) => {
    try {
      console.log(JSON.stringify(usr));
      const u = await client.findUserById(usr._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };
  const createUser = async () => {
    try {
      user._id = Date.now();
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          <tr>
            <td>
              <div className={"d-flex flex-row"}>
                <input
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  className={"form-control"}
                />
                <input
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  className={"form-control"}
                  type={"password"}
                />
              </div>
            </td>
            <td>
              <input
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
                className={"form-control"}
              />
            </td>
            <td>
              <input
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                className={"form-control"}
              />
            </td>
            <td>
              <select
                value={user.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
                className={"form-control"}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td className={"text-nowrap"}>
              <BsPlusCircleFill size={35} onClick={createUser} />
              <BsFillCheckCircleFill
                size={35}
                onClick={updateUser}
                className="me-2 text-success fs-1 text"
              />
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((usr) => (
            <tr key={usr._id}>
              <td>{usr.username}</td>
              <td>{usr.firstName}</td>
              <td>{usr.lastName}</td>
              <td className={"text-nowrap"}>
                <button className="btn btn-warning me-2">
                  <BsPencil onClick={() => selectUser(usr)} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
