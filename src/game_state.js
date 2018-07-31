import React from 'react';

import LobbyState from './lobby_state.js';

export default class GameState {

    start(store, state) {
        return Object.assign({}, state, {
            state: this
        });
    }

    handle(state, event) {
        return state;
    }

    render(store, { state, context, info }) {
        return (
            <React.Fragment>
                <h1>
                    Is this a question?
                </h1>
                <br />
                <button onClick={() => { store.dispatch({ type: 'change_state', data: new LobbyState() }) }}>
                    change state to lobby
                </button>
            </React.Fragment>
        );
    }
}