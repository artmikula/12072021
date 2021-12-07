import React, { useState } from "react";

function LoginForm({ Login, error, setSignupPage }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  const signup = (e) => {
    e.preventDefault();
    setSignupPage(true);
  };

  return (
    <div>
      <form id="loginform" autoComplete="off" onSubmit={submitHandler}>
        <div className="form-inner">
          {error !== "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <label htmlFor="name">ID</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <div className="buttons">
            <input type="submit" value="LOGIN" />
            <input type="submit" value="SIGNUP" onClick={signup} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
