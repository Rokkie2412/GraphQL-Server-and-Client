const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')

const MONGODB = "mongodb+srv://ervan:ervanjovian@cluster0.zvbm8i9.mongodb.net/?retryWrites=true&w=majority"

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser : true})
    .then(() =>{
        console.log("Connected to MongoDB");
        return server.listen({port:5000})
    })
    .then((res) =>{
        console.log(`server is running at ${res.url}`)
    })