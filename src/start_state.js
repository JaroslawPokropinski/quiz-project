import React from 'react';

import LobbyState from './lobby_state.js';


export default class StartState {

    start(store, state) {

        let ip = 'localhost';
        let socket = new WebSocket('ws://' + ip + ':8080/tv');
        socket.onopen = (e) => { socket.setConnected(true); store.dispatch({type: 'change_state', data: new LobbyState()}); };
        socket.onmessage = (e) => { console.log(e.data); store.dispatch({type: 'event', subtype: 'socket_msg', data: e.data}); };

        let ctx = Object.assign({}, state.context, {
            socket: socket,

        });

        //setTimeout(()=>store.dispatch({type: 'change_state', data: new LobbyState()}), 1);
        

        return Object.assign({}, state, {
            state: this,
            context : ctx
        });
    }

    handle(state, event) {
        return state;
    }
    render(store, {state, context, info}) {
        //<button onClick={()=>{this.state.context.setState({machine: <GameState context={this.state.context}/>})}}>
        return (
            <React.Fragment>
            </React.Fragment>
        );
    }
}