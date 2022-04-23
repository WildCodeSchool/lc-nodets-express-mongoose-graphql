import mongoose from 'mongoose';
import WildersController from './controllers/Wilders';
import cors from 'cors';
import wilder from "./models/Wilder";
import express from "express";
const { ApolloServer, gql } = require('apollo-server-express');

const wilders = [
    {
        name: 'Kate Chopin',
        city: 'Lyon',
        skills: ['React', 'Node', 'GraphQL', 'MongoDB', 'TypeScript'],
    },
    {
        name: 'Paul Auster',
        title: 'Nice',
        skills: ['JavaScript', 'TypeScript', 'GraphQL'],
    },
];

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
    type Skill {
        votes: Int
        title: String
    }
    # This "Wilder" type defines the queryable fields for every wilder in our data source.
    type Wilder {
        name: String
        city: String
        skills: [Skill]
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "getAllWilders" query returns an array of zero or more Wilders (defined above).
    type Query {
        getAllWilders: [Wilder]
    }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves all wilder from the "wilders" array above.
const resolvers = {
    Query: {
        getAllWilders: () => wilders,
    },
};
async function startApolloServer(typeDefs: any, resolvers: any) {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await server.start();
    server.applyMiddleware({ app });
    app.listen({ port: 4000 });
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
startApolloServer(typeDefs, resolvers);