import React from 'react';
import ReactDOM from 'react-dom';
import 'foundation-sites/dist/css/foundation.min.css'
import './index.css';
// import styled from 'styled-components'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ProductProvider } from './components/context';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
