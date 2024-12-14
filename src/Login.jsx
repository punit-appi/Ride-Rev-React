
import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    languages: []
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      
      setState((prevState) => ({
        ...prevState,
        languages: checked
          ? [...prevState.languages, value]
          : prevState.languages.filter((lang) => lang !== value),
      }));
    } else if (type === "radio") {
     
      setState({ ...state, [name]: value });
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, gender, languages } = state;


    if (!name || !email || !password || !gender || languages.length === 0) {
      alert("All fields are required!");
      return;
    }

    try {
      const payload = { name, email, password, gender, languages };
      const { data } = await axios.post("http://localhost:5000/users", payload);

      console.log("User registered successfully:", data);
      alert("Registration successful!");
      navigate("/"); 
      
    } catch (err) {
      console.error("Error during registration:", err);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div className="sidebar">
        <h2>
          <img
            src="https://download.logo.wine/logo/KTM/KTM-Logo.wine.png"
            alt="KTM Logo"
            height="50px"
            width="100px"
          />
        </h2>
        <ul>
          <li>
            <a href="/">
              <button>Home</button>
            </a>
          </li>
          <li>
            <a href="/register">
              <button>Register</button>
            </a>
          </li>
          <li>
            <a href="/Newmodels">
              <button>New Models</button>
            </a>
          </li>
          <li>
            <a href="/Bookservice">
              <button>Book Service</button>
            </a>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <form className="form-container" onSubmit={handleSubmit}>
          <h2 style={{ color: "white" }}>Sign in</h2>
          <label style={{ color: "white" }}>Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
          <label style={{ color: "white" }}>Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <label style={{ color: "white" }}>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
         

          <div className="reg">
            <label style={{ color: "white" }}>Gender:</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={handleChange}
            />
            <label htmlFor="male" style={{ color: "white" }}>
              Male
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={handleChange}
            />
            <label htmlFor="female" style={{ color: "white" }}>
              Female
            </label>
          </div>

          <div id="lan">
            <label style={{ color: "white" }}>Languages:</label>
            <input
              type="checkbox"
              id="kannada"
              value="Kannada"
              onChange={handleChange}
            />
            <label htmlFor="kannada" style={{ color: "white" }}>
              Kannada
            </label>
            <input
              type="checkbox"
              id="english"
              value="English"
              onChange={handleChange}
            />
            <label htmlFor="english" style={{ color: "white" }}>
              English
            </label>
            <input
              type="checkbox"
              id="bahubali"
              value="Bahubali"
              onChange={handleChange}
            />
            <label htmlFor="bahubali" style={{ color: "white" }}>
              Bahubali
            </label>
          </div>

          <input type="submit" value="SUBMIT" />

          
        </form>
      </div>
    </div>
  );
}

export default Login;
