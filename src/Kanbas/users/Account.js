import * as client from "./client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Account() {
  const [account, setAccount] = useState(null);
  const save = async () => {
    await client.updateUser(account);
  };
  const fetchAccount = async () => {
    const account = await client.account();
    console.log("The account is " + account);
    setAccount(account);
  };
  useEffect(() => {
    fetchAccount();
  }, []);
  console.log("The account is: " + account);
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
            className={"form-control"}
          />
          <input
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
            className={"form-control"}
          />
          <input
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
            className={"form-control"}
          />
          <input
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
            className={"form-control"}
          />
          <input
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
            className={"form-control"}
          />
          <select
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
            className={"form-control"}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={save} className={"w-100 btn btn-success"}>
            Save
          </button>
        </div>
      )}
      <Link to={`/Kanbas/Admin/Users`} className={"w-100 btn btn-warning"}>
        Users
      </Link>
    </div>
  );
}

export default Account;
