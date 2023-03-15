import React, { useEffect } from 'react';
import "../styles/UserType.css";
import "../styles/index.css";
import styled from "styled-components";
import { IonSegment, IonPage, IonContent } from '@ionic/react';

const BoxContainer = styled.div`
  // margin: auto;
  // width: auto;
  // height: 100%;
  // display: flex;
  // flex-direction: column;
  // background-color: #fff;
  // position: relative;
`;

const MainContainer = styled.div`
${(navigator.appVersion.indexOf('Win') !== -1) ? { margin: '8% 15%' } : { margin: 'auto 15%' }}
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

const UserType = () => {
  useEffect(() => {
    window.addEventListener('popstate', (e) => {
      window.history.go(1);
      window.location.reload();
    });
  },[])

  const openPetCareCenter = () => {
    window.open(window.location.href + '/pet-care-center', '_self');
  }

  return (
    <>
      <IonContent>
        <MainContainer style={(navigator.appVersion.indexOf('Win') !== -1) ? { zoom: "60%" } : {}}>
          <BoxContainer>
            <div className='user-type'>
              <div className='user-type-container' onClick={openPetCareCenter}>Pet Parent</div>
              <div className='user-type-container'>Pet Care Center</div>
              <div className='user-type-container hotel'>Hotel (Affliated with Paws & Wings) </div>
            </div>
          </BoxContainer>
        </MainContainer>
      </IonContent>
    </>
  )
}

export default UserType
