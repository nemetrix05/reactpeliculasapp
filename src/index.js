import React from 'react';
import ReactDOM from 'react-dom';
// Aqui en el index usamos las librerias de react router
// Este modulo sincrinisa los cambios en la url con la UI
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Envolvemos el componente inicial para que use el modulo react router

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
