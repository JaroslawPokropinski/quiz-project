import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';

import StartState from './start_state';


const render = (state) => {
    ReactDOM.render(
        <App state={state}/>,
        document.getElementById('root')
    );
}

const init = {
    state: {},
    context: {}
}
const reducer = (state = init, action) => {
    console.log(state);
    console.log(action);
    if(action.type === 'change_state') {

       return action.data.start(store, state);
    }
    if(action.type === 'event') {
        return state.state.handle(state, action);
    }

    return state;

}

const App = ({state}) => {
    console.log(state);
    return state.state.render(store, state);
}

const store = createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
    render(store.getState());
});

store.dispatch({type: 'change_state', data: new StartState(store.getState().context, store)});