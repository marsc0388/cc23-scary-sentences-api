const { makeExecutableSchema } = require('@graphql-tools/schema');
const context = require('./context')

const typeDefs =    `
type Query {
    Story(id: Int!): Story
    Stories: [Story]
},
type Story {
    id: Int
    body: String
    author: String
}
`

const resolvers = {
    Query: {
        Story: async (_, args) => {
            const results = await context.prisma.story.findUnique({
                where: {
                    id: args.id
                }
            })
            return results;
        },
        Stories: async () => {
            const results = await context.prisma.story.findMany();
            return results;
        }
    }
}


const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
});

module.exports = schema;