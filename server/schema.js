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

module.exports = schema;