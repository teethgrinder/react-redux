import React from  "react";
import {render} from  "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Provider} from "react-redux";
import store from "./store"
import App from "./containers/App"
import { ConnectedRouter } from 'react-router-redux';

render(

    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
 ,
    window.document.getElementById('app'));
