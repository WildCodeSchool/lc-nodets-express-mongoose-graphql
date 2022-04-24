import express from "express";
import {ApolloServer} from "apollo-server-express";
import {prisma, PrismaClient} from "@prisma/client";

export async  function startApolloServer(typeDefs: any, resolvers: any) {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await server.start();
    server.applyMiddleware({ app });
    app.listen({ port: 4000 });
    const prisma = new PrismaClient();
/*    const user = await prisma.wilder.create({
        data: {
            id: 2,
             name: "Oussama AKIR",
            city: "Domont",
        },
    });*/
    const skills = await prisma.skills.create({
        data: {
            id: 9,
            votes: "JavaScript",
            title: "advanced",
            wilderId: 2,
        },
    });
}