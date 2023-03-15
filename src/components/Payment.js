import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import {
  IonRow,
  IonListHeader,
  IonRadioGroup,
  IonItem,
  IonLabel,
  IonRadio,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonList,
  IonContent,
  IonGrid,
  IonCol
} from '@ionic/react';
import "../styles/payment.css";
import "../styles/cardDetails.css";
import { Amplify, API } from 'aws-amplify';
import { useIonLoading } from '@ionic/react';
import "../styles/index.css";



const MainContainer = styled.div`
 width: 100%;
//  border: 2px solid red;
`;

const BoxContainer = styled.div`
margin: 8% 15%;
//  border: 2px solid blue;

`;

const Payment = () => {

  const [present, dismiss] = useIonLoading();

  const [upishow, setUpiShow] = useState(false);
  const [cardShow, setCardShow] = useState(false);
  const [bankShow, setBankShow] = useState(false);
  const [payOptionSelected, setPayOptionSelected] = useState('')
  const [showDebitCard, setShowDebitCard] = useState(false);
  const [enablePay, setEnablePay] = useState(false);



  const makePayment = (obj) => {
    const userId = localStorage.getItem('userID')
    console.log('id', userId)
    const myAPI = "pawsandwingsapi";
    const path = '/dev/pawsandwings/payments';
    const myInit = {
      body: {
        "userid": Number(userId),
        "fromDate": "2023-01-03",
        "toDate": "2023-01-15",
      },
    }
    present({
      message: 'Loading...',
      duration: 3000,
      spinner: 'circles'
    })
    API.post(myAPI, path, myInit)
      .then((response) => {
        localStorage.setItem('orderMessage', response.message)
        window.open(window.location.href + '/success', '_self');
        dismiss();

      })
      .catch((error) => {
        console.log(error.response);
        localStorage.setItem('orderMessage', 'Order Not successful')
      });

  }

  const setPayOption = (e) => {
    e.preventDefault();
    setPayOptionSelected(e.target.value);
    switch (e.target.value) {
      case 'upi': {
        setUpiShow(true);
        setCardShow(false);
        setBankShow(false);
        setShowDebitCard(false);
        setEnablePay(false);
        setCard({
          expirydt: "",
          cardno: '',
          cardtype: ''
        });
        setCvv('');
        setName('');
        return;
      }
      case 'card': {
        setUpiShow(false);
        setCardShow(true);
        setBankShow(false);
        setShowDebitCard(false);
        setEnablePay(false);
        setCard({
          expirydt: "",
          cardno: '',
          cardtype: ''
        });
        setCvv('');
        setName('');
        return;
      }
      case 'netbank': {
        setUpiShow(false);
        setCardShow(false);
        setBankShow(true);
        setShowDebitCard(false);
        setEnablePay(false);
        setCard({
          expirydt: "",
          cardno: '',
          cardtype: ''
        });
        setCvv('');
        setName('');
        return;
      }
      default: return;
    }
  }

  const handlecardSelect = (e) => {

    if (e.target.value === 'debit') {
      setShowDebitCard(true);
      setCardShow(true);
    }

  }

  const [card, setCard] = useState({
    cardno: "",
    cardtype: "far fa-credit-card",
    expirydt: ""
  });
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');



  const onChange = (e) => {
    var cartype_new = cardnumber(e.target.value);
    setCard({
      ...card,
      cardno: e.target.value,
      cardtype: cartype_new
    });
  };
  const cardnumber = (inputtxt) => {
    var matches = inputtxt.match(/(\d+)/);
    var cardno = "";
    console.log(matches);
    if (matches) {
      cardno = inputtxt.split(" - ").join("");
    }
    console.log(cardno);
    var cardtype1 = card.cardtype;
    var visa = /^(?:4[0-9]{2}?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{3})$/;
    var amexpRegEx = /^(?:3[47][0-9]{3})$/;
    var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{5})$/;
    console.log(visa.test(cardno));
    if (visa.test(cardno) === true) {
      cardtype1 = "far fa fa-3x fa-cc-visa  carddetail-cardtype";
    } else if (mastercardRegEx.test(cardno) === true) {
      cardtype1 = "far fa fa-3x fa-cc-mastercard carddetail-cardtype";
    } else if (amexpRegEx.test(cardno) === true) {
      cardtype1 = "far fa fa-3x fa-cc-amex carddetail-cardtype";
    } else if (discovRegEx.test(cardno) === true) {
      cardtype1 = "far fa fa-3x fa-cc-discover carddetail-cardtype";
    }
    return cardtype1;
  };

  const cc_format = (value) => {
    const v = value.replace(/[^0-9]/gi, "").substr(0, 16);

    const parts = [];
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }
    return parts.length > 1 ? parts.join(" - ") : value;
  };
  const expriy_format = (value) => {
    const expdate = value;
    const expDateFormatter =
      expdate.replace(/\//g, "").substring(0, 2) +
      (expdate.length > 2 ? "/" : "") +
      expdate.replace(/\//g, "").substring(2, 4);

    return expDateFormatter;
  };
  const onChangeExp = (e) => {
    setCard({
      ...card,
      expirydt: e.target.value
    });
  };

  const onChangeCVV = (e) => {
    setCvv(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  }
  const [voucherPoints, setVoucherPoints] = useState(false);
  const [voucherPointsButton, setVoucherPointsButton] = useState(false);

  const setVoucher = (e) => {

    setVoucherPoints(e.target.value);
    if (voucherPointsButton) {
      setVoucherPointsButton(!voucherPointsButton)
    }
    if (e.target.value) {
      voucherPointsButton(false);
    }
  }
  const setVoucherButton = () => {
    if (voucherPoints && !voucherPointsButton) {
      setVoucherPointsButton(!voucherPointsButton)
    }
  }

  useEffect(() => {
    if (card.cardno && card.expirydt && cvv && name) {
      setEnablePay(true);
    }
    else {
      setEnablePay(false);
    }
  }, [card.cardno, card.expirydt, cvv, name]);

  return (
    <>
      <IonContent>
        <MainContainer style={(navigator.appVersion.indexOf('Win') !== -1) ? { zoom: "60%" } : {}}>
          <BoxContainer>
            <IonRow class='pet-care-center-payment-heading-container'>
              <IonListHeader class='pet-care-center-payment-heading'>Pet Care Center</IonListHeader>
            </IonRow>
            <IonGrid>
              <IonRow>
                <IonCol size="5">
                  <IonItem class='payment-voucher-box'>
                    <IonLabel>Select Voucher/Points</IonLabel>
                    <IonSelect placeholder="" class='payment-voucher-select-options' onIonChange={(e) => { setVoucher(e) }}>
                      <IonSelectOption value="cop1">Flat 30 INR Off</IonSelectOption>
                      <IonSelectOption value="cop2">20% Off Up to 75INR</IonSelectOption>
                      <IonSelectOption value="cop3">Apply 100 points</IonSelectOption>
                      <IonSelectOption value="cop4">Apply 500 points</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCol>
                <IonCol size="2"></IonCol>
                <IonCol size="5">
                </IonCol>
              </IonRow>
              <IonRow class='mt-2'>
                <IonCol size="5">
                  <IonItem class='payment-voucher-box'>
                    <IonLabel>Select Payment Method:</IonLabel>
                    <IonSelect placeholder="" class='payment-voucher-select-options' onIonChange={(e) => { setPayOption(e) }}>
                      <IonSelectOption value="card">Card</IonSelectOption>
                      <IonSelectOption value="upi">UPI</IonSelectOption>
                      <IonSelectOption value="netbank">Net Banking</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCol>
                <IonCol size="1"></IonCol>
                {bankShow && (<IonCol size="5">
                  <IonItem class='payment-voucher-box'>
                    <IonLabel>Select Bank</IonLabel>
                    <IonSelect placeholder="" >
                      <IonSelectOption value="Bangalore">State Bank of India</IonSelectOption>
                      <IonSelectOption value="Pune">South Indian Bank</IonSelectOption>
                      <IonSelectOption value="Mumbai">other</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCol>)}
                {upishow && (<IonCol size="5">
                  <IonItem class='payment-voucher-box'>
                    <IonLabel>Select UPI</IonLabel>
                    <IonSelect placeholder="" >
                      <IonSelectOption value="gpay">Google Pay</IonSelectOption>
                      <IonSelectOption value="phonepe">Phone Pe</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCol>)}
                {cardShow && (<IonCol size="5">
                  <IonItem class="payment-voucher-box">
                    <IonLabel class='ion-label-custom'>Select Card Type</IonLabel>
                    <IonSelect placeholder="" onIonChange={(e) => handlecardSelect(e)}>
                      <IonSelectOption value="debit">Debit Card</IonSelectOption>
                      <IonSelectOption value="credit">Credit Card</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCol>)}
              </IonRow>
              <IonRow class="mt-2">
                {showDebitCard && (<IonCol size="5">
                  <>
                    <div className="cardetails-wrapper">
                      <div className="cardetails-payment">
                        <h2 className="carddetails-head">Debit Card Details</h2>

                        <div className="cardetails-form">
                          <div className="cardetails-card cardetails-space cardetails-icon-relative">
                            <label className="cardetails-label">Card Number*:</label>
                            <input
                              type="text"
                              className="cardetails-input"
                              data-mask="0000 0000 0000 0000"
                              placeholder="XXXX-XXXX-XXXX-XXXX"
                              value={cc_format(card.cardno)}
                              onChange={onChange}
                              onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                                }
                              }}
                            />
                            <i className={card.cardtype} id="cardtype"></i>
                          </div>

                          <div className="cardetails-card-grp cardetails-space">
                            <div className="cardetails-card-item cardetails-icon-relative">
                              <label className="cardetails-label">Expiry date*:</label>

                              <input
                                type="text"
                                name="expiry-data"
                                className="cardetails-input"
                                placeholder="mm / yy"
                                onChange={onChangeExp}
                                value={expriy_format(card.expirydt)}
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              />
                              <i className="far fa-calendar-alt"></i>
                            </div>
                            <div className="cardetails-card-item cardetails-icon-relative">
                              <label className="cardetails-label">CVV*:</label>
                              <input
                                type="password"
                                className="cardetails-input"
                                data-mask="000"
                                placeholder="000"
                                maxlength="3"
                                pattern="[0-9][0-9][0-9]"
                                onChange={onChangeCVV}
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              />
                              <i className="fas fa-lock"></i>
                            </div>
                          </div>
                          <div className="cardetails-card cardetails-space cardetails-icon-relative">
                            <label className="cardetails-label">Name on Card*:</label>
                            <input type="text" className="cardetails-input" placeholder="" onChange={onChangeName} />
                            <i className="fas fa-user"></i>
                          </div>
                        </div>
                        {showDebitCard && <div class='pay-button-container'>
                          <ion-button shape='round' class="pay-button-card" onClick={makePayment} disabled={!enablePay}>Pay</ion-button>
                        </div>}
                      </div>
                    </div>
                  </>
                </IonCol>)}
                <IonCol size="1"></IonCol>
                <IonCol size="6"></IonCol>
              </IonRow>
            </IonGrid>
          </BoxContainer>
        </MainContainer>
      </IonContent>
    </>
  )
}

export default Payment
