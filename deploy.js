var ghpages = require('gh-pages');

function logError(err) {
    console.log(err);
}

ghpages.publish('dist', {dest: 'dist/'}, logError);
ghpages.publish('public', {add: true}, logError);