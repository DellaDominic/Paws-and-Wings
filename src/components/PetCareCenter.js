import React from 'react';
import styled from "styled-components";
import "../styles/PetCareCenter.css";
import { IonSegment, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import "../styles/index.css";

const MainContainer = styled.div`
${(navigator.appVersion.indexOf('Win') !== -1) ? { margin: '1% 10%' } : { margin: '0 10%' }}
`;
const BoxContainer = styled.div`
`;

const PetCareCenter = () => {
  const openPetCareCenterSearch = () => {
    window.open(window.location.href + '/search', '_self');
  }
  return (
    <>
      <IonContent>
        <MainContainer style={(navigator.appVersion.indexOf('Win') !== -1) ? { zoom: "60%" } : { zoom: "90%" }}>
          <BoxContainer>
            <IonGrid class="pet-tiles-grid">
              <IonRow>
                <IonCol class="pet-tiles pet-tiles-header"><p>Pet Stay</p></IonCol>
                <IonCol class="pet-tiles pet-tiles-header" offset="0.2" offsetMd='0.2' offsetSm='0.2'><p>Health & Safety</p></IonCol>
                <IonCol class="pet-tiles pet-tiles-header" offset="0.2" offsetMd='0.2' offsetSm='0.2'><p>Pet Services</p></IonCol>
                <IonCol class="pet-tiles pet-tiles-header" offset="0.2" offsetMd='0.2' offsetSm='0.2'><p>Pet Orders</p></IonCol>
                <IonCol class="pet-tiles pet-tiles-header" offset="0.2" offsetMd='0.2' offsetSm='0.2'><p>Get a pet</p></IonCol>
              </IonRow>
              <IonRow class="mt-2 ion-align-items-start">
                <IonCol class="pet-tiles tl-bg"><p onClick={openPetCareCenterSearch}>Pet Care Center</p> <br /> <p>Hotels affiliated to Pet care Centers</p></IonCol>
                <IonCol class="pet-tiles tl-bg" offset="0.2" offsetMd='0.2' offsetSm='0.2'><p>Pet Health</p><br /> <p>Pet Location</p><br /><p>Vet Booking</p></IonCol>
                <IonCol class="pet-tiles tl-bg" offset="0.2" offsetMd='0.2' offsetSm='0.2'><p>Pet Sitting</p><br /><p> Pet Walking </p><br /> <p>Pet Grooming</p> <br /><p>Pet Training</p></IonCol>
                <IonCol class="pet-tiles tl-bg" offset="0.2" offsetMd='0.2' offsetSm='0.2'><p>Pet Food </p><br /> <p>Medicines</p> <br /> <p>Accessories</p></IonCol>
                <IonCol class="pet-tiles tl-bg" offset="0.2" offsetMd='0.2' offsetSm='0.2'><p>Buy Pet</p> <br /> <p>Sell Pet</p> <br /><p> Adopt Pet</p></IonCol>
              </IonRow>
            </IonGrid>
          </BoxContainer>
        </MainContainer>
      </IonContent>
    </>
  )
}

export default PetCareCenter
