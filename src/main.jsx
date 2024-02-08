import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1Ijoib2xpdmExMjMiLCJhIjoiY2wzdDZzMHh1MXh6ajNib2VhcHR4dWx3ZSJ9.e1SYRWtDEVsfVaId3w5tAg';

import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
