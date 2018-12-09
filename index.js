'use strict';
const url = require('url');
const net = require('net');
const gitclient = require('git-fetch-pack');
const transport = require('git-transport-protocol');

module.exports = input => new Promise((resolve, reject) => {

  input = input.replace(/^(?!(?:https|git):\/\/)/, 'https://');

  const tcp = net.connect({
    host: url.parse(input).host,
    port: 9418
  });

  const client = gitclient(input);
  const tags = [];

  client.refs.on('data', ref => {
    const name = ref.name;

    if (/^refs\/tags/.test(name)) {
      tags.push(name.split('/')[2].replace(/\^\{\}$/, ''))
    }

  });

  client
    .pipe(transport(tcp))
    .on('error', reject)
    .pipe(client)
    .on('error', reject)
    .once('end', () => {
      resolve(tags.reverse());
    });
});