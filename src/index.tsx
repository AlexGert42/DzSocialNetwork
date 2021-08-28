import React from 'react';
import ReactDOM from 'react-dom';
import './defaultStyle/index.scss';
import App from './App';
import {store} from './store/reducers'
import {Provider} from 'react-redux'
import 'antd/dist/antd.css'


ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
    ,
    document.getElementById('root')
);


