import React from 'react';
import "../styles/other.css";
import styled from "styled-components";
import { IonSegment, IonContent } from '@ionic/react';
import "../styles/index.css";
import { FaPaw } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const MainContainer = styled.div`
`;

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

const AboutUs = () => {

  return (
    <>
      <IonContent>
        <IconContext.Provider value={{ color: "#fff" }}>
          <MainContainer style={(navigator.appVersion.indexOf('Win') !== -1) ? { zoom: "60%" } : { zoom: "80%" }}>
            <div className='other'>
              <div className='other-container heading'>
                About Us
                <div class="other-content-container">
                  While it is easy to bring home a pet, it takes much more to become a parent to the new family member.
                  We are here to make pet parenting easier as we understand the many roles that you juggle in a day.
                  Many of you are balancing a demanding career, travel requirements, medical challenges in your day-to-day life,
                  but in all of this you want to ensure that your pets can be put up in close proximity while you are at work,
                  they are well taken care of and attended with love and professional care.
                  <br /><br />
                  <p>
                    We would be pleased to assist you on every nook of your journey as a responsible pet parent!
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

export default AboutUs
