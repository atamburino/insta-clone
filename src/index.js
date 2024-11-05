// Imports the core React library
import React from 'react';

// Imports ReactDOM's client functionality needed for rendering React elements in the browser
// Had to look up the client part - '/client' path specifies we're using React 18's new root API
import ReactDOM from 'react-dom/client';

// Imports CSS stylesheet from index.css & these styles are available through the app
import './styles/index.css';

// Imports the main App component that we created in App.js
// This is the top-level component that will contain all other components (think as the component wrapper)
import App from './App';

// performance metrics -- Need to read up on this more
import reportWebVitals from './reportWebVitals';

// This is our root React element using the DOM element with id="root"
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renders our React application into the root element
// The render method takes JSX and transforms it into real DOM elements
root.render(
  // React.StrictMode is a development tool for highlighting potential problems, this activates additional checks and warnings for its descendants
  <React.StrictMode>
    {/* Renders our main App component */}
    <App />
  </React.StrictMode>
);

// Performance measuring code
// You can pass a function here to log performance metrics
// Examples: reportWebVitals(console.log) or send data to an analytics service
// Learn more at https://bit.ly/CRA-vitals
//need to read more on this
reportWebVitals();