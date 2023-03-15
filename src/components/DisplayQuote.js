import React from 'react';
import styled from "styled-components";
import "../styles/DisplayQuote.css";
import { IonSegment } from '@ionic/react';
import { MainContainer } from "./common";


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

const DisplayQuote = () => {

  return (
    <>
      <MainContainer>
        <BoxContainer>
          <BackDrop />
          <div className="display-quote-columns-grid-container">
            <div className="display-quote-columns-grid">
              <div className="columns">Pet Stay</div>
              <div className="columns">Health & Safety</div>
              <div className="columns">Pet Services</div>
              <div className="columns">Pet Orders</div>
              <div className="columns">Get a pet</div>
            </div>
            <div className="display-quote-columns-grid">
              <div className="display-quote-column">
                <ul>Pet Care Center</ul>
                <ul>Hotels affiliated<br />to Pet care<br />Centers</ul>
              </div>
              <div className="display-quote-column">
                <ul>Pet's Health</ul>
                <ul>Pet's Location</ul>
                <ul>Vet Booking</ul>
              </div>
              <div className="display-quote-column">
                <ul>Pet's Sitting</ul>
                <ul>Pet's Walking</ul>
                <ul>Pet grooming</ul>
                <ul>Pet Training</ul>
              </div>
              <div className="display-quote-column">
                <ul>Pet Food</ul>
                <ul>Medicines</ul>
                <ul>Accessories</ul>
              </div>
              <div className="display-quote-column">
                <ul>Buy pet</ul>
                <ul>Sell Pet</ul>
                <ul>Adopt Pet</ul>
              </div>
            </div>
          </div>
        </BoxContainer>
      </MainContainer>
    </>
  )
}

export default DisplayQuote
