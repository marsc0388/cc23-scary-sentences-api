const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt
} = require('graphql');

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Test',
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => 'This is a Test!!'
            }
        })
    })
})

const StoryType = new GraphQLObjectType({
    name: 'Story',
    description: 'This represents a short scary story',
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        body: {type: GraphQLNonNull(GraphQLString)},
        author: {type: GraphQLString}
    })
})

module.exports = schema;