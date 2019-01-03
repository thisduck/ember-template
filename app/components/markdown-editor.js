import Component, { tracked } from 'sparkles-component';
import { htmlSafe } from '@ember/string';

export default class MarkdownEditor extends Component {
  @tracked text = "# hey\nthere."

  @tracked('text')
  get html() {
    return htmlSafe(this.text);
  }


}
