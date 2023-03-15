import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoldLinkError,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import Marginer from "./marginer";
import { AccountContext } from "./accountContext";
import {
  IonSegment,
  IonSelect,
  IonSelectOption
} from "@ionic/react";
import "../styles/accountBox.css"

export function SignupForm() {
  const [firstname, setFirstname] = useState(localStorage.getItem('login'));
  const [lastname, setLastname] = useState('');
  const [mobile, setMobile] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
    firstname: "",
    lastname: '',
    mobile: '',
  });
  const [errorMsg, setErrorMessage] = useState('');

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

  const handleFirstnameInput = (e) => {
    e.preventDefault();
    setFirstname(e.target.value);
    setUserInput({ ...userInput, firstname: e.target.value });
    console.log(userInput)
  }
  const handleLastnameInput = (e) => {
    e.preventDefault();
    setLastname(e.target.value);
    setUserInput({ ...userInput, lastname: e.target.value });
    console.log(userInput)
  }
  const handleMobileInput = (e) => {
    e.preventDefault();
    setMobile(e.target.value);
    setUserInput({ ...userInput, mobile: e.target.value });
    console.log(userInput)
  }


  const validateInputs = () => {
    let emailValid = userInput.email;
    let passwordValid = userInput.password;

    if (emailField === '' || passwordField === '' || firstname === '' || lastname === '' || mobile === '') {
      return 'Please fill all mandatory fields';
    }
    else {
      console.log('todo')
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      let emailValid = emailField.match(validRegex);
      let passwordValid = passwordField.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
      let mobileValid = mobile.match(/^(\+\d{1,3}[- ]?)?\d{10}$/);
      if (!emailValid) {
        return 'Enter valid email';
      }
      if (!passwordValid) {
        return 'Enter valid password';
      }
      if (!mobileValid) {
        return 'Enter valid Mobile Number';
      }
      return 0;
    }
  }

  const { switchToSignin } = useContext(AccountContext);
  const onSignup = () => {
    let errorMsg = validateInputs();
    if (errorMsg) {
      setErrorMessage(errorMsg)
    }
    else {
      localStorage.setItem('userID', Number(Date.now()));
      localStorage.setItem('login', firstname);
      window.open(window.location.pathname + '/user-type', '_self');
    }


  }

  return (
    <BoxContainer>
      {errorMsg && <BoldLinkError >
        {errorMsg}
      </BoldLinkError>}
      <FormContainer>
        <Input type="text" placeholder="First Name*" onChange={(event) => handleFirstnameInput(event)} />
        <Input type="text" placeholder="Last Name*" onChange={(event) => handleLastnameInput(event)} />
        <Input type="text" placeholder="Mobile Number*" onChange={(event) => handleMobileInput(event)} />
        <Input type="email" placeholder="Email*" onChange={(event) => handleEmailInput(event)} />
        <Input type="password" placeholder="Password*" onChange={(event) => handlePasswordInput(event)} />
        <MutedLink href="#">
          Minimum 8 characters, 1 special character, 1 uppercase, 1 lowercase and 1 number.
        </MutedLink>
        <select placeholder="Select User Type" className="user-type-drop-down">
          <option value="petParent">Choose User Type</option>
          <option value="petParent">Pet Parent</option>
          <option value="petCare">Pet Care Center</option>
          <option value="hotel">Hotel</option>
        </select>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={() => onSignup()}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="login" onClick={switchToSignin}>
          Login
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}