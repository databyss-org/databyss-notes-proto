import {markdown} from 'markdown';
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
    // TODO: parse databyss-specific tags
    return markdown.toHTML(value);
  }
}

// create and export singleton
let textService = new RenderedTextService();
export default textService;
