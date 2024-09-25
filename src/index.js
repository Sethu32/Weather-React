import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import WeatherSearch from './App.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherSearch />
    <h3>Open Sourced on <a href="https://github.com/Sethu32/Weather-React" target="_blank" rel="noreferrer">Github</a></h3>
     
  </React.StrictMode>
);

reportWebVitals();


