import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/store' 
import {Provider} from 'react-redux'
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback="loading">
        <Provider store={store}>
        <App />
        </Provider>
    </Suspense>
    //document.getElementById('root')
);
