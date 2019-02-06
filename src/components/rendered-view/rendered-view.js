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
      isComponentMounted: false,
      textValue: ''
    };

    codeService.updated.add(this.onCodeViewChanged, this);
  }

  // react methods definitions
  render() {
    return (
      <div className="rendered-view">

        <div
          id="renderedContent"
          contenteditable="true"
          className="rendered-input"
        ></div>

{/* 
        <textarea
          className="rendered-input"
          onChange={this.onTextChanged.bind(this)}
          value={this.state.textValue}
        ></textarea>
*/}

      </div>
    );
  }

  componentDidMount() {
    this.setState({isComponentMounted: true});
  }

  // methods definitions
  applyContent() {
    let renderedContent = document.getElementById('renderedContent');
    renderedContent.innerHTML = this.state.textValue;
  }

  onCodeViewChanged(signal) {
    this.setState(
      {
        textValue: textService.parse(signal.text)
      },
      () => {
        this.applyContent();
      }
    );
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

  update() {
    if (!this.state.isComponentMounted) {
      return;
    }

    this.forceUpdate();
  }
}
