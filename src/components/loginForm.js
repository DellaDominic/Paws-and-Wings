import React, { useContext, useEffect, useState } from "react";
import {
  BoldLink,
  BoldLinkError,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { redirect } from "react-router-dom";
import "../styles/accountBox.css";
import Marginer from "./marginer";
import UserType from "./UserType";
import { AccountContext } from "./accountContext";
import { IonSegment } from "@ionic/react";


export function LoginForm(props) {

  useEffect ( () => {
    if(localStorage.getItem('userID')) {
      window.location.replace('/home')
      window.open(window.location.href + '/user-type', '_self');
    }
  }, [])
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [userInput, setUserInput] = useState({ email: '', password: '' });
  const [errorMsg, setErrorMessage] = useState('');
  let username;

  const registeredUserArray = [
    { email: 'test1@gmail.com', password: 'test1', name: 'TEST1' },
    { email: 'test2@gmail.com', password: 'test2', name: 'TEST2' },
    { email: 'ranjan@gmail.com', password: 'Ranjan@123', name: 'RANJAN' },
    { email: 'shalini@gmail.com', password: 'Shalini@123', name: 'SHALINI' },
  ]

  const handleEmailInput = (e) => {
    e.preventDefault();
    setEmailField(e.target.value);
    setUserInput({ ...userInput, email: e.target.value });
    console.log(userInput)
  }
  const handlePasswordInput = (e) => {
    e.preventDefault();
    setPasswordField(e.target.value);
    setUserInput({ ...userInput, password: e.target.value });
    console.log(userInput)
  }
  const validateInputs = () => {
    let emailValid = userInput.email;
    let passwordValid = userInput.password;


    if (emailValid === '' || passwordValid === '') {
      return 'Please enter login details';
    }
    else {

      const emailMatch = registeredUserArray.filter((user) => (user.email === emailValid));
      if (emailMatch[0] && emailMatch[0].email) {
        if (emailMatch[0].password === passwordValid) {
          username = emailMatch[0].name;
          return 0;
        } else {
          return 'Incorrect password';
        }
      } else {
        return 'Not a registered user';
      }
    }
  }

  const { switchToSignup } = useContext(AccountContext);
  const onLogin = () => {
    let errorMsg = validateInputs();
    if (errorMsg) {
      setErrorMessage(errorMsg)
    }
    else {
      Date.now()
      localStorage.setItem('userID', Number(Date.now()));
      window.open(window.location.href + '/user-type', '_self');
      localStorage.setItem('login', username);
    }

  }

  return (
    <BoxContainer class='login-form'>
      {errorMsg && <BoldLinkError  >
        {errorMsg}
      </BoldLinkError>}
      <FormContainer>
        <Input type="email" placeholder="Email*" value={emailField} name="email" onChange={(event) => handleEmailInput(event)} />
        <Input type="password" placeholder="Password*" value={passwordField} name="password" onChange={(event) => handlePasswordInput(event)} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={() => onLogin()}>Login</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="sign-up" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}