### repo-tags

#### Getting started

Want to know the version of the repo justing by entering the repo address
as just vanilla javascript is used

```js
npm install repo-tags
```

## Usage
```js
const tags = require("repo-tags");

async function tagsUsage(input) {
  try {
    const data = await tags(input);

    return data;
  } catch (error) {
    return new Error(error);
  }
}

tagsUsage("https://github.com/elastic/elasticsearch-js")
  .then(e=>console.log(e))  //arrays of the version of the elasticsearch
  .catch(e=>console.log(e));
```

You can also use with [Tosemver](https://github.com/sindresorhus/to-semver) to sanitize it :smile:

Want to contribute do not hesitate to send the pull request