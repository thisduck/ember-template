import Component, { tracked } from 'sparkles-component';
import { htmlSafe } from '@ember/string';
import Remarkable from 'remarkable';

const md = new Remarkable();

export default class MarkdownEditor extends Component {
  @tracked formText = "# hey\n*there*.\n\n- what\n- is\n- up?";
  @tracked text = '';
  @tracked liveUpdate = false;

  updateMarkdown() {
    this.text = this.formText;
  }

  @tracked('text', 'formText', 'liveUpdate')
  get html() {
    let textToConvert = this.text;

    if (this.liveUpdate) {
      textToConvert = this.formText;
    }

    return htmlSafe(md.render(textToConvert));
  }
}
