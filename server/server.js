const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

const PORT = 5000 || process.env.PORT;
app.listen(5000., () => {
    console.log(`Server Running at http://localhost:${PORT}`)
})