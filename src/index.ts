import {typeDefs} from "./gql/schema";
import {resolvers} from "./gql/resolvers";
import {startApolloServer} from "./initServer";
import { PrismaClient } from '@prisma/client'

async function main() {
    await startApolloServer(typeDefs, resolvers).then(() => {
        console.log("Server started at http://localhost:4000/graphql 🚀🚀🚀");

        const prisma = new PrismaClient()

        async function main() {
            console.log('Creating a new user');
            // Connect the client
            await prisma.$connect()
            // ... you will write your Prisma Client queries here
            const allWilders = await prisma.skills.findMany();
            console.log(allWilders)
      /*      if(allWilders.length === 0) {
                await prisma.wilder.create({
                    data: {
                        name: "John",
                        city: "New York",
                    },
                })
            }*/
        }

        main()
            .catch((e) => {
                throw e
            })
            .finally(async () => {
                await prisma.$disconnect()
            })
    });
}
main();