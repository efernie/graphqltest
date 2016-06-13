// Import the required libraries
var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var express = require('express');

var userSchema = require('./user/user-graphschema');

express()
  .use('/graphql', graphqlHTTP({ schema: userSchema, pretty: true }))
  .listen(3000);

console.log('GraphQL server running on http://localhost:3000/graphql');
