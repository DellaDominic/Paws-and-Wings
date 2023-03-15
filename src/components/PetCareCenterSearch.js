import React, { useState } from 'react';
import styled from "styled-components";
import "../styles/PetCareCenterSearch.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/index.css";
import { Amplify, API } from 'aws-amplify';
import { useIonLoading } from '@ionic/react';

import { Rate } from "antd";
import {
    IonCol,
    IonGrid,
    IonRow,
    IonListHeader,
    IonLabel,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonDatetimeButton,
    IonModal,
    IonDatetime,
    IonCard,
    IonInput,
    IonContent,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle

} from '@ionic/react';

const MainContainer = styled.div`
 width: 100%;
`;


const BoxContainer = styled.div`
margin: 8% 15%;
`;


const PetCareCenterSearch = () => {
    const [present, dismiss] = useIonLoading();
    const [showCards, setShowCards] = useState(false);

    const [location, setLocation] = useState('');
    const [petCareCenterData, setData] = useState([]);

    const [startDate, setStartDate] = useState('');
    const [petType, setPetType] = useState('');
    const [petCount, setPetCount] = useState('');


    const openCenter = (obj) => {
        localStorage.setItem('petCareCenterName', obj.name)
        console.log('inside function')
        window.open(window.location.href + '/center', '_self');
    }
    console.log(location)
    let i = -1;

    const displayPetCenters = () => {
        const myAPI = "pawsandwingsapi";
        const path = '/dev/pawsandwings/care-centers';
        const myInit = {
            body: {
                "location": location
            },
        }
        present({
            message: 'Loading...',
            duration: 500000,
            spinner: 'circles'
        })
        API.post(myAPI, path, myInit)
            .then((response) => {
                console.log(response)
                setShowCards(true);
                setData(response);
                dismiss();

            })
            .catch((error) => {
                console.log(error.response);
            });

    };
    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
        console.log('startDate', startDate);
    }

    const handlePetTypeChange = (e) => {
        setPetType(e.target.value);
        console.log('petType', petType);
        localStorage.setItem('petType',e.target.value)
    }

    const handlePetCountChange = (e) => {
        setPetCount(e.target.value);
        console.log('petCount', petCount);
    }
    const imagesStatic = [
        "https://images.pexels.com/photos/8434766/pexels-photo-8434766.jpeg?auto=compress&cs=tinysrgb&w=600",
        'https://images.unsplash.com/photo-1525253013412-55c1a69a5738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        'https://images.unsplash.com/photo-1629925057384-4e031bc8d049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80"',
        'https://images.unsplash.com/photo-1601758176175-45914394491c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2729&q=80',
        "https://images.pexels.com/photos/8434766/pexels-photo-8434766.jpeg?auto=compress&cs=tinysrgb&w=600",
        'https://images.unsplash.com/photo-1525253013412-55c1a69a5738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        'https://images.unsplash.com/photo-1629925057384-4e031bc8d049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80"',
        'https://images.unsplash.com/photo-1601758176175-45914394491c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2729&q=80',
        "https://images.pexels.com/photos/8434766/pexels-photo-8434766.jpeg?auto=compress&cs=tinysrgb&w=600",
        'https://images.unsplash.com/photo-1525253013412-55c1a69a5738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        'https://images.unsplash.com/photo-1629925057384-4e031bc8d049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80"',
        'https://images.unsplash.com/photo-1601758176175-45914394491c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2729&q=80',
    ]
    let data = [
        {
            id: 1,
            location: 'Bangalore',
            img: "https://images.pexels.com/photos/8434766/pexels-photo-8434766.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Meghana Pet Care Center 1",
            address: "VenugopalNagara,NearRocklineStudio,Bengalore-560073",
            contact: "9964860241",
            rating: 1
        },
        {
            id: 1,
            location: 'Bangalore',
            img: "https://images.pexels.com/photos/8434766/pexels-photo-8434766.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Meghana Pet Care Center 2",
            address: "VenugopalNagara,NearRocklineStudio,Bengalore-560073",
            contact: "9964860241",
            rating: 2
        },
        {
            id: 1,
            location: 'Bangalore',
            img: "https://images.pexels.com/photos/8434766/pexels-photo-8434766.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Meghana Pet Care Center 3",
            address: "VenugopalNagara,NearRocklineStudio,Bengalore-560073",
            contact: "9964860241",
            rating: 4
        },
        {
            id: 1,
            location: 'Bangalore',
            img: "https://images.pexels.com/photos/8434766/pexels-photo-8434766.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Meghana Pet Care Center 4",
            address: "VenugopalNagara,NearRocklineStudio,Bengalore-560073",
            contact: "9964860241",
            rating: 3
        },
        {
            id: 1,
            location: 'Bangalore',
            img: "https://images.pexels.com/photos/8434766/pexels-photo-8434766.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Meghana Pet Care Center 5",
            address: "VenugopalNagara,NearRocklineStudio,Bengalore-560073",
            contact: "9964860241",
            rating: 1
        },
    ];
    return (
        <>
            <IonContent>
                <MainContainer>
                    <BoxContainer style={(navigator.appVersion.indexOf('Win') !== -1) ? { zoom: "60%" } : {}}>
                        <IonGrid>
                            <IonRow class='pet-care-center-payment-heading-container'>
                                <IonListHeader class='pet-care-center-payment-heading'>Pet Care Center</IonListHeader>
                            </IonRow>
                            <IonRow>
                                <IonCol size="5">
                                    <IonItem class='quote-select-breed-box'>
                                        <IonLabel>Select Location*</IonLabel>
                                        <IonSelect placeholder="" onIonChange={(e) => handleLocationChange(e)}>
                                            <IonSelectOption value="bangalore">Bangalore</IonSelectOption>
                                            <IonSelectOption value="Pune">Pune</IonSelectOption>
                                            <IonSelectOption value="mumbai">Mumbai</IonSelectOption>
                                            <IonSelectOption value="hyderabad">Hyderabad</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                </IonCol>
                                <IonCol size="1.5"></IonCol>
                                <IonCol size="5">
                                    <IonItem class='quote-select-breed-box'>
                                        <IonLabel>Select Pet Type*</IonLabel>
                                        <IonSelect placeholder="" onIonChange={(e) => handlePetTypeChange(e)}>
                                            <IonSelectOption value="cat">Cat</IonSelectOption>
                                            <IonSelectOption value="dog">Dog</IonSelectOption>
                                            <IonSelectOption value="bird">Bird</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow class="mt-1">
                                <IonCol size="5">
                                    <IonLabel class="lb-color">Select Start Date</IonLabel>
                                    <IonDatetimeButton class='service-date dateTime-button' datetime="startdatetime" onChange={(e) => handleStartDateChange(e)}></IonDatetimeButton>
                                    <IonModal keepContentsMounted={true}>
                                        <IonDatetime id="startdatetime"></IonDatetime>
                                    </IonModal>
                                </IonCol>
                                <IonCol size="1.5"></IonCol>
                                <IonCol size="5">
                                    <IonLabel class="lb-color">Select End Date</IonLabel>
                                    <IonDatetimeButton class='service-date dateTime-button' datetime="enddatetime" onChange={(e) => handleStartDateChange(e)}></IonDatetimeButton>
                                    <IonModal keepContentsMounted={true}>
                                        <IonDatetime id="enddatetime"></IonDatetime>
                                    </IonModal>
                                </IonCol>
                            </IonRow>
                            <IonRow class="mt-1">
                                <IonCol size="5">
                                    <ion-label class='lb-color'>Enter Pet Count*: </ion-label>
                                    <IonInput class='count-input' value={petCount} onIonChange={(e) => handlePetCountChange(e)}></IonInput>
                                </IonCol>
                                <IonCol size="1.5"></IonCol>
                                <IonCol size="5" class='ion-col-search'>
                                    <ion-button shape='round' color="warning" disabled={!location || !petCount || !petType} class='pet-care-search' onClick={displayPetCenters}>Search</ion-button>
                                </IonCol>
                            </IonRow>
                            {
                                showCards &&
                                <>
                                    {petCareCenterData.length > 0 && <IonRow class="mt-2 search-tile-heading" >
                                        <IonListHeader class='pet-care-center-tile-heading'>Select your preferred Pet Care Center</IonListHeader>
                                    </IonRow>}
                                    <IonRow class="" >
                                        {petCareCenterData.length === 0
                                            ? <div class='success-message'>No Pet Care Centers Available in this Location</div>
                                            :
                                            <Swiper
                                                slidesPerView={3}
                                                spaceBetween={30}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                modules={[Pagination]}
                                                className="mySwiper"
                                            >
                                                {petCareCenterData.map((eachPetCareCenter) => {
                                                    const { id, name, address, email, phone_no, reviews, image } = eachPetCareCenter;
                                                    i += 1;
                                                    return (
                                                        <SwiperSlide>
                                                            <IonCard class="card" button onClick={() => { openCenter(eachPetCareCenter) }} >
                                                                <div class="img-container"><img class='card-image' alt={name} src={image} /></div>
                                                                <IonCardHeader>
                                                                    <IonCardTitle>{name}</IonCardTitle>
                                                                    <IonCardSubtitle></IonCardSubtitle>
                                                                </IonCardHeader>
                                                                <IonCardContent>
                                                                    {address}
                                                                    <br></br>
                                                                    {email}
                                                                    <br></br>
                                                                    {phone_no}
                                                                    <br></br>
                                                                    <Rate defaultValue={reviews} />
                                                                </IonCardContent>
                                                            </IonCard>
                                                        </SwiperSlide>
                                                    )

                                                })
                                                }
                                            </Swiper>
                                        }

                                    </IonRow>
                                </>
                            }
                        </IonGrid>
                    </BoxContainer>
                </MainContainer>
            </IonContent>

        </>
    )
}

export default PetCareCenterSearch


