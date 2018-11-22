const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const redis = require('redis');
const { PORT, PATH, ENV } = require('../config');
const typeDefs = require('./typeDefs/index');
const resolvers = require('./resolvers/index');

const app = express();

const client = redis.createClient();

client.on('error', err => {
    console.log(`Error ${err}`)
});

app.disable('x-powered-by');

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: { client }, 
    playground: ENV !== 'production' 
});

server.applyMiddleware({ app, PATH });

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}, http://localhost:${PORT}${PATH}`)
});