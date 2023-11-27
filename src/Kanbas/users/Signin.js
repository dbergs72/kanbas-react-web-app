import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signIn = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account");
  };
  return (
    <div className={"form-group w-25"}>
      <h1>Signin</h1>
      <input
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className={"form-control"}
        placeholder={"username"}
      />
      <input
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        type={"password"}
        className={"form-control"}
        placeholder={"password"}
      />
      <button onClick={signIn} className={"form-control btn btn-primary"}>
        Signin
      </button>
    </div>
  );
}
export default Signin;
