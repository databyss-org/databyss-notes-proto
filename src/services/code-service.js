import signals from 'signals';


class CodeService {
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
    // TODO: parse text view to code?
    // (likely harder than the reverse)
    let parsed = value;

    return parsed;
  }
}

// create and export singleton
let codeService = new CodeService();
export default codeService;
