import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsCapf2Xk1_98R8vT_-rHrP3aJvSqNbJk",
  authDomain: "coderhouse-ecommerce-d59c5.firebaseapp.com",
  projectId: "coderhouse-ecommerce-d59c5",
  storageBucket: "coderhouse-ecommerce-d59c5.appspot.com",
  messagingSenderId: "674201531466",
  appId: "1:674201531466:web:d9237da05041235abf62b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
