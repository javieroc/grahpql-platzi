const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const schema = require('./schema')

require('./db/setup')

let app = express()

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
    formatError: (error) => {
      return {
        nombre: error.name,
        mensaje: error.message
      }
    }
  })
)

app.use(
  '/graphiql',
  graphiqlExpress({ endpointURL: '/graphql' })
)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`)
})
