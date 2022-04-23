import Wilders from "../controllers/Wilders";
import WilderModel from "../models/Wilder";

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

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves all wilder from the "wilders" array above.
export const resolvers = {
    Query: {
         getAllWilders: async () => {
            return await WilderModel.find;
        },
    },
};