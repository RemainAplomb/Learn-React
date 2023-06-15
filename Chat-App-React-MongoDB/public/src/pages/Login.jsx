import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import Logo from "../assets/logo1.png";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form");
  };

  const handleChange = (event) => {

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
          onChange= {(e) => handleChange(e)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          name="password" 
          onChange= {(e) => handleChange(e)}
        />
        <button type= "submit">
          Log in
        </button>
        <p>
          Doesn't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </FormContainer>
    </>
  )
}

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


export default Login