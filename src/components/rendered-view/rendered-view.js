import React, { Component } from 'react';

// services
import codeService from '../../services/code-service';
import textService from '../../services/rendered-text-service';

// styles
require('./rendered-view.scss');


export default class RenderedView extends Component {
  constructor() {
    super();
    this.state = {
      textValue: ''
    };

    codeService.updated.add(this.onCodeViewChanged, this);
  }

  // react methods definitions
  render() {
    return (
      <div className="rendered-view">
        <textarea
          className="rendered-input"
          onChange={this.onTextChanged.bind(this)}
          value={this.state.textValue}
        ></textarea>
      </div>
    );
  }

  // methods definitions
  onCodeViewChanged(signal) {
    this.setState({
      textValue: textService.parse(signal.text)
    });
  }

  onTextChanged(event) {
    this.setState(
      {
        textValue: event.target.value
      },
      () => {
        textService.dispatchUpdate(this.state.textValue)
      }
    );
  }
}
