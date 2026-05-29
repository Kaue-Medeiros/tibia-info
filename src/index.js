import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Imagem from './components/Imagem'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <div style={{ display: 'flex', justifySelf: 'center' }}>
      <Imagem src={require('./images/Tibia_Logo.png')} alt="Tibia Logo" />
      <Imagem src={require('./images/Tibia_Info.png')} alt="Tibia Info" />
    </div>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
