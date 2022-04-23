import {typeDefs} from "./gql/schema";
import {resolvers} from "./gql/resolvers";
import {startApolloServer} from "./initServer";

async function main() {
    await startApolloServer(typeDefs, resolvers).then(() => {
        console.log("Server started at http://localhost:4000/graphql 🚀🚀🚀");
    });
}
main();