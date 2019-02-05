import React, { Component } from 'react';
import codeService from '../../services/code-service';
import textService from '../../services/rendered-text-service';

// styles
require('./code-view.scss');


export default class CodeView extends Component {
  constructor() {
    super();
    this.state = {
      textValue: ''
    };

    textService.updated.add(this.onTextViewChanged, this);
  }

  // react methods definitions
  render() {
    return (
      <div className="code-view">
        <textarea
          className="code-input"
          onChange={this.onTextChanged.bind(this)}
          value={this.state.textValue}
        ></textarea>
      </div>
    );
  }

  // methods definitions
  onTextChanged(event) {
    this.setState(
      {
        textValue: event.target.value
      },
      () => {
        codeService.dispatchUpdate(this.state.textValue)
      }
    );
  }

  onTextViewChanged(signal) {
    // TODO: later, 2-way binding should only happen
    // when some minimal code parsing exists,
    // to first see how styling is done

    // this.setState({
    //   textValue: codeService.parse(signal.text)
    // });
  }
}
