### repo-tags

#### Getting started

Want to know the version of the repo justing bu entering the repo address
as just vanilla javascript is used

```js
npm install repo-tags
```

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