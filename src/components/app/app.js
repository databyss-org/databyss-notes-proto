import React, { Component } from 'react';

// components
import CodeView from '../code-view/code-view';
import RenderedView from '../rendered-view/rendered-view';

// styles
require('./app.scss');


export default class App extends Component {
  // react methods definitions
  render() {
    return (
      <div className="app">
        <RenderedView />
        <CodeView />
      </div>
    );
  }
}
