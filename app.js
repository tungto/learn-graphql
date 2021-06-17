const express = require('express');

const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

// Load schema & resolvers
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

//Connect to MongoDB
const connectDB = async () => {
  try {
    console.log('connected');
    await mongoose.connect(
      `mongodb+srv://tungto:makunu101@cluster0.spdpl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`server ready at http://localhost4000${server.graphqlPath}`);
});
