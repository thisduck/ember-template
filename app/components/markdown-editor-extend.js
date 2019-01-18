import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import Remarkable from 'remarkable';

const md = new Remarkable();

export default Component.extend({
  text: "# hey\nthere.",

  html: computed('text', function() {
    return htmlSafe(md.render(this.text));
  })
})
