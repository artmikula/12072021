import React from "react";
import { useState } from "react";

function SignupPage({ Signup, error, setSignupPage }) {
  const [newUserData, setNewUserData] = useState({
    name: "",
    password: "",
    passwordConfirm: "",
  });

  const signupHandler = (e) => {
    e.preventDefault();
    Signup(newUserData);
  };

  return (
    <div className="container">
      <form id="loginform" autoComplete="off" onSubmit={signupHandler}>
        <div className="form-inner">
          {error !== "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <label htmlFor="name">ID</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) =>
                setNewUserData({ ...newUserData, name: e.target.value })
              }
              value={newUserData.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setNewUserData({ ...newUserData, password: e.target.value })
              }
              value={newUserData.password}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirm">Confirm Password : </label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              onChange={(e) =>
                setNewUserData({
                  ...newUserData,
                  passwordConfirm: e.target.value,
                })
              }
              value={newUserData.passwordConfirm}
            />
          </div>
          <input type="submit" value="Signup" />
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
