import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoStore from "./stores/todoStore";
import {Provider} from "mobx-react";

ReactDOM.render(
    <Provider todoStore={new TodoStore()}>
        <App />
    </Provider>
    , document.getElementById('root'));