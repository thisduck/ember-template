import Component from '@ember/component';
import { htmlSafe } from '@ember/string';
import Remarkable from 'remarkable';
import { computed } from '@ember/object';

const md = new Remarkable();

export default class MarkdownEditorClassComponent extends Component {
  text = "# hey\nthere."

  html = computed('text', function() {
    return htmlSafe(md.render(this.text));
  })._getter;
}
