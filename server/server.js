const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const context = require('./context')
const cors = require('cors')

const app = express();
app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema: schema,
    context: context,
    graphiql: true
}))


const PORT = 5000 || process.env.PORT;
app.listen(5000., () => {
    console.log(`Server Running at http://localhost:${PORT}`)
})