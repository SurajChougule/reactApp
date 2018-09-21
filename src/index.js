import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import { BrowserRouter} from "react-router-dom";
import configStore from './store/configStore';
import {Provider} from 'react-redux'; 

const store = configStore();

render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);