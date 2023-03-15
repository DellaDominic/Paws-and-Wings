import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
import { IonSegment, IonHeader, IonContent, IonRow, IonCol, IonGrid } from "@ionic/react";
import "../styles/index.css"

const MainContainer = styled.div`
//  width: 100%;
 margin-left: 15%;
margin-right: 15%;
//  border: 2px solid red;
`;

const BoxContainer = styled.div`
  margin: auto;
  margin-top:16%;
  ${(navigator.appVersion.indexOf('Win') !== -1) ? { width: '46%' } : { width: '60%' }}
  min-height: 550px;
  display: flex;
  align-items: center;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 6px rgba(15, 15, 15, 0.28);
  position: relative;
`;

const TopContainer = styled.div`
  width: 110%;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em 1rem;
  @media (max-width: 1200px) {
    height: 130%;
  }
`;

const BackDrop = styled.div`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding:10px 30px;
  margin-bottom: 7%;
  margin-left: 4%;
`;

const HeaderText = styled.h2`
  font-size: 35px;
  font-weight: 600;
  line-height: 1.24;
  color: #000;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #000;
  font-weight: 500;
  font-size: 20px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2em 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export default function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState(props.active);

  useEffect(() => {
    setActive(props.active);
  })

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("login");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <IonContent>
      <AccountContext.Provider value={contextValue}>
        <MainContainer style={(navigator.appVersion.indexOf('Win') !== -1) ? { zoom: "60%" } : {}}>
          <BoxContainer>
            <IonGrid size-lg="12">
              <IonRow >
                <IonCol size-xl='6' size-lg='12' size-md='12'>
                  <TopContainer>
                    {active === "login" && (
                      <HeaderContainer>
                        <HeaderText>Welcome Back</HeaderText>
                        <SmallText>Please Login to continue!</SmallText>
                      </HeaderContainer>
                    )}
                    {active === "signup" && (
                      <HeaderContainer>
                        <HeaderText>Create Account</HeaderText>
                        <SmallText>Please sign-up to continue!</SmallText>
                      </HeaderContainer>
                    )}
                  </TopContainer>
                </IonCol>
                <IonCol size-xl='6' size-lg='12' size-md='12'>
                  <InnerContainer>
                    {active === "login" && <LoginForm />}
                    {active === "signup" && <SignupForm />}
                  </InnerContainer>
                </IonCol>
              </IonRow>
            </IonGrid>
          </BoxContainer>

        </MainContainer>
      </AccountContext.Provider>
    </IonContent>
  );
}