import React from 'react';
import ReactDOM from 'react-dom/client';
// The react-dom/client package provides client-specific methods used 
// for initializing a React app on the client-side, typically in a web browser environment[1][5].
import './index.css';
import App from './App';
// App: App is the name of the module or component that you're importing. In this case, it's named 'App'. 
// You can use this imported module or component in your current file.
import './App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
// The code root = ReactDOM.createRoot(document.getElementById('root')); is used to create a new root for a React application. 
// The createRoot() function takes a container element as its argument, and returns a new root object. 
// The root object can then be used to render React components into the container element.
// In the example above, the createRoot() function is used to create a new root object for the container element with the ID root. 
// The root object is then used to render the App component into the container element.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
