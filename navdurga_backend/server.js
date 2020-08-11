const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
// const gql = require('graphql-tag');

const { MONGODB } = require('./config');

const resolvers = require('./resolvers/index');
const typeDefs = require('./typeDefs/typeDefs');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log(`MongoDB Connected Successfully..`);
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Apollo Server Running at: ${res.url}`);
  });
