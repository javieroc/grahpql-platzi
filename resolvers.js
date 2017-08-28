const Curso = require('./models/Curso')
const Profesor = require('./models/Profesor')

const resolvers = {
    Query: {
        cursos: () => Curso.query().eager('comentarios'),
        profesores: () => Profesor.query().eager('cursos'),
        curso: (rootValue, args) => Curso.query().eager('comentarios').findById(args.id),
        profesor: (rootValue, args) => Profesor.query().eager('cursos').findById(args.id)
    }
}

module.exports = resolvers
