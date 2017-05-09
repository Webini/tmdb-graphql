const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  return new graphql.GraphQLObjectType({
    name: 'Language',
    fields: {
      iso_639_1: { type: graphql.GraphQLString },
      name: { type: graphql.GraphQLString }
    }
  });
};