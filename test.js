const tags = require("./index");

async function tagsUsage(input) {
  try {
    const data = await tags(input);

    return data;
  } catch (error) {
    return new Error(error);
  }
}

tagsUsage("https://github.com/elastic/elasticsearch-js")
  .then(e=>console.log(e))
  .catch(e=>console.log(e));