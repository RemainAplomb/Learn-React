import React, { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import {registerRoute} from "../utils/APIRoutes";


import Logo from "../assets/logo1.png";

function Register() {
  const navigate = useNavigate();

  const [ values, setValues ] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      console.log("In validation", registerRoute)
      const {password, username, email} = values;
      const {data} = await axios.post(registerRoute, {
        username, 
        email, 
        password,
      });
      
      if (data.status === false) {
        toast.error( data.msg, toastOptions)
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
      }

      // navigate("/");
    }
  };

  const handleValidation = () => {
    const {password, confirmPassword, username, email} = values;
    if(password !== confirmPassword) {
      toast.error("Password and Confirm Password doesn't match.", toastOptions);
      return false;
    } else if (password.length <= 8 ){
      toast.error("Password should at least be 8 characters long.", toastOptions);
      return false;
    } else if (username.length <= 3 ){
      toast.error("Username should at least be 3 characters long.", toastOptions);
      return false;
    } else if (email <= 3 ){
      toast.error("Missing email input.", toastOptions);
      return false;
    };

    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [ event.target.name ]:event.target.value});

  };

  return (
    <>
    <FormContainer>
      <form onSubmit= {(event)=>handleSubmit(event)}>
        <div className="brand">
        <img src={Logo} alt="Logo" />
          <div className="formTitle">
            <h1>Aplomb</h1>
            <p>Start your journey with us!</p>
          </div>
        </div>
        <input 
          type="text" 
          placeholder="Username" 
          name="username" 
          onChange= {(inputUsername) => handleChange(inputUsername)}
        />
        <input 
          type="email" 
          placeholder="Email" 
          name="email" 
          onChange= {(inputEmail) => handleChange(inputEmail)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          name="password" 
          onChange= {(inputPassword) => handleChange(inputPassword)}
        />
        <input 
          type="password" 
          placeholder="Confirm Password" 
          name="confirmPassword" 
          onChange= {(inputConfPassword) => handleChange(inputConfPassword)}
        />
        <button type= "submit">
          Create User
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </FormContainer>
    <ToastContainer>
    </ToastContainer>
    </>
  )
}

// Powder Blue: #C4E6ED
// Bright Turquoise: #14E1E5
// Blue Lagoon: #04748B
// Blue Chill: #0A8C94


const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #04748B;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    .formTitle{
      h1 {
        font-size: 2.5rem;
        color: black;
        text-transform: uppercase;
      }
      p {
        font-size: 0.8rem;
        font-weight: 600;
        text-align: center;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #C4E6ED;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      padding: 1rem;
      border: none;
      width: 100%;
      border-bottom: 1px solid black;
      border-radius: 0.4rem;
    }
    button {
      background-color: #0A8C94;
      color:white;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      border: none;
      border-radius: 0.4rem;
      padding: 0.8rem;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #04748B;
      }
    }
    p {
      font-size: 0.9rem;
      text-align: center;
    }
  }
`;


export default Register