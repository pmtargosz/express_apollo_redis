const { gql } = require('apollo-server-express');

module.exports = gql`
    type Query {
        get(key: String!): String
    }

    type Mutation {
        set(key: String!, value: String!): Boolean!
    }
`