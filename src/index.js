import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorld } from './HelloWorld';
import { Clicker } from './Chapter-1';

const RED = '#F00';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld color={RED} />
    <Clicker />
  </React.StrictMode>
);

