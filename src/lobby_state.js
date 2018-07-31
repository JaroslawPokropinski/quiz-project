import React from 'react';

import GameState from './game_state.js';

export default class LobbyState {

    start(store, state) {
        return Object.assign({}, state, {
            state: this
        });
    }

    handle(state, event) {
        return state;
    }

    render(store, {state, context, info}) {
        //<button onClick={()=>{this.state.context.setState({machine: <GameState context={this.state.context}/>})}}>
        return (
            <React.Fragment>
                <h1>
                    Players:
                </h1>
                <br/>
                <button onClick={()=>{store.dispatch({type: 'change_state', data: new GameState()})}}>
                    change state to game
                </button>
            </React.Fragment>
        );
    }
}