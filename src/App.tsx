import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import WorkWithUs from './components/WorkWithUs';
import Services from './components/Services';
import AccountBox from './components/AccountBox';
import UserType from './components/UserType';
import Footer from './components/Footer';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MyRequests from './components/MyRequests';
import MyPoints from './components/MyPoints';
import PetCareCenter from './components/PetCareCenter';
import PetCareCenterSearch from './components/PetCareCenterSearch';
import Quote from './components/Quote';
import Payment from './components/Payment';
import PaymentSuccess from './components/PaymentSuccess';
import QuestionnaireQuote from './components/QuestionnaireQuote';

import { Amplify } from 'aws-amplify';
Amplify.configure({

  API: {
    endpoints:
      [{
        name: "pawsandwingsapi",
        endpoint: "https://x0uv63dac4.execute-api.ap-northeast-1.amazonaws.com"
      }]
  }
});
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Navbar />
      <IonRouterOutlet>
        <Route exact path="/home">
        {localStorage.getItem('userID') ? <UserType/> : <HomePage />}
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Route exact path="/logout/home">
          <HomePage />
        </Route>
        <Route exact path="/work-with-us">
          <WorkWithUs />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/login/home">
          {localStorage.getItem('userID') ? <UserType/> : <HomePage />}
        </Route>
        <Route exact path="/login/home/pet-care-center">
        {localStorage.getItem('userID') ? <PetCareCenter /> : <HomePage />}
        </Route>
        <Route exact path="/login/home/pet-care-center/search">
        {localStorage.getItem('userID') ? <PetCareCenterSearch /> : <HomePage />}
        </Route>
        <Route exact path="/login/home/pet-care-center/search/center">
        {localStorage.getItem('userID') ?  <QuestionnaireQuote /> : <HomePage />}
        </Route>
        <Route exact path="/login/home/pet-care-center/search/center/payment">
        {localStorage.getItem('userID') ?  <Payment /> : <HomePage />}
        </Route>
        <Route exact path="/login/home/pet-care-center/search/center/payment/success">
        {localStorage.getItem('userID') ?   <PaymentSuccess /> : <HomePage />}
        </Route>
        <Route exact path="/my-requests">
          <MyRequests />
        </Route>
        <Route exact path="/my-points">
          <MyPoints />
        </Route>
        <Route exact path="/login">
          {localStorage.getItem('userID') ? <UserType/> : <AccountBox active="login" />}
        </Route>
        <Route exact path="/sign-up">
          {localStorage.getItem('userID') ? <UserType/> : <AccountBox active="signup" />}
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/login/user-type">
          <Redirect to="/login/home" />
        </Route>
        <Route exact path="/sign-up/user-type">
          <Redirect to="/login/home" />
        </Route>
        <Route exact path="/login/pet-care-center">
          <Redirect to="/login/home/pet-care-center" />
        </Route>
        <Route exact path="/login/pet-care-center/search">
          <Redirect to="/login/home/pet-care-center/search" />
        </Route>
        <Route exact path="/login/pet-care-center/search/center">
          <Redirect to="/login/home/pet-care-center/search/center" />
        </Route>
        <Route exact path="/login/pet-care-center/search/center/payment">
          <Redirect to="/login/home/pet-care-center/search/center/payment" />
        </Route>
        <Route exact path="/login/pet-care-center/search/center/payment/success">
          <Redirect to="/login/home/pet-care-center/search/center/payment/success" />
        </Route>
      </IonRouterOutlet>
      <Footer />
    </IonReactRouter>
  </IonApp>
);

export default App;
