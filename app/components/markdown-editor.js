import Component, { tracked } from 'sparkles-component';
import { htmlSafe } from '@ember/string';
import Remarkable from 'remarkable';

const md = new Remarkable();

export default class MarkdownEditor extends Component {
  @tracked text = "# hey\nthere."

  @tracked('text')
  get html() {
    return htmlSafe(md.render(this.text));
  }
}
