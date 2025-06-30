import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import logo from "../../assets/logo.png";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-row">
      <div className="bluePanel">
        <img src={logo} alt="Rigrescue Logo" className="logo" />
      </div>
      <div className="formPanel">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            if (email === "admin@tikare.com" && password === "123456") {
              navigate("/dashboard", { replace: true });
            } else {
              alert("Invalid credentials");
            }
          }}
        >
          <div className=" d-flex justify-content-center mb-5 ">
          <h2 className="fs-2 headFont" >Admin Login</h2>
          </div>

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="passwordWrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="togglePassword"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          {/* <div className="forgot">forgot password?</div> */}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
