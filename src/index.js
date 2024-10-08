import React from 'react';
import ReactDOM from 'react-dom/client';
import 'public/customer/fontawesome/css/all.min.css'; // Import FontAwesome CSS
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
