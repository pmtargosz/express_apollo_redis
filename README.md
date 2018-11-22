# Overview

Playground for express, apollo, graphQl, redis.

## Installation

First, clone this repo and change to the directory:
```bash
git clone git@github.com:pmtargosz/<project>.git
cd <project>
```

### Install

```bash
npm install
```

And also you have to local install redis server.

### Config

Creat `config.js` file inside project root folder and add this code changing `<your_data>`:
```js
const config = {
    PORT: process.env.PORT || 3000,
    ENV: process.env.NODE_ENV || 'development',
    PATH: '/graphql'
}

module.exports = config;
```


### Run Dev Environment

```bash
npm run server
# http://localhost:3000/graphql
```

## Resources
* [expressjs](https://expressjs.com/) - Express is a web application framework for Node.js, released as free and open-source software under the MIT License.
* [apollo](https://www.apollographql.com/) - GraphQL server.
* [redis](https://redis.io/) - Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker.

## License
[MIT](https://opensource.org/licenses/MIT)
