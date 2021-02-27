/* eslint-disable react/no-render-return-value */
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render } from 'react-snapshot';

import App from './App';
import './styles/style.css';
import 'antd/dist/antd.css';

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

if (module.hot) {
    module.hot.accept(['./App'], () => render(App));
}