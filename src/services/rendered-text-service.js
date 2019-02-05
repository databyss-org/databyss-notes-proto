import signals from 'signals';


class RenderedTextService {
  constructor() {
    // signals
    this.updated = new signals.Signal();
  }

  dispatchUpdate(value) {
    this.updated.dispatch({
      text: value
    });
  }

  parse(value) {
    // TODO: parse code to styled text
    let parsed = value;

    return parsed;
  }
}

// create and export singleton
let textService = new RenderedTextService();
export default textService;
