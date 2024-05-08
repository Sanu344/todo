import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./login.css";
function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (details) => {
    const email = details.loginEmail;
    const password = details.loginPassword;

    console.log(details.loginEmail, " ", details.loginPassword);

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) return alert("Invalid email format");

    navigate("/main");
  };

  return (
    <>
      <div className="loginMain">
        <center>
          <div className="loginBox">
            <div className="memberLogin">Member Login</div>
            <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("loginEmail")}
                type="text"
                className="loginEmail"
                placeholder="Enter Email"
                required
              />
              <input
                {...register("loginPassword")}
                type="password"
                className="loginPassword"
                placeholder="Enter Password"
                required
              />
              <button type="submit" className="loginButton">
                Login
              </button>
            </form>
          </div>
          <div className="signupTxt" onClick={() => navigate("/signup")}>
            Click her to Signup
          </div>
        </center>
      </div>
    </>
  );
}

export default Login;
