import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import 'styles/root.css';

render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
