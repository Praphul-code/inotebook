import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const SignUp = (props) => {
  const [credentials, setCredentials] = useState({name:"", email: "", password: "", cpassword:"" })
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const  {name, email, password}= credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser",{
  
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {name, email, password })
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      history.push("/");
      props.showAlert("Account Created Successfully ", "success")
    }
    else {
    props.showAlert("Invalid Credntials", "danger")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }












  return (
    <div>
    <form className="Auth-form-content" onSubmit={handleSubmit}>
      <h3 className="Auth-form-title ratio ratio-21x9 text-center   rounded shadow-lg">Log In</h3>
      <div className="text-center">


      </div>
      <div className="form-group mt-3  ">
        <label htmlFor="name  ">Name</label>
        <input
          type="name"
          className="form-control mt-1 titleplaceholder"
          placeholder="Enter User Name..."
          onChange={onChange}
          id="name" name="name"
        
        />
      </div>
      <div className="form-group mt-3  ">
        <label htmlFor="email  ">Email</label>
        <input
          type="email"
          className="form-control mt-1 titleplaceholder"
          placeholder="Enter Your Email..."
          onChange={onChange}
          id="email" name="email"
      
        />
      </div>
      <div className="form-group mt-3 ">
        <label htmlFor="password   ">Password</label>
        <input
          type="password"
          className="form-control mt-1 titleplaceholder"
          placeholder="Enter password"
          onChange={onChange}
        
          name="password" id="password"
          minLength={5}
          required
        />
      </div>
      <div className="form-group mt-3 ">
        <label htmlFor="cpassword   ">Confirm Password</label>
        <input
          type="password"
          className="form-control mt-1 titleplaceholder"
          placeholder=" Confirm password"
          onChange={onChange}
        
          name="cpassword" id="cpassword"
          minLength={5}
          required
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

export default SignUp