import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (details) => {
    const email = details.loginEmail;
    const password = details.loginPassword;

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) return alert("Invalid email format");

    const userData = {
      email: details.loginEmail,
      password: details.loginPassword,
    };
    try {
      axios
        .post("https://to-do-backend-gy2p.onrender.com/api/login", userData)
        .then((res) => {
          console.log(res.data.data);
          if (res.data.status) {
            localStorage.setItem("token", JSON.stringify(res.data.token));
            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("allowed", JSON.stringify(true));
            window.alert("Login Successful");
            navigate("/main");
          } else {
            window.alert(res.data.messsage);
          }
        })
        .catch((err) => window.alert(err.response.data.message));
    } catch (e) {
      window.alert(e.message);
    }
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
