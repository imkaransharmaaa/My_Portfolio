import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AdsComponent from '..AdsComponent.js';

function App() {

//Note provide dataAdSlot value of your data-ad-slot which is your ad unit no.
    return (
        <>
            <h1>Place To show Google AdSense</h1>
           <AdsComponent dataAdSlot='X7XXXXXX5X' />
        </>

    );
}

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
