import React from 'react';
import styled from "styled-components";
import "../styles/paymentSuccess.css";
import "../styles/index.css";
import {
  IonContent, IonGrid, IonRow,
} from '@ionic/react';

const MainContainer = styled.div`
 width: 100%;
 margin-top: 20% !important;
`;

const PaymentSuccess = () => {
  const orderId = localStorage.getItem('orderMessage');
  const pickMessage = localStorage.getItem('pickDropQty');
  const userId = localStorage.getItem('userID')
  console.log('id', userId)

  return (
    <>
      <IonContent>
        <MainContainer style={(navigator.appVersion.indexOf('Win') !== -1) ? { zoom: "60%" } : {}}>
          <div class="thanks-message">
            <h1>Thank You for your booking.</h1>
            {pickMessage === '1'
              ? <><p class=''>
                You have successfully booked your pet's stay in <span>{localStorage.getItem('petCareCenterName')}</span>.<br /><span>{orderId}</span>.
              </p><p>Your pet will be picked up soon from your requested location.</p></>
              : <p>You have successfully booked your pet's stay in <span>{localStorage.getItem('petCareCenterName')}</span>.<br /> <span>{orderId}</span>. <br />Please drop your pet, a warm welcome awaits!</p>
            }
          </div>
        </MainContainer>
      </IonContent>
    </>
  )
}

export default PaymentSuccess
