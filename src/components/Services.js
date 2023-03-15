import React from 'react';
import "../styles/other.css";
import styled from "styled-components";
import { IonSegment, IonContent } from '@ionic/react';
import { MainContainer } from './common';
import "../styles/index.css";
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

const Services = () => {

  return (
    <>
      <IonContent>
        <IconContext.Provider value={{ color: "#fff" }}>
          <MainContainer style={(navigator.appVersion.indexOf('Win') !== -1) ? { zoom: "60%" } : { zoom: "80%" }}>
            <div className='other services'>
              <div className='other-container heading'>Our Services
                <div class="other-content-container">
                  Our motto is to bring all pet related services at your fingertip.
                  <br /><br />
                  <p>
                    We provide boarding facilities for pets, health statistics & GPS location monitoring capabilities, vet booking services, pet adoption, buying & selling options, comprehensive pet care and training facilities.
                  </p>
                </div>
                <FaPaw />
              </div>
            </div>
          </MainContainer>
        </IconContext.Provider>
      </IonContent>
    </>
  )
}

export default Services

