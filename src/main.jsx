import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import CSS BLK Disini
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/blk-design-system-react.css";
import "./assets/demo/demo.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)