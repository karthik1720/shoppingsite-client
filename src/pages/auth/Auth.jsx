import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

import axios from "axios";
function Auth() {
  const navigate = useNavigate();
  axios.defaults.baseURL = "https://shopnkp1.herokuapp.com/api";
  // const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  // const [error, setError] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    repassword: "",
    username: "",
  });

  const [type, setType] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    // setLoading(true);
    e.preventDefault();
    if (type) {
      await axios.post("/auth/register", user).then((res) => {
        setResponse(res.data);
        if (!res.data.error) navigate("/");
      });
    } else {
      await axios.post("/auth/login", user).then((res) => {
        document.cookie = `access_token = ${res.data.token}`;
        localStorage.setItem("access-token", res.data.token);
        setResponse(res.data);
        if (!res.data.error) navigate("/");
      });
    }
    // setLoading(false);
  };

  const switchMode = () => {
    setType(!type);
    console.log(type);
  };

  return (
    <div className="LoginContainer">
      <div className="LoginWrapper">
        <span className="LoginSpan">{type ? "Register" : "Login"}</span>
        <div className="LoginItems">
          <form action="" className="LoginForm">
            {type && (
              <input
                type="text"
                name="username"
                onChange={handleChange}
                value={user.username}
                placeholder="Name"
                className="LoginInput"
              />
            )}
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={user.email}
              placeholder="Email"
              className="LoginInput"
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={user.password}
              placeholder="Password"
              className="LoginInput"
            />
            {type && (
              <input
                type="password"
                name="repassword"
                onChange={handleChange}
                value={user.repassword}
                placeholder="Reenter password"
                className="LoginInput"
              />
            )}
            <button onClick={handleSubmit} className="LoginButton">
              {type ? "Register" : "Login"}
            </button>
          </form>
          {response && <span>{response.message}</span>}
          <p onClick={switchMode}>
            {type ? "Don't" : "Do"} you have an account?
            {type ? " Login" : " Register"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;
