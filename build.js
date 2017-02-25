const ghpages = require('gh-pages')
const path = require('path')

ghpages.publish(path.join(__dirname, 'docs'), { dotfiles: true }, (err) => {
  if (err) return console.error(err)
  console.log('Success')
});
