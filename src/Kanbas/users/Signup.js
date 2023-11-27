import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      console.log(credentials);
      await client.signup(credentials);
      console.log("here2");
      navigate("/Kanbas/Login/Account");
    } catch (err) {
      console.log("here3");
      setError(err.response.data.message);
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
      <button onClick={signup} className={"form-control btn btn-primary"}>
        Signup
      </button>
    </div>
  );
}

export default Signup;
