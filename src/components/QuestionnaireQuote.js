import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import {
    IonRow,
    IonListHeader,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonRadio,
    IonRadioGroup,
    IonTextarea,
    IonGrid,
    IonCol,
    IonButton,
    IonItemDivider,
    IonContent,
} from '@ionic/react';
import "../styles/index.css";
import "../styles/Questionnaire.css";
import { Amplify, API } from 'aws-amplify';


const MainContainer = styled.div`
 width: 100%;
//  border: 2px solid red;
`;

const BoxContainer = styled.div`
margin: 8% 15%;
//  border: 2px solid blue;

`;

const QuestionnaireQuote = () => {

    const dogBreeds = ['Siberian Husky', 'Taiwan Dog', 'German Shepherd'];
    const catBreeds = ['Persian Cat', 'Maine Coon', 'Ragdoll'];
    const birdBreeds = ['Hyacinth Macaw', 'Cockatoo', 'Dove'];
    const [petBreeds, setPetBreeds] = useState([]);

    useEffect(() => {
        const pet = localStorage.getItem('petType');
        switch(pet) {
            case 'dog': setPetBreeds(dogBreeds); break;
            case 'cat': setPetBreeds(catBreeds); break;
            case 'bird': setPetBreeds(birdBreeds); break;
            default: break;
        }
    },[]);

    
    const setEnablePaymentHandler = () => {
        document.querySelector('input[name="file"]').addEventListener('change', (e) => {
            const file = e.target.files[0];
            setEnablePayment(false);
        });
    };

    const makePayment = (obj) => {
        window.open(window.location.href + '/payment', '_self');
    }

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

    const [PetBreed, setPetbreed] = useState('');
    const [pickUpSelected, setPickUpSelected] = useState('');
    const [serviceSelected, setServiceSelected] = useState('');
    const [showQuote, setShowQuote] = useState('')



    const [startDate, setStartDate] = useState('');
    const [petType, setPetType] = useState('');
    const [petCount, setPetCount] = useState('');
    const [selectedPickUp, setSelectedPickUp] = useState('');
    const [services, setServices] = useState({
        walking: 0,
        grooming: 0,
    })


    const setPickUp = (e) => {
        setPickUpSelected(true);
        if (e.target.value === "yes") {
            setSelectedPickUp('yes')
            localStorage.setItem('pickDropQty', 1);
        }
        else {
            setSelectedPickUp('no')
            localStorage.setItem('pickDropQty', 0);
        }
    }

    const setServicesHandler = (e) => {
        console.log(e.target.value)
        setServiceSelected(true);
        if ((e.target.value).includes('groom')) {
            setServices({ ...services, grooming: 1 });
            localStorage.setItem('groomingSessionQty', 1);
        }
        else {
            setServices({ ...services, grooming: 0 });
            localStorage.setItem('groomingSessionQty', 0);
        }
        if ((e.target.value).includes('walk')) {
            localStorage.setItem('walkingSessionQty', 1);
            setServices({ ...services, walking: 1 });

        }
        else {
            localStorage.setItem('walkingSessionQty', 0);
            setServices({ ...services, walking: 0 });
        }
    }


    const openCenter = (obj) => {
        console.log('inside function')
        window.open(window.location.href + '/center', '_self');
    }
    const showQuoteSummary = () => {
        setShowQuote(true);
    };
    const handlePetBreedChange = (e) => {
        setPetbreed(e.target.value);
    }

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
        console.log('startDate', startDate);
    }

    const handlePetTypeChange = (e) => {
        setPetType(e.target.value);
        console.log('petType', petType);
    }

    const handlePetCountChange = (e) => {
        setPetCount(e.target.value);
        console.log('petCount', petCount);
    }

    return (
        <IonContent>
            <MainContainer style={(navigator.appVersion.indexOf('Win') !== -1) ? { zoom: "60%" } : {}}>
                <BoxContainer>
                    <IonRow class='pet-care-center-quote-heading-container'>
                        <IonListHeader class='pet-care-center-quote-heading'>Pet Care Center</IonListHeader>
                    </IonRow>

                    <IonGrid>
                        <IonRow>
                            <IonCol size="5">
                                <IonItem class='quote-select-breed-box'>
                                    <IonLabel >Select Pet Breed*</IonLabel>
                                    <IonSelect placeholder="" onIonChange={(e) => handlePetBreedChange(e)}>
                                        {petBreeds.map((breed) => {
                                            return <IonSelectOption value={breed}>{breed}</IonSelectOption>
                                        })}
                                    </IonSelect>
                                </IonItem>
                            </IonCol>
                            <IonCol size="2"></IonCol>
                            <IonCol size="5">
                                <IonItem class='quote-radio-pickup-box'>
                                    <IonLabel>Pick up?*</IonLabel>
                                    <IonRadioGroup value={selectedPickUp} onClick={(e) => { setPickUp(e) }} class='radio-group-quote-custom'>
                                        <IonRow class='quote-radio-container'>
                                            <IonItem>
                                                <IonLabel class='quote-radio-label'>Yes</IonLabel>
                                                <IonRadio slot="end" value="yes"></IonRadio>
                                            </IonItem>
                                            <IonItem>
                                                <IonLabel class='quote-radio-label'>No</IonLabel>
                                                <IonRadio slot="end" value="no"></IonRadio>
                                            </IonItem>
                                        </IonRow>
                                    </IonRadioGroup>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow class="mt-2">
                            <IonCol size="5">
                                <IonItem class='quote-multi-select-service-box'>
                                    <IonLabel class='input-label'>Select a Service*</IonLabel>
                                    <IonSelect placeholder="" multiple={true} onIonChange={(e) => setServicesHandler(e)}>
                                        <IonSelectOption value="walk">1 Walking Session For 30m</IonSelectOption>
                                        <IonSelectOption value="groom">1 Grooming Session</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonCol>
                            <IonCol size="2"></IonCol>
                            <IonCol size="5">
                                <IonItem class='text-area-box'>
                                    <IonTextarea className="custom-textarea" placeholder="Any commentary regarding food/medicines/allergies">
                                    </IonTextarea>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow class="mt-2">
                            <IonCol size="5"></IonCol>
                            <IonCol size="2" class='get-quote-button'>
                                <ion-button shape='round' color="warning" disabled={!PetBreed || !pickUpSelected || !serviceSelected} onClick={showQuoteSummary}>Get Quote</ion-button>
                            </IonCol>
                            <IonCol size="5"></IonCol>
                        </IonRow>
                    </IonGrid>

                    {showQuote &&
                        <>
                            <IonRow class='quote-container-copy mt-2'>
                                <IonItemDivider class='quote-summary-heading' >
                                    <IonCol>Quotation Summary</IonCol>
                                    <IonCol>Rate</IonCol>
                                    <IonCol>Quantity</IonCol>
                                    <IonCol>Amount</IonCol>
                                </IonItemDivider>

                                <IonItemDivider color="dark" class='quote-summary-row quote-summary-white-row'>
                                    <IonCol>Boarding Charges</IonCol>
                                    <IonCol>900 INR for 8 hours, 100 INR per hour additional basis</IonCol>
                                    <IonCol>NA</IonCol>
                                    <IonCol>0 INR</IonCol>
                                </IonItemDivider>
                                <IonItemDivider color="dark" class='quote-summary-row'>
                                    <IonCol>Pet Grooming Session</IonCol>
                                    <IonCol>{`${GroomingRate} INR`}</IonCol>
                                    <IonCol>{groomingSessionQty}</IonCol>
                                    <IonCol>{`${GroomingRate * groomingSessionQty} INR`}</IonCol>
                                </IonItemDivider>

                                <IonItemDivider color="medium" class='quote-summary-row  quote-summary-white-row'>
                                    <IonCol>Pet Walking Session</IonCol>
                                    <IonCol>{`${WalkingRate} INR`}</IonCol>
                                    <IonCol>{walkingSessionQty}</IonCol>
                                    <IonCol>{`${WalkingRate * walkingSessionQty} INR`}</IonCol>
                                </IonItemDivider>

                                <IonItemDivider color="dark" class='quote-summary-row'>
                                    <IonCol>Pick Up/Drop</IonCol>
                                    <IonCol>{`${pickUpRate} INR`}</IonCol>
                                    <IonCol>{pickDropQty}</IonCol>
                                    <IonCol>{`${pickUpRate * pickDropQty} INR`}</IonCol>
                                </IonItemDivider>

                                <IonItemDivider color="medium" class='quote-summary-row quote-summary-white-row'>
                                    <IonCol>Total</IonCol>
                                    <IonCol></IonCol>
                                    <IonCol></IonCol>
                                    <IonCol>{`${total} INR`}</IonCol>
                                </IonItemDivider>

                                <IonItemDivider color="dark" class='quote-summary-row'>
                                    <IonCol>Discount</IonCol>
                                    <IonCol>{`${discountRate}%`}</IonCol>
                                    <IonCol></IonCol>
                                    <IonCol>{`${discountAmount} INR`}</IonCol>
                                </IonItemDivider>

                                <IonItemDivider color="medium" class='quote-summary-row quote-summary-white-row'>
                                    <IonCol>Net Price</IonCol>
                                    <IonCol></IonCol>
                                    <IonCol></IonCol>
                                    <IonCol>{`${netPrice} INR`}</IonCol>
                                </IonItemDivider>

                                {/* </IonGrid> */}

                                {/* </IonRow> */}
                            </IonRow>
                            <IonRow class='upload-vaccine-text'>
                                Upload Vaccination Certificate:
                            </IonRow>

                            <IonRow class='quote-vaccine-pay-buttons-container'>
                                <IonCol>
                                    <div className='upload-vaccine-button'>
                                        <div class="file-input">
                                            <input id="file-scr" name='file' type="file" class='file-input-button' onClick={() => { setEnablePaymentHandler() }} />
                                        </div>
                                    </div>
                                </IonCol>
                                <IonButton class='make-payment-quote-button' shape='round' color="warning" disabled={enablePayment} onClick={() => { makePayment() }}>Make Payment</IonButton>
                            </IonRow>
                        </>}
                </BoxContainer>
            </MainContainer >
        </IonContent>
    )
}

export default QuestionnaireQuote
