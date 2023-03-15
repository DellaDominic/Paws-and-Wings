import React, { useState, useEffect } from 'react';
import "../styles/homePage.css";
import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";
import { IonSegment, IonContent, IonGrid, IonCol, IonRow } from '@ionic/react';
import '../styles/index.css';

const images = [
  { url: 'https://images.unsplash.com/photo-1620148639493-5a7cc139813d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80' },
  { url: "https://images.unsplash.com/photo-1601758176175-45914394491c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" },
  { url: "https://images.unsplash.com/photo-1535722339661-7f22185bc7ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" },
  { url: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2729&q=80" },
  { url: "https://images.unsplash.com/photo-1629925057384-4e031bc8d049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80" },
  { url: 'https://images.unsplash.com/photo-1525253013412-55c1a69a5738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80' },

];

const MainContainer = styled.div`
 width: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;  
  background-size: cover;
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

const HomePage = () => {
  const sliderHeight = navigator.appVersion.indexOf('Win') !== -1 ? 504 : 700 ;
  const sliderWidth = navigator.appVersion.indexOf('Win') !== -1 ? 1200 : 1500 ;

  return (

    <>
      <IonContent>
        <MainContainer style={(navigator.appVersion.indexOf('Win') !== -1) ? { zoom: "60%" } : { zoom: "80%" }}>
          <div className='home'>
            <div className={`home-title-container ${(navigator.appVersion.indexOf('Win') !== -1) ? 'title-windows' : 'title-mac'}`}>Pet parenting now made easy!</div>
            <div className='home-image-container'>
              <IonSegment>
              <SimpleImageSlider
                  width={1200}
                  height={504}
                  images={images}
                  showBullets={true}
                  showNavs={false}
                  autoPlay={true}
                  navMargin={90}
                />
                <IonGrid class="pet-tiles-grid-home-landing">
                  <IonRow class="mt-2 ion-align-items-start-landing">
                    <IonCol class="pet-tiles-landing"><p>Pet Care Center</p> <br /> <p>Hotels affiliated to Pet care Centers</p></IonCol>
                    <IonCol class="pet-tiles-landing" offset="0.2" offsetMd='0.2' offsetSm='0.2'><p>Pet Health</p><br /> <p>Pet Location</p><br /><p>Vet Booking</p></IonCol>
                    <IonCol class="pet-tiles-landing" offset="0.2" offsetMd='0.2' offsetSm='0.2'><p>Pet Sitting</p><br /><p> Pet Walking </p><br /> <p>Pet Grooming</p> <br /><p>Pet Training</p></IonCol>
                    <IonCol class="pet-tiles-landing" offset="0.2" offsetMd='0.2' offsetSm='0.2'><p>Pet Food </p><br /> <p>Medicines</p> <br /> <p>Accessories</p></IonCol>
                    <IonCol class="pet-tiles-landing" offset="0.2" offsetMd='0.2' offsetSm='0.2'><p>Buy Pet</p> <br /> <p>Sell Pet</p> <br /><p> Adopt Pet</p></IonCol>
                  </IonRow>
                </IonGrid>
              </IonSegment>
            </div>
          </div>
        </MainContainer>
      </IonContent>
    </>
  )
}

export default HomePage