import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import './components/media/style.css'
import Service from "./components/admin/Service";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Service />
  </React.StrictMode>
);