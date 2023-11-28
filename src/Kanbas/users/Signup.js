import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    _id: Date.now(),
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      console.log("Signing up");
      await client.signup(credentials);
      navigate("/Kanbas/Account");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input
        value={credentials.username}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            username: e.target.value,
          })
        }
        className={"form-control"}
      />
      <input
        value={credentials.password}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            password: e.target.value,
          })
        }
        className={"form-control"}
        type={"password"}
      />
      <button onClick={signup} className={"btn btn-success w-100"}>
        Signup
      </button>
    </div>
  );
}

export default Signup;
