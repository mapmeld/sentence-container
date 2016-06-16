# sentence-container

This is a NodeJS package for finding the smallest node which contains a given string. This makes it easier
to do in-place replacements of these nodes for translations.

For example if I have the HTML document:

```html
<html>
  <body>
    <div>
      <p>
        This is an <strong>awesome</strong> example.
      </p>
      <p>
        This is some other text.
      </p>
    </div>
  </body>
</html>
```

If I translate the sentence "This is an awesome example" and want to replace it in this document,
all of the outer elements contain the text() content "This is an awesome example".

This script will filter through those until finding the smallest containing node, even though it contains
an HTML tag inside of it which is not in the search text:

```html
This is an <strong>awesome</strong> example.
```

This text can then be replaced by the translation text.

## Usage

```bash
npm install sentence-container --save
```

```javascript
const sentenceContainer = require('sentence-container');
```

## License

Open source, MIT license
