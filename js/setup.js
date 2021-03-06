
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navigation from './navigation';
import configureStore from './redux/configureStore';

function setup():React.Component {
  class Root extends Component {

    constructor() {
      super();
      this.state = {
        isLoading: false,
        store: configureStore(() => this.setState({ isLoading: false })),
      };
    }

    render() {
      return (
        <Provider store={this.state.store}>
          <Navigation />
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;
