import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import store from "./store";
import {observer} from "mobx-react";

@observer
class App extends Component<{}, {}> {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <p>
                        {store.age}
                        <button onClick={() => store.addAge()}>한해가 지나갔다.</button>
                    </p>
                </header>
            </div>
        );
    }
}

export default App;