import React from 'react';
import Redux from 'redux';
import './App.css';

import StateContext from './state_context.js';


const init = {
  state: 'undefined',
  socket: 'undefined',
  info: {}
}
const reducer = (state=init, action) => {
  let newState = state.state.handle(action);
}


class App extends React.Component {

  constructor(props) {
    super(props);

    this.store = Redux.createStore(reducer);
  }

  render() {
    return (
      <React.Fragment>
        <StateContext />
      </React.Fragment>
    );
  }
}

export default App;
