/** @format */

const express = require("express")

const { ApolloServer } = require("apollo-server-express")
const mongoose = require("mongoose")

async function startExpressApolloServer() {
  //load schema & resolvers
  const typeDefs = require("./schema/schema")
    const resolvers = require("./resolver/resolver")
    
//Load DB method
    const mongoDataMethods = require("./data/db")

  //connect MongoDB
  const connectDB = async () => {
    try {
      await mongoose.connect(
        "mongodb+srv://ducanhn:1234@graphql.h1kvo.mongodb.net/graphQL?retryWrites=true&w=majority"
      )
      console.log("MongoDB connected")
    } catch (error) {
      console.log(error.message)
      process.exit(1)
    }
  }

  connectDB()
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ()=>({mongoDataMethods})
  })
  await server.start()

  const app = express()
  server.applyMiddleware({ app })

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve))
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  return { server, app }
}
startExpressApolloServer()
