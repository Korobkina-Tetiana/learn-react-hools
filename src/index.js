import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorld } from './HelloWorld';
// import { Clicker } from './Chapter-1';
// import { FormExample } from './Chapter-2';
// import { Example } from './Chapter-3';
// import { Estimation } from './Chapter-4';
// import { Calculator } from './Chapter-5';
// import { Counter } from './Chapter-6';
import { Character } from './Chapter-7';

const RED = '#F00';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HelloWorld color={RED} />
    <Clicker />
    <FormExample />
    <Example />
    <Estimation />
    <Calculator />
    <Counter /> */}
    <Character />
  </React.StrictMode>
);

