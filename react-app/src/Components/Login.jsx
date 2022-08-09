
import React, { useState } from "react"
import  server  from "../API/server.js"
import { useFormik } from 'formik';

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const signup_data = useFormik({
    initialValues: {
      name: '',
      password: '',
      email:'',
      role:'',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    //  const response = await server.post('/api/v1/register',{
        //       firstname:
        //     });
    },
  });

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
//   async function createUser(e) {
//     e.preventDefault()
//     const response = await server.post('/api/v1/register',{
//       firstname:
//     });

//     console.log(response.data);
// }
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <a className="text-primary" onClick={changeAuthMode}>
                Sign Up
              </a>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              <a href="#">Forgot Password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <a className="text-primary" onClick={changeAuthMode}>
              Sign In
            </a>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              onChange={signup_data.handleChange}
              value={signup_data.values.name}
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Role</label>
            <input
              type="text"
              onChange={signup_data.handleChange}
              value={signup_data.values.role}
              className="form-control mt-1"
              placeholder="Role"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              onChange={signup_data.handleChange}
              value={signup_data.values.email}
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              onChange={signup_data.handleChange}
              value={signup_data.values.password}
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onSubmit={signup_data.handleSubmit}>
              Submit
            </button>
          </div>
          {/* <p className="text-center mt-2">
            <a href="#">Forgot Password?</a>
          </p> */}
        </div>
      </form>
    </div>
  )
}