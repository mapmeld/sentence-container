const fs = require('fs');
const sentenceContainer = require('../index.js');

var page1 = fs.readFileSync('./page01.xhtml') + '';
sentenceContainer(page1, "It's wash day for the Socks.", [], function(err, div, hasMoreText) {
  //console.log(err);
  console.log(div);
  //console.log(hasMoreText);
});
