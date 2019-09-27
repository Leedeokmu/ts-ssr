import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {addAge, subAge} from "./index";
import {connect} from "react-redux"

interface AppProps {
    age: number;
    onAddClick(): void;
    onSubClick(): void;
}

class App extends Component<AppProps, {}> {

    render() {
        const {age, onAddClick, onSubClick} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Learn</a>
                    <p>{age}</p>
                    <button onClick={onAddClick}>an year passed...</button>
                    <button onClick={onSubClick}>last year...</button>
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state: {age: number}) => {
    return {
        age: state.age
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        onAddClick: () => dispatch(addAge()),
        onSubClick: () => dispatch(subAge())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
