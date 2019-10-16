import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import * as actions from "./index";
import {connect} from "react-redux"
import {bindActionCreators, Dispatch} from "redux"

interface AppProps {
    age: number;
    EventActions: ActionProps;
}

interface ActionProps {
    addAge: any;
    subAge: any;
}

class App extends Component<AppProps, {}> {
    _onAddAge = () => {
        const {EventActions} = this.props;
        EventActions.addAge();
    }
    _onSubAge = () => {
        const {EventActions} = this.props;
        EventActions.subAge();
    }

    render() {
        const {age} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>{age}</p>
                    <button onClick={this._onAddAge}>an year passed...</button>
                    <button onClick={this._onSubAge}>last year...</button>
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
    EventActions: bindActionCreators({
        addAge: actions.addAge,
        subAge: actions.subAge
    }, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
