import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = (props) => {

  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        { email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      history.push("/");

    }
    else {
      alert("Invalid credentials");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }













  return (
    <div>
    <form className="Auth-form-content" onSubmit={handleSubmit}>
      <h3 className="Auth-form-title">Sign In</h3>
      <div className="text-center">


      </div>
      <div className="form-group mt-3">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control mt-1 titleplaceholder"
          placeholder="Enter email"
          onChange={onChange}
          id="email" name="email"
          value={credentials.email}
        />
      </div>
      <div className="form-group mt-3 ">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control mt-1 titleplaceholder"
          placeholder="Enter password"
          onChange={onChange}
          value={credentials.password}
          name="password" id="password"
        />
      </div>
      <div className="d-grid gap-2 mt-3">
        <button type="submit" className="btn addanote" >
          Submit
        </button>
      </div>

    </form>


    </div>


  )
}

export default Login