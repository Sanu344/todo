import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (details) => {
    const email = details.signupEmail;
    const password = details.signupPassword;
    const password2 = details.confirmPassword;

    console.log(details.signupEmail, " ", details.signupPassword);

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) return alert("Invalid email format");

    if (password !== password2) return alert("Password Mismatch");

    alert("Sucessfully registered");
    navigate("/");
  };

  return (
    <>
      <div className="signupMain">
        <center>
          <div className="signupBox">
            <div className="membersignup">New User</div>
            <form className="signupForm" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("signupEmail")}
                type="text"
                className="signupEmail"
                placeholder="Enter Email"
                required
              />
              <input
                {...register("signupPassword")}
                type="Password"
                className="signupPassword"
                placeholder="Enter Password"
                required
              />
              <input
                {...register("confirmPassword")}
                type="password"
                className="confirmPassword"
                placeholder="Confirm Password"
                required
              />
              <button type="submit" className="signupButton">
                Signup
              </button>
            </form>
          </div>
          <div className="loginTxt" onClick={() => navigate("/")}>
            Click her to Login
          </div>
        </center>
      </div>
    </>
  );
}

export default Signup;
