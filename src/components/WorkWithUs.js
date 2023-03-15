import React from 'react';
import styled from "styled-components";
import "../styles/other.css";
import { IonSegment, IonContent } from '@ionic/react';
import { MainContainer } from './common';
import "../styles/index.css";
import { FaPaw } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
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

const WorkWithUs = () => {

  return (
    <>
      <IonContent>
        <IconContext.Provider value={{ color: "#fff" }}>
          <MainContainer style={(navigator.appVersion.indexOf('Win') !== -1) ? { zoom: "60%" } : { zoom: "80%" }}>
            <div className='other services'>
              <div className='other-container services heading'>Work With Us
                <div class="other-content-container">
                  If you are a pet lover and you are eager to provide your valuable services for pets, you have reached the right place!
                  <br /><br />
                  <p>
                    We partner with pet wellness centers across the country to provide professionals for pet training, pet grooming, pet walking,
                    driving services. Please contact us.
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

export default WorkWithUs


