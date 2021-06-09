const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Query {
        Articles: [Article!]!
        Comments: [Comment!]!
    }

    type Article {
        _id: ID!
        text: String!
        comments: [Comment]
    }

    type Comment {
        _id: ID
        text: String
        articleId: ID
    }

    type Successfull {
        _id: ID
        text: String
    }

    type Mutation {
        createArticle(text: String!): Article!
        updateArticle(_id: ID!,text: String!): Successfull!
        deleteArticle(_id: ID!): Successfull!
        createComment(articleId: ID!, text: String!): Comment!
        updateComment(_id: ID!, text: String!): Successfull!
        deleteComment(_id: ID!): Successfull!
    }
`;

module.exports = typeDefs