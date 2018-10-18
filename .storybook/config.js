import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /.stories.js$/);
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

function loadStories() {
  require('../stories/index.stories.js')
}

configure(loadStories, module);
