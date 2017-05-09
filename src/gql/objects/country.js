const graphql = require('graphql');

module.exports = (resolvers, requireObject) => {
  return new graphql.GraphQLObjectType({
    name: 'Country',
    fields: {
      iso_3166_1: { type: graphql.GraphQLString },
      name: { type: graphql.GraphQLString }
    }
  });
};