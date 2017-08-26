const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
    type Curso {
        id: ID!
        title: String!
    }

    type Query {
        cursos: [Curso]
    }
`

const schema = makeExecutableSchema({ typeDefs })

module.exports = schema
