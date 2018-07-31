import React from 'react';

import LobbyState from './lobby_state.js';

export default class StateContext extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            machine: <LobbyState context={this} /*handleEvent={(handle)=>{this.handleEvent = handle;}}*//>,
            socket: undefined
        }
    }

    setSocket(s) {
        this.setState({socket: s});
    }
    getSocket() {
        return this.state.socket;
    }

    pushData(d) {
        //this.state.machine.
    }

    render() {
        let ToRender = this.state.machine;
        return (
            <React.Fragment>
                {ToRender}
            </React.Fragment>
            
        );
    }
}