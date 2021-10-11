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
},
input StoryInput {
    id: Int
    body: String!
    author: String!
}
type Mutation {
    AddStory(input: StoryInput): Story!
    DeleteStory(id: Int!): Story!
    EditStory(input: StoryInput): Story!
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
    },
    Mutation: {
        AddStory: async (parent, args) => {
            const result = await context.prisma.story.create({
                data: {
                    body: args.input.body,
                    author: args.input.author,
                },
            })
            return result;
        },
        DeleteStory: async (_, args) => {
            const result = await context.prisma.story.delete({
                where: {id: args.id}
            })
            return result;
        },
        EditStory: async(_, args) => {
            const result = await context.prisma.story.update({
                where: {
                    id: args.input.id
                },
                data: {
                    id: args.input.id,
                    body: args.input.body,
                    author: args.input.author
                }
            })
            return result;
        }
    }
}


const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
});

module.exports = schema;