import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

const ADD_AGE = 'ADD_AGE';
const SUB_AGE = 'SUB_AGE';

export const addAge = (): { type: string } => {
    return {
        type: ADD_AGE
    }
};
export const subAge = (): { type: string } => {
    return {
        type: SUB_AGE
    }
};

const ageApp = (state: { age: number } = {age: 20}, action: { type: string }) => {
    switch (action.type) {
        case ADD_AGE:
            return {
                age: state.age + 1
            };
        case SUB_AGE:
            return {
                age: state.age - 1
            };
        default:
            return state;
    }
};

const store = createStore(ageApp);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));