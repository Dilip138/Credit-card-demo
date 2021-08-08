import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { HunelProvider, HunelCreditCard } from "reactjs-credit-card";

const hunel = new HunelCreditCard({
  middlePartHide: true, //set true to mask credit card number on the card
});

ReactDOM.render(
  <HunelProvider config={hunel}>
    <App />
    </HunelProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
