import React from 'react';
import '../styles/index.css';
import { AiOutlineMail } from "react-icons/ai";
import { IonContent, IonFooter, IonGrid, IonRow, IonCol, IonTitle, IonToolbar } from '@ionic/react';
function Footer() {
    return (<>
        <IonFooter>
            <IonGrid >
                <IonRow class='footer-wings-paws'>
                    <IonCol size="9" className="copywrite-text">Copyright © 2023 Paws & Wings</IonCol>
                    <IonCol size='3' className="footer-email">
                        Email: paws&wings@gmail.com
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonFooter>
    </>);
} export default Footer;