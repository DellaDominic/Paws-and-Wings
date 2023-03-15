import React from 'react';
import styled from "styled-components";
import "../styles/other.css";
import { IonContent } from '@ionic/react';
import { MainContainer } from "./common";
import { FaPaw } from "react-icons/fa";
import { IconContext } from "react-icons/lib";


const BoxContainer = styled.div`
  margin: auto;
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: relative;
`;
const BackDrop = styled.div`
  width: 160%;
  height: 700px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -400px;
  left: -70px;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
`;

const MyPoints = () => {
  const loggedIn = localStorage.getItem('userID');

  return (
    <>
    <IonContent>
    <IconContext.Provider value={{ color: "#fff" }}>
        <MainContainer style={(navigator.appVersion.indexOf('Win') !== -1) ? { zoom: "60%" } : { zoom: "80%" }}>
          <div className='other services'>
            <div className='other-container other-heading'>My Points
            {loggedIn && <><div class="other-content-container points">
            You have <span className='points'>500</span> Points* to redeem!
                  <br /><br />
                  <p className='point-in-rupees'>
                    *One point is equivalent to 0.2 Rupees.
                  </p>
                </div>
                <FaPaw /></>}
            </div>
          </div>
        </MainContainer>
        </IconContext.Provider>
    </IonContent>
  </>
  )
}

export default MyPoints


