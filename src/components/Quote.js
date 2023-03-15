import React, { useState } from 'react';
import styled from "styled-components";
import { IonCard, IonCol, IonGrid, IonHeader, IonRow, IonSegment } from '@ionic/react';
import {
    IonRadio,
    IonRadioGroup,
    IonList,
    IonButton,
    IonButtons,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonLabel,
    IonTextarea,
    IonIcon
} from '@ionic/react';

import '../styles/quote.css';
import { MainContainer } from './common';


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

const makePayment = (obj) => {
    console.log('inside function')
    window.open(window.location.href + '/payment', '_self');
}

const Quote = () => {

    const [enablePayment, setEnablePayment] = useState(true);

    const groomingSessionQty = localStorage.getItem('groomingSessionQty');
    const walkingSessionQty = localStorage.getItem('walkingSessionQty');
    const pickDropQty = localStorage.getItem('pickDropQty');
    const pickUpRate = 400;
    const GroomingRate = 200;
    const WalkingRate = 100;
    const nightStayAmount = 3000;
    const discountRate = 20;
    const total = nightStayAmount + (GroomingRate * groomingSessionQty) + (WalkingRate * walkingSessionQty) + (pickUpRate * pickDropQty);
    const discountAmount = 0.01 * discountRate * total;
    const netPrice = total - discountAmount;


    return (
        <>
            <MainContainer style={(navigator.appVersion.indexOf('Win') !== -1) ? { zoom: "60%" } : {}}>
                <BoxContainer>
                    <IonGrid class='quote-summary'>
                        <ion-item-divider class='heading' >
                            <IonCol>Quotation Summary</IonCol>
                            <IonCol>Rate</IonCol>
                            <IonCol>Quantity</IonCol>
                            <IonCol>Amount</IonCol>
                        </ion-item-divider>

                        <ion-item-divider color="dark" class='summary-row white-row'>
                            <IonCol>Day Boarding Charges</IonCol>
                            <IonCol>900 INR for 8 hours, 100 INR per hour additional basis</IonCol>
                            <IonCol>NA</IonCol>
                            <IonCol>0 INR</IonCol>
                        </ion-item-divider>

                        <ion-item-divider color="medium" class='summary-row'>
                            <IonCol>Night Stay</IonCol>
                            <IonCol>1500 INR per night</IonCol>
                            <IonCol>2</IonCol>
                            <IonCol>{`${nightStayAmount} INR`}</IonCol>
                        </ion-item-divider>

                        <ion-item-divider color="medium" class='summary-row white-row'>
                            <IonCol>Pet Grooming Session</IonCol>
                            <IonCol>{`${GroomingRate} INR`}</IonCol>
                            <IonCol>{groomingSessionQty}</IonCol>
                            <IonCol>{`${GroomingRate * groomingSessionQty} INR`}</IonCol>
                        </ion-item-divider>

                        <ion-item-divider color="dark" class='summary-row'>
                            <IonCol>Pet Walking Session</IonCol>
                            <IonCol>{`${WalkingRate} INR`}</IonCol>
                            <IonCol>{walkingSessionQty}</IonCol>
                            <IonCol>{`${WalkingRate * walkingSessionQty} INR`}</IonCol>
                        </ion-item-divider>

                        <ion-item-divider color="dark" class='summary-row white-row'>
                            <IonCol>Pick Up/Drop</IonCol>
                            <IonCol>{`${pickUpRate} INR`}</IonCol>
                            <IonCol>{pickDropQty}</IonCol>
                            <IonCol>{`${pickUpRate * pickDropQty} INR`}</IonCol>
                        </ion-item-divider>

                        <ion-item-divider color="medium" class='summary-row'>
                            <IonCol>Total</IonCol>
                            <IonCol></IonCol>
                            <IonCol></IonCol>
                            <IonCol>{`${total} INR`}</IonCol>
                        </ion-item-divider>

                        <ion-item-divider color="dark" class='summary-row white-row'>
                            <IonCol>Discount</IonCol>
                            <IonCol>{`${discountRate}%`}</IonCol>
                            <IonCol></IonCol>
                            <IonCol>{`${discountAmount} INR`}</IonCol>
                        </ion-item-divider>

                        <ion-item-divider color="medium" class='summary-row'>
                            <IonCol>Net Price</IonCol>
                            <IonCol></IonCol>
                            <IonCol></IonCol>
                            <IonCol>{`${netPrice} INR`}</IonCol>
                        </ion-item-divider>

                    </IonGrid>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <div className='file-name'>
                                    Upload Vaccination Certificate:
                                </div>
                                <div class="file-input">
                                    <input id="file-scr" type="file" class='file-input-button' onClick={() => { setEnablePayment(false) }} />
                                </div>
                            </IonCol>
                            <IonCol>
                                <IonButton shape='round' color="warning" disabled={enablePayment} onClick={() => { makePayment() }}>Make Payment</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </BoxContainer>
            </MainContainer>
        </>
    );
};
export default Quote;