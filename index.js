
const cheerio = require('cheerio');

function smallestPart(page, words, unimportantText, callback) {
  var $ = cheerio.load(page);

  var items = $("*:contains('" + words + "')").not('html, head');
  var bestItem = null;

  for (var i = 0; i < items.length; i++) {
    if (!bestItem || $.contains(bestItem, $(items[i])) > -1) {
      // bestItem contains this text
      bestItem = $(items[i]);
    }
  }

  if (bestItem) {
    return callback(null, bestItem.html(), false);
  } else {
    return callback('not found');
  }
}

module.exports = smallestPart;
