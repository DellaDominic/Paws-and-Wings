import React from 'react';
import styled from "styled-components";
import "../styles/other.css";
import { MainContainer } from './common';
import { IonContent } from '@ionic/react';
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

const MyRequests = () => {

  const orderMessage = localStorage.getItem('orderMessage');
  const orderId = orderMessage?.slice(24);

  return (
    <>
      <IonContent>
        <IconContext.Provider value={{ color: "#fff" }}>
          <MainContainer style={(navigator.appVersion.indexOf('Win') !== -1) ? { zoom: "60%" } : { zoom: "80%" }}>
            <div className='other services'>
              <div className='other-container other-heading'>My Requests
                {orderId && <>
                  <div class="other-content-container points">
                    Your Booking ID is   <span className='order-id'>{orderId}</span>
                  </div>
                  <FaPaw />
                </>
                }
              </div>
            </div>
          </MainContainer>
        </IconContext.Provider>
      </IonContent>
    </>
  )
}

export default MyRequests



