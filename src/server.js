const {ApolloServer}=require('apollo-server')

const resolvers = require ('./resolvers')

const typeDefs = require('./schema')

const SERVER_PORT = 4000

const server = new ApolloServer({
    cors: true,
    context:()=>({}),
    dataSources: ()=>({}),
    resolvers,
    typeDefs
})


//Para pruebas de integración
module.exports={server}
