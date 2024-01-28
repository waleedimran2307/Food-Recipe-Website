import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container w-50 bg-secondary my-4 py-2 d-flex justify-content-center">
      <form className="p-3 w-75 mt-4 mx-5 ">
        <h1 className="text-center mb-4">Sign up Page</h1>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Your Name:
          </label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Father Name:
          </label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input type="password" className="form-control" />
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <Link to="/login">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </Link>

        <Link to="/">
          <button type="submit" className="btn btn-success mx-1">
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
